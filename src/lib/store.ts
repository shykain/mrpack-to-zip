import { create } from "zustand";
import {
  convertToZip,
  downloadBlob,
  isValidMrpackFile,
  parseMrpackStructure,
  downloadMrpackFromUrl,
  getMrpackUrlFromProjectId,
  type FileNode,
  type PackInfo,
} from "@/lib/converter";
import {
  DEFAULT_OPTIONS,
  type ConvertOptions,
  type ConvertProgress,
  type ConvertStatus,
  type InputMode,
} from "@/lib/types";

interface ConvertState {
  status: ConvertStatus;
  progress: number;
  currentFile?: string;
  totalFiles: number;
  processedFiles: number;
  skippedFiles: number;
  modCount: number;
  error?: string;
  fileName?: string;
  fileSize?: number;
  downloadUrl?: string;
  options: ConvertOptions;
  selectedFile: File | null;
  isDragging: boolean;
  fileTree: FileNode[];
  packInfo?: PackInfo;
  isParsingStructure: boolean;
  inputMode: InputMode;
  projectId: string;
  mrpackUrl: string;

  setDragging: (v: boolean) => void;
  setFile: (file: File | null) => void;
  setInputMode: (mode: InputMode) => void;
  setProjectId: (id: string) => void;
  setMrpackUrl: (url: string) => void;
  fetchFromProject: () => Promise<void>;
  fetchFromUrl: () => Promise<void>;
  fetchFromUrlWithUrl: (url: string) => Promise<void>;
  parseStructure: () => Promise<void>;
  setOption: <K extends keyof ConvertOptions>(
    key: K,
    value: ConvertOptions[K],
  ) => void;
  reset: () => void;
  start: () => Promise<void>;
  download: () => void;
}

const initialProgress: ConvertProgress = {
  status: "idle",
  progress: 0,
  totalFiles: 0,
  processedFiles: 0,
  skippedFiles: 0,
  modCount: 0,
};

export const useConvertStore = create<ConvertState>((set, get) => ({
  ...initialProgress,
  options: { ...DEFAULT_OPTIONS },
  selectedFile: null,
  isDragging: false,
  fileTree: [],
  packInfo: undefined,
  isParsingStructure: false,
  inputMode: "file",
  projectId: "",
  mrpackUrl: "",

  setDragging: (v) => set({ isDragging: v }),

  setFile: (file) => {
    if (file && !isValidMrpackFile(file)) {
      set({
        selectedFile: null,
        status: "error",
        error: `"${file.name}" is not a valid .mrpack file. Please select a file with the .mrpack extension.`,
      });
      return;
    }
    set({
      selectedFile: file,
      status: "idle",
      progress: 0,
      error: undefined,
      downloadUrl: undefined,
      fileName: undefined,
      fileSize: undefined,
      processedFiles: 0,
      skippedFiles: 0,
      modCount: 0,
      fileTree: [],
      packInfo: undefined,
    });
    if (file) {
      setTimeout(() => get().parseStructure(), 100);
    }
  },

  setInputMode: (mode) => {
    set({ inputMode: mode });
    if (mode !== "file") {
      set({ selectedFile: null });
    }
  },

  setProjectId: (id) => set({ projectId: id }),
  setMrpackUrl: (url) => set({ mrpackUrl: url }),

  fetchFromProject: async () => {
    const { projectId } = get();
    if (!projectId.trim()) {
      set({ error: "Please enter a Modrinth project ID or slug." });
      return;
    }

    set({ status: "parsing", error: undefined, progress: 0 });

    try {
      const url = await getMrpackUrlFromProjectId(projectId.trim());
      await get().fetchFromUrlWithUrl(url);
    } catch (err) {
      set({
        status: "error",
        error:
          err instanceof Error
            ? err.message
            : "Failed to fetch project from Modrinth.",
      });
    }
  },

  fetchFromUrl: async () => {
    const { mrpackUrl } = get();
    const trimmed = mrpackUrl.trim();
    if (!trimmed) {
      set({ error: "Please enter a .mrpack download URL." });
      return;
    }

    // If it's a Modrinth project page URL (not a direct .mrpack link),
    // resolve it through the API to get the version's .mrpack download URL.
    const isProjectPage = /modrinth\.com\/(?:project|modpack|mod|plugin|shader|resourcepack)\//i.test(
      trimmed,
    );
    if (isProjectPage && !trimmed.includes(".mrpack")) {
      set({ status: "parsing", error: undefined, progress: 0 });
      try {
        const { getMrpackUrlFromProjectId } = await import("@/lib/converter");
        const directUrl = await getMrpackUrlFromProjectId(trimmed);
        await get().fetchFromUrlWithUrl(directUrl);
      } catch (err) {
        set({
          status: "error",
          error:
            err instanceof Error
              ? err.message
              : "Failed to resolve project URL.",
        });
      }
      return;
    }

    await get().fetchFromUrlWithUrl(trimmed);
  },

  fetchFromUrlWithUrl: async (url: string) => {
    set({ status: "parsing", error: undefined, progress: 0 });

    try {
      const { blob, name } = await downloadMrpackFromUrl(url);
      const file = new File([blob], name, { type: "application/zip" });
      set({
        selectedFile: file,
        status: "idle",
        progress: 0,
        fileName: name,
        fileSize: blob.size,
      });
      setTimeout(() => get().parseStructure(), 100);
    } catch (err) {
      set({
        status: "error",
        error:
          err instanceof Error
            ? err.message
            : "Failed to download .mrpack file.",
      });
    }
  },

  parseStructure: async () => {
    const { selectedFile } = get();
    if (!selectedFile) return;

    set({ isParsingStructure: true });
    try {
      const result = await parseMrpackStructure(selectedFile);
      set({
        fileTree: result.fileTree,
        packInfo: result.packInfo,
        totalFiles: result.totalFiles,
        modCount: result.index.files.length,
        isParsingStructure: false,
      });
    } catch (err) {
      set({
        isParsingStructure: false,
        error:
          err instanceof Error
            ? err.message
            : "Failed to parse .mrpack structure.",
      });
    }
  },

  setOption: (key, value) =>
    set((state) => ({ options: { ...state.options, [key]: value } })),

  reset: () => {
    const { downloadUrl } = get();
    if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    set({
      ...initialProgress,
      options: { ...DEFAULT_OPTIONS },
      selectedFile: null,
      isDragging: false,
      error: undefined,
      downloadUrl: undefined,
      fileName: undefined,
      fileSize: undefined,
      fileTree: [],
      packInfo: undefined,
      projectId: "",
      mrpackUrl: "",
    });
  },

  start: async () => {
    const { selectedFile, options } = get();
    if (!selectedFile) {
      set({ status: "error", error: "Please select or fetch a .mrpack file first." });
      return;
    }

    const prevUrl = get().downloadUrl;
    if (prevUrl) URL.revokeObjectURL(prevUrl);

    set({
      status: "parsing",
      progress: 0,
      error: undefined,
      downloadUrl: undefined,
      processedFiles: 0,
      skippedFiles: 0,
    });

    try {
      const result = await convertToZip(selectedFile, options, (p) => {
        set({
          status: p.status,
          progress: p.progress,
          currentFile: p.currentFile,
          totalFiles: p.totalFiles,
          processedFiles: p.processedFiles,
          skippedFiles: p.skippedFiles,
          modCount: p.modCount,
        });
      });

      const url = URL.createObjectURL(result.blob);
      set({
        status: "done",
        progress: 100,
        downloadUrl: url,
        fileName: result.fileName,
        fileSize: result.blob.size,
      });
    } catch (err) {
      set({
        status: "error",
        error:
          err instanceof Error
            ? err.message
            : "An unknown error occurred during conversion.",
      });
    }
  },

  download: () => {
    const { downloadUrl, fileName } = get();
    if (!downloadUrl || !fileName) return;
    fetch(downloadUrl)
      .then((r) => r.blob())
      .then((blob) => downloadBlob(blob, fileName))
      .catch(() => {
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = fileName;
        a.click();
      });
  },
}));

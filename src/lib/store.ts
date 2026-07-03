import { create } from "zustand";
import {
  convertToZip,
  downloadBlob,
  isValidMrpackFile,
} from "@/lib/converter";
import {
  DEFAULT_OPTIONS,
  type ConvertOptions,
  type ConvertProgress,
  type ConvertStatus,
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

  setDragging: (v: boolean) => void;
  setFile: (file: File | null) => void;
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
    });
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
    });
  },

  start: async () => {
    const { selectedFile, options } = get();
    if (!selectedFile) {
      set({ status: "error", error: "Please select a .mrpack file first." });
      return;
    }

    // Revoke any previous download URL
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
    // Use a fresh fetch to get the blob for file-saver (works more reliably)
    fetch(downloadUrl)
      .then((r) => r.blob())
      .then((blob) => downloadBlob(blob, fileName))
      .catch(() => {
        // Fallback: direct anchor download
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = fileName;
        a.click();
      });
  },
}));

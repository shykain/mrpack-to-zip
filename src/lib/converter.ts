import JSZip from "jszip";
import { saveAs } from "file-saver";
import type {
  ConvertOptions,
  ConvertProgress,
  ModrinthIndex,
  ProgressCallback,
} from "./types";

/**
 * Normalize a filename to ASCII-safe characters for better cross-platform
 * compatibility. Replaces problematic characters but preserves the path
 * structure.
 */
export function normalizeFilename(name: string): string {
  return name
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._\-\/]/g, "_")
    .replace(/_+/g, "_")
    .replace(/\/_+/g, "/");
}

/**
 * Read and parse a .mrpack file (which is a ZIP archive) into a structured
 * ModrinthIndex object plus the raw zip handle for accessing overrides.
 */
export async function parseMrpack(file: File): Promise<{
  index: ModrinthIndex;
  zip: JSZip;
}> {
  const zip = await JSZip.loadAsync(file);
  const indexFile = zip.file("modrinth.index.json");

  if (!indexFile) {
    throw new Error(
      "Invalid .mrpack file: missing modrinth.index.json. This file may be corrupted or not a real Modrinth modpack.",
    );
  }

  const indexContent = await indexFile.async("string");
  let index: ModrinthIndex;
  try {
    index = JSON.parse(indexContent);
  } catch {
    throw new Error(
      "Failed to parse modrinth.index.json — the file appears to be corrupted.",
    );
  }

  if (!index.files || !Array.isArray(index.files)) {
    throw new Error("Invalid modrinth.index.json: missing files array.");
  }

  return { index, zip };
}

/**
 * Download a single mod file from a URL. Tries each URL in the downloads
 * array in order until one succeeds.
 */
async function downloadModFile(urls: string[]): Promise<Blob | null> {
  for (const url of urls) {
    // Modrinth CDN URLs use http or https; prefer https
    const safeUrl = url.startsWith("http://")
      ? url.replace("http://", "https://")
      : url;

    try {
      const response = await fetch(safeUrl);
      if (!response.ok) continue;
      const blob = await response.blob();
      if (blob.size > 0) return blob;
    } catch {
      // Try next URL
    }
  }
  return null;
}

/**
 * Convert a .mrpack file to a standard ZIP file. This is the main entry
 * point. All processing happens client-side.
 */
export async function convertToZip(
  file: File,
  options: ConvertOptions,
  onProgress: ProgressCallback,
): Promise<{ blob: Blob; fileName: string; skipped: number; total: number }> {
  const baseProgress: ConvertProgress = {
    status: "parsing",
    progress: 5,
    totalFiles: 0,
    processedFiles: 0,
    skippedFiles: 0,
    modCount: 0,
  };

  onProgress({ ...baseProgress, currentFile: "Parsing .mrpack..." });

  const { index, zip } = await parseMrpack(file);
  const modFiles = index.files;
  const totalMods = modFiles.length;

  onProgress({
    ...baseProgress,
    status: "parsing",
    progress: 10,
    modCount: totalMods,
    currentFile: `Found ${totalMods} mod files`,
  });

  const outputZip = new JSZip();
  let processed = 0;
  let skipped = 0;

  // Process mod files
  if (options.downloadModFiles && totalMods > 0) {
    onProgress({
      ...baseProgress,
      status: "downloading",
      progress: 15,
      modCount: totalMods,
      totalFiles: totalMods,
      currentFile: "Downloading mod files...",
    });

    for (const modFile of modFiles) {
      let targetPath = modFile.path;
      if (options.normalizeFilenames) {
        targetPath = normalizeFilename(modFile.path);
      }
      if (!options.keepOriginalStructure) {
        // Flatten to just the filename in its top-level folder
        const parts = modFile.path.split("/");
        const topFolder = parts[0] || "mods";
        const fileName = parts[parts.length - 1] || "unknown";
        targetPath = `${topFolder}/${fileName}`;
      }

      const blob = await downloadModFile(modFile.downloads);
      if (blob) {
        outputZip.file(targetPath, blob);
      } else {
        skipped++;
      }

      processed++;
      const pct = 15 + Math.round((processed / totalMods) * 70);
      onProgress({
        status: "downloading",
        progress: pct,
        currentFile: modFile.path.split("/").pop() || modFile.path,
        totalFiles: totalMods,
        processedFiles: processed,
        skippedFiles: skipped,
        modCount: totalMods,
      });
    }
  }

  // Copy overrides folder (config files, resource packs, etc.)
  onProgress({
    ...baseProgress,
    status: "packaging",
    progress: 88,
    modCount: totalMods,
    totalFiles: totalMods,
    processedFiles: processed,
    skippedFiles: skipped,
    currentFile: "Copying override files...",
  });

  const overridePromises: Promise<void>[] = [];
  zip.forEach((relativePath, entry) => {
    if (entry.dir) return;
    if (relativePath === "modrinth.index.json") return;
    // Only copy overrides/ and server-overrides/ folders
    if (
      relativePath.startsWith("overrides/") ||
      relativePath.startsWith("server-overrides/") ||
      relativePath.startsWith("client-overrides/")
    ) {
      let targetPath = relativePath;
      if (options.normalizeFilenames) {
        targetPath = normalizeFilename(relativePath);
      }
      overridePromises.push(
        entry.async("blob").then((blob) => {
          outputZip.file(targetPath, blob);
        }),
      );
    }
  });
  await Promise.all(overridePromises);

  // Optionally include the index file
  if (options.includeIndexFile) {
    outputZip.file(
      "modrinth.index.json",
      JSON.stringify(index, null, 2),
    );
  }

  // Generate the output ZIP
  onProgress({
    ...baseProgress,
    status: "packaging",
    progress: 95,
    modCount: totalMods,
    totalFiles: totalMods,
    processedFiles: processed,
    skippedFiles: skipped,
    currentFile: "Compressing output ZIP...",
  });

  const blob = await outputZip.generateAsync({
    type: "blob",
    compression: "DEFLATE",
    compressionOptions: { level: 6 },
  });

  const baseName = file.name.replace(/\.mrpack$/i, "");
  const outputFileName = `${baseName}.zip`;

  onProgress({
    status: "done",
    progress: 100,
    modCount: totalMods,
    totalFiles: totalMods,
    processedFiles: processed,
    skippedFiles: skipped,
    currentFile: outputFileName,
  });

  return {
    blob,
    fileName: outputFileName,
    skipped,
    total: totalMods,
  };
}

/**
 * Trigger a browser download of a blob.
 */
export function downloadBlob(blob: Blob, fileName: string): void {
  saveAs(blob, fileName);
}

/**
 * Validate that a file looks like a .mrpack file by extension or MIME type.
 */
export interface FileNode {
  name: string;
  path: string;
  type: "file" | "folder";
  children?: FileNode[];
  isMod?: boolean;
  size?: number;
}

export interface PackInfo {
  name: string;
  versionId: string;
  game: string;
  summary?: string;
  minecraftVersion?: string;
  modLoader?: string;
}

export async function parseMrpackStructure(file: File): Promise<{
  index: ModrinthIndex;
  fileTree: FileNode[];
  packInfo: PackInfo;
  totalFiles: number;
}> {
  const zip = await JSZip.loadAsync(file);
  const indexFile = zip.file("modrinth.index.json");

  if (!indexFile) {
    throw new Error("Invalid .mrpack file: missing modrinth.index.json");
  }

  const indexContent = await indexFile.async("string");
  let index: ModrinthIndex;
  try {
    index = JSON.parse(indexContent);
  } catch {
    throw new Error("Failed to parse modrinth.index.json");
  }

  const fileTree: FileNode[] = [];
  const rootMap = new Map<string, FileNode>();

  const modPaths = new Set<string>();
  if (index.files) {
    for (const modFile of index.files) {
      modPaths.add(modFile.path);
    }
  }

  zip.forEach((relativePath, entry) => {
    const parts = relativePath.split("/");
    let currentLevel: FileNode[] = fileTree;
    let currentPath = "";

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      currentPath = currentPath ? `${currentPath}/${part}` : part;

      const existing = currentLevel.find((node) => node.name === part);
      if (existing) {
        currentLevel = existing.children || [];
        continue;
      }

      const isLast = i === parts.length - 1;
      const node: FileNode = {
        name: part,
        path: currentPath,
        type: isLast ? (entry.dir ? "folder" : "file") : "folder",
        children: [],
        isMod: modPaths.has(currentPath),
      };

      if (isLast && !entry.dir) {
        rootMap.set(currentPath, node);
      }

      currentLevel.push(node);
      currentLevel = node.children || [];
    }
  });

  for (const modFile of index.files) {
    const node = rootMap.get(modFile.path);
    if (node) {
      node.isMod = true;
      node.size = modFile.fileSize;
    } else {
      const parts = modFile.path.split("/");
      let currentLevel: FileNode[] = fileTree;
      let currentPath = "";

      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        currentPath = currentPath ? `${currentPath}/${part}` : part;

        let existing = currentLevel.find((node) => node.name === part);
        if (!existing) {
          const isLast = i === parts.length - 1;
          existing = {
            name: part,
            path: currentPath,
            type: isLast ? "file" : "folder",
            children: [],
            isMod: isLast,
            size: isLast ? modFile.fileSize : undefined,
          };
          currentLevel.push(existing);
        }
        currentLevel = existing.children || [];
      }
    }
  }

  function sortNodes(nodes: FileNode[]): FileNode[] {
    return nodes
      .map((node) => ({
        ...node,
        children: node.children ? sortNodes(node.children) : undefined,
      }))
      .sort((a, b) => {
        if (a.type === b.type) return a.name.localeCompare(b.name);
        return a.type === "folder" ? -1 : 1;
      });
  }

  const sortedTree = sortNodes(fileTree);

  let totalFiles = 0;
  function countFiles(nodes: FileNode[]): void {
    for (const node of nodes) {
      if (node.type === "file") totalFiles++;
      if (node.children) countFiles(node.children);
    }
  }
  countFiles(sortedTree);

  let minecraftVersion: string | undefined;
  let modLoader: string | undefined;
  if (index.dependencies) {
    minecraftVersion = index.dependencies.minecraft;
    const loaders = Object.keys(index.dependencies).filter((k) =>
      ["fabric-loader", "forge", "quilt-loader"].includes(k),
    );
    if (loaders.length > 0) {
      modLoader = loaders[0].replace("-loader", "").replace("loader-", "");
    }
  }

  const packInfo: PackInfo = {
    name: index.name || file.name.replace(/\.mrpack$/i, ""),
    versionId: index.versionId || "Unspecified",
    game: index.game || "Unknown",
    summary: index.summary,
    minecraftVersion,
    modLoader: modLoader ? modLoader.charAt(0).toUpperCase() + modLoader.slice(1) : undefined,
  };

  return { index, fileTree: sortedTree, packInfo, totalFiles };
}

export function isValidMrpackFile(file: File): boolean {
  const name = file.name.toLowerCase();
  return (
    name.endsWith(".mrpack") ||
    name.endsWith(".zip") ||
    file.type === "application/zip" ||
    file.type === "application/x-zip-compressed"
  );
}

/**
 * Format bytes into a human-readable string.
 */
export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

const MODRINTH_API = "https://api.modrinth.com/v2/project/";
const MODRINTH_VERSIONS_ENDPOINT = "/version";

function extractProjectIdOrSlug(input: string): string {
  const trimmed = input.trim();

  // Handle full Modrinth URLs like:
  // https://modrinth.com/project/1KVo5zza
  // https://modrinth.com/modpack/fabulously-optimized
  // https://modrinth.com/mod/sodium
  const urlMatch = trimmed.match(
    /modrinth\.com\/(?:project|modpack|mod|plugin|shader|resourcepack)\/([^/?#]+)/i,
  );
  if (urlMatch) {
    return decodeURIComponent(urlMatch[1]);
  }

  return trimmed;
}

export async function getMrpackUrlFromProjectId(
  projectIdOrSlug: string,
): Promise<string> {
  const id = extractProjectIdOrSlug(projectIdOrSlug);

  const response = await fetch(
    `${MODRINTH_API}${encodeURIComponent(id)}${MODRINTH_VERSIONS_ENDPOINT}`,
  );

  if (!response.ok) {
    throw new Error(
      `Invalid project ID or slug "${id}". Make sure it's a Modrinth modpack.`,
    );
  }

  const versions: Array<{
    files: Array<{ url: string; filename: string }>;
  }> = await response.json();

  if (!versions || versions.length === 0) {
    throw new Error("No versions found for this project.");
  }

  const latestVersion = versions[0];
  if (!latestVersion.files || latestVersion.files.length === 0) {
    throw new Error("No files found in the latest version.");
  }

  const mrpackFile = latestVersion.files.find((f) =>
    f.filename.endsWith(".mrpack"),
  );

  if (!mrpackFile || !mrpackFile.url) {
    throw new Error("No .mrpack file found in the latest version.");
  }

  return mrpackFile.url;
}

export async function downloadMrpackFromUrl(
  url: string,
): Promise<{ blob: Blob; name: string }> {
  if (!url.includes("mrpack")) {
    throw new Error("That is not a valid .mrpack URL.");
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to download the .mrpack file.");
  }

  const blob = await response.blob();
  const contentDisposition = response.headers.get("Content-Disposition");
  let filename = "download.mrpack";

  if (contentDisposition) {
    const match = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
    if (match && match[1]) {
      filename = match[1].replace(/['"]/g, "");
    }
  }

  if (!filename.endsWith(".mrpack")) {
    filename = `${filename}.mrpack`;
  }

  return { blob, name: filename };
}

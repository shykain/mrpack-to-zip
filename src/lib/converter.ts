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

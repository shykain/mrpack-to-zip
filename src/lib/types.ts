// Type definitions for Modrinth modpack format

export interface ModrinthFile {
  path: string;
  hashes: { sha1: string; sha512: string };
  downloads: string[];
  fileSize: number;
  env?: { client: string; server: string };
}

export interface ModrinthIndex {
  formatVersion: number;
  game: string;
  versionId: string;
  name: string;
  summary?: string;
  files: ModrinthFile[];
  dependencies: Record<string, string>;
}

export interface ConvertOptions {
  downloadModFiles: boolean;
  normalizeFilenames: boolean;
  keepOriginalStructure: boolean;
  includeIndexFile: boolean;
}

export type ConvertStatus =
  | "idle"
  | "parsing"
  | "downloading"
  | "packaging"
  | "done"
  | "error";

export type InputMode = "project" | "url" | "file";

export interface ConvertProgress {
  status: ConvertStatus;
  progress: number;
  currentFile?: string;
  totalFiles: number;
  processedFiles: number;
  error?: string;
  skippedFiles: number;
  modCount: number;
}

export type ProgressCallback = (progress: ConvertProgress) => void;

export const DEFAULT_OPTIONS: ConvertOptions = {
  downloadModFiles: false,
  normalizeFilenames: false,
  keepOriginalStructure: true,
  includeIndexFile: true,
};

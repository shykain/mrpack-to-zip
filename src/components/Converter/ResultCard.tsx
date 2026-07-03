import { Download, RotateCcw, FileArchive, CheckCircle2 } from "lucide-react";
import { useConvertStore } from "@/lib/store";
import { formatBytes } from "@/lib/converter";

export function ResultCard() {
  const status = useConvertStore((s) => s.status);
  const fileName = useConvertStore((s) => s.fileName);
  const fileSize = useConvertStore((s) => s.fileSize);
  const modCount = useConvertStore((s) => s.modCount);
  const skippedFiles = useConvertStore((s) => s.skippedFiles);
  const download = useConvertStore((s) => s.download);
  const reset = useConvertStore((s) => s.reset);

  if (status !== "done") return null;

  return (
    <div className="pixel-card p-6 sm:p-8 animate-drop-bounce">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-16 h-16 mb-4">
          <div className="absolute inset-0 rounded-full bg-grass-500/20 animate-pulse-glow" />
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-grass-400 to-grass-600 flex items-center justify-center border-2 border-grass-300/40">
            <CheckCircle2 className="w-8 h-8 text-cream-50" />
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-cream-100">
          Your ZIP file is ready!
        </h3>
        <p className="mt-2 text-sm text-cream-200/60">
          {modCount > 0 && `${modCount} mods · `}
          {skippedFiles > 0 && `${skippedFiles} skipped · `}
          {fileSize ? formatBytes(fileSize) : ""}
        </p>

        <div className="mt-5 w-full max-w-sm p-4 rounded-lg bg-grass-900/60 border border-grass-500/30 flex items-center gap-3">
          <FileArchive className="w-6 h-6 text-grass-300 shrink-0" />
          <span className="font-mono text-sm text-cream-100 truncate flex-1 text-left">
            {fileName}
          </span>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <button onClick={download} className="btn-primary w-full sm:w-auto">
            <Download className="w-5 h-5" />
            Download ZIP
          </button>
          <button onClick={reset} className="btn-ghost w-full sm:w-auto">
            <RotateCcw className="w-4 h-4" />
            Convert another
          </button>
        </div>
      </div>
    </div>
  );
}

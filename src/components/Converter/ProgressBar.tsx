import { Loader2, CheckCircle2, AlertCircle, Package } from "lucide-react";
import { useConvertStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const STATUS_LABELS: Record<string, string> = {
  parsing: "Parsing modpack...",
  downloading: "Downloading mod files...",
  packaging: "Packaging ZIP archive...",
  done: "Conversion complete!",
  error: "Conversion failed",
  idle: "",
};

export function ProgressBar() {
  const status = useConvertStore((s) => s.status);
  const progress = useConvertStore((s) => s.progress);
  const currentFile = useConvertStore((s) => s.currentFile);
  const totalFiles = useConvertStore((s) => s.totalFiles);
  const processedFiles = useConvertStore((s) => s.processedFiles);
  const skippedFiles = useConvertStore((s) => s.skippedFiles);
  const modCount = useConvertStore((s) => s.modCount);
  const error = useConvertStore((s) => s.error);

  const isBusy =
    status === "parsing" || status === "downloading" || status === "packaging";
  const isError = status === "error";

  if (status === "idle") return null;

  return (
    <div className="pixel-card p-5 sm:p-6 animate-drop-bounce">
      <div className="flex items-center gap-3 mb-4">
        <div
          className={cn(
            "shrink-0 w-10 h-10 rounded-md flex items-center justify-center",
            isError
              ? "bg-red-500/15 text-red-300"
              : status === "done"
                ? "bg-grass-500/20 text-grass-300"
                : "bg-grass-500/15 text-grass-300",
          )}
        >
          {isError ? (
            <AlertCircle className="w-5 h-5" />
          ) : status === "done" ? (
            <CheckCircle2 className="w-5 h-5" />
          ) : (
            <Loader2 className="w-5 h-5 animate-spin" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-cream-100 text-sm sm:text-base">
            {isError ? error || "Error" : STATUS_LABELS[status]}
          </p>
          {!isError && currentFile && (
            <p className="mt-0.5 text-xs text-cream-200/50 font-mono truncate">
              {currentFile}
            </p>
          )}
        </div>
        {!isError && (
          <span className="shrink-0 font-mono text-lg sm:text-xl font-bold text-grass-300 tabular-nums">
            {progress}%
          </span>
        )}
      </div>

      {!isError && (
        <>
          {/* Minecraft XP-style progress bar */}
          <div className="relative h-3 rounded-sm bg-grass-950 overflow-hidden border border-black/50">
            <div
              className={cn(
                "absolute inset-y-0 left-0 transition-all duration-300 ease-out",
                status === "done"
                  ? "bg-gradient-to-b from-[#5eff5e] via-[#17dd62] to-[#0aa040]"
                  : "bg-gradient-to-b from-[#5eff5e] via-[#17dd62] to-[#0aa040]",
              )}
              style={{
                width: `${progress}%`,
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              {isBusy && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-scan-line" />
              )}
            </div>
            {/* XP bar texture overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage: "repeating-linear-gradient(90deg, transparent 0, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px)",
              }}
            />
          </div>

          {(status === "downloading" || status === "done") &&
            totalFiles > 0 && (
              <div className="mt-3 flex items-center gap-4 text-xs text-cream-200/55">
                <span className="flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5" />
                  {processedFiles}/{totalFiles} mods
                </span>
                {skippedFiles > 0 && (
                  <span className="text-ember-400">
                    {skippedFiles} skipped
                  </span>
                )}
                {status === "done" && modCount > 0 && (
                  <span className="text-grass-300">
                    {modCount} mods ready
                  </span>
                )}
              </div>
            )}
        </>
      )}
    </div>
  );
}

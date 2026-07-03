import { useRef, useCallback, type DragEvent } from "react";
import { UploadCloud, FileBox, X, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useConvertStore } from "@/lib/store";
import { formatBytes } from "@/lib/converter";
import { cn } from "@/lib/utils";

export function DropZone() {
  const { t } = useTranslation();
  const steps = t("dropZone.steps", { returnObjects: true }) as string[];
  const inputRef = useRef<HTMLInputElement>(null);
  const selectedFile = useConvertStore((s) => s.selectedFile);
  const isDragging = useConvertStore((s) => s.isDragging);
  const setDragging = useConvertStore((s) => s.setDragging);
  const setFile = useConvertStore((s) => s.setFile);
  const status = useConvertStore((s) => s.status);
  const error = useConvertStore((s) => s.error);

  const isBusy = status === "parsing" || status === "downloading" || status === "packaging";

  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (files && files.length > 0) {
        setFile(files[0]);
      }
    },
    [setFile],
  );

  const onDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setDragging(false);
      if (isBusy) return;
      handleFiles(e.dataTransfer.files);
    },
    [setDragging, handleFiles, isBusy],
  );

  const onDragOver = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (!isBusy) setDragging(true);
    },
    [setDragging, isBusy],
  );

  const onDragLeave = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setDragging(false);
    },
    [setDragging],
  );

  const openPicker = () => {
    if (!isBusy) inputRef.current?.click();
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
  };

  if (selectedFile) {
    return (
      <div
        className={cn(
          "relative w-full p-6 sm:p-8 rounded-xl pixel-card animate-drop-bounce",
          isDragging && "ring-2 ring-grass-400",
        )}
      >
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-grass-700/60 border border-grass-500/40 flex items-center justify-center">
            <FileBox className="w-7 h-7 sm:w-8 sm:h-8 text-grass-300" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-mono text-sm sm:text-base text-cream-100 truncate">
              {selectedFile.name}
            </p>
            <p className="mt-1 text-xs sm:text-sm text-cream-200/60">
              {formatBytes(selectedFile.size)} · {t("dropZone.mrpackFile")}
            </p>
            {error && (
              <p className="mt-2 text-xs sm:text-sm text-red-300">{error}</p>
            )}
          </div>
          {!isBusy && (
            <button
              onClick={removeFile}
              className="shrink-0 w-9 h-9 rounded-md flex items-center justify-center text-cream-200/60 hover:text-red-300 hover:bg-red-500/10 transition-colors"
              aria-label={t("dropZone.removeFile")}
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="shrink-0 w-6 h-6 rounded-full bg-grass-500/20 border border-grass-400/40 flex items-center justify-center text-xs font-bold text-grass-300">
              {i + 1}
            </div>
            <p className="text-sm text-cream-200/70 pt-0.5">{step}</p>
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-cream-700/30">
        <div
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onClick={openPicker}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") openPicker();
          }}
          className={cn(
            "group relative w-full p-6 sm:p-8 rounded-xl cursor-pointer transition-all duration-300",
            "border-2 border-dashed",
            isDragging
              ? "border-grass-400 bg-grass-500/15 scale-[1.01] shadow-glow"
              : "border-grass-500/40 bg-grass-900/40 hover:border-grass-400/70 hover:bg-grass-900/60",
          )}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".mrpack,.zip,application/zip"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />

          <div className="flex flex-col items-center text-center">
            <div
              className={cn(
                "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300",
                "bg-gradient-to-br from-grass-500/30 to-grass-700/30 border border-grass-400/40",
                isDragging
                  ? "scale-110 animate-pulse-glow"
                  : "group-hover:scale-105 group-hover:-translate-y-1",
              )}
            >
              <UploadCloud
                className={cn(
                  "w-7 h-7 sm:w-8 sm:h-8 text-grass-300",
                  isDragging && "animate-bounce",
                )}
              />
            </div>

            <p className="text-base sm:text-lg font-semibold text-cream-100">
              {isDragging
                ? t("dropZone.dropHere")
                : t("dropZone.dragDrop")}
            </p>
            <p className="mt-1.5 text-sm text-cream-200/50">{t("dropZone.or")}</p>
            <button
              type="button"
              className="btn-primary mt-3 pointer-events-none text-sm px-6 py-2"
              tabIndex={-1}
            >
              {t("dropZone.browseFiles")}
            </button>

            {error && (
              <p className="mt-4 text-sm text-red-300 max-w-sm">{error}</p>
            )}
          </div>

          {isDragging && (
            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
              <div className="absolute inset-x-0 h-px bg-grass-400/60 animate-scan-line" />
            </div>
          )}
        </div>
      </div>

      <div className="flex items-start gap-2 p-3 rounded-lg bg-grass-500/10 border border-grass-500/20">
        <ShieldCheck className="w-4 h-4 text-grass-400 shrink-0 mt-0.5" />
        <p className="text-xs text-cream-200/60 leading-relaxed">
          {t("dropZone.privacyNote")}
        </p>
      </div>
    </div>
  );
}

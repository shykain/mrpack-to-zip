import { Sparkles, Zap, ShieldCheck } from "lucide-react";
import { useConvertStore } from "@/lib/store";
import { DropZone } from "./DropZone";
import { OptionsPanel } from "./OptionsPanel";
import { ProgressBar } from "./ProgressBar";
import { ResultCard } from "./ResultCard";
import { FileStructure } from "./FileStructure";
import { InputModeSelector } from "./InputModeSelector";
import { ProjectInput } from "./ProjectInput";
import { UrlInput } from "./UrlInput";

export function Converter() {
  const selectedFile = useConvertStore((s) => s.selectedFile);
  const status = useConvertStore((s) => s.status);
  const start = useConvertStore((s) => s.start);
  const inputMode = useConvertStore((s) => s.inputMode);

  const isBusy =
    status === "parsing" || status === "downloading" || status === "packaging";
  const isDone = status === "done";
  const showInputPanel = !isBusy && !isDone && !selectedFile;
  const showOptions = !isDone && !isBusy;
  const showConvertBtn = selectedFile && status !== "done" && !isBusy;

  return (
    <div id="converter" className="relative w-full max-w-6xl mx-auto scroll-mt-24">
      <div className="absolute -inset-4 bg-gradient-to-br from-grass-500/20 via-transparent to-ember-500/10 blur-2xl rounded-3xl pointer-events-none" />

      <div className="relative p-4 sm:p-6 md:p-8">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-grass-500/15 border border-grass-400/30 text-xs font-mono uppercase tracking-wider text-grass-300">
            <Zap className="w-3.5 h-3.5" />
            100% Browser-side · No uploads
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight heading-gradient">
            MRPack to ZIP Converter
          </h1>
          <p className="mt-3 text-sm sm:text-base text-cream-200/60 max-w-xl mx-auto">
            Convert Modrinth modpack files to standard ZIP format with optional
            mod downloading. Fast, private, and free.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-6 sm:mb-8 text-xs text-cream-200/50">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-grass-400" />
            Files never leave your browser
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-ember-400" />
            No sign-up required
          </span>
        </div>

        <div className={`grid gap-6 lg:gap-8 ${inputMode === "file" && selectedFile ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 max-w-2xl mx-auto"}`}>
          <div className="space-y-6">
            <div className="pixel-card pixel-card-corners noise-overlay p-6">
              <InputModeSelector />
            </div>

            {showInputPanel && (
              <div className="pixel-card pixel-card-corners noise-overlay p-6">
                {inputMode === "project" && <ProjectInput />}
                {inputMode === "url" && <UrlInput />}
                {inputMode === "file" && <DropZone />}
              </div>
            )}

            {showOptions && inputMode === "file" && (
              <div className="pixel-card pixel-card-corners noise-overlay p-6 animate-drop-bounce">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-cream-200/80 uppercase tracking-wider">
                    Conversion Options
                  </h3>
                </div>
                <OptionsPanel />
              </div>
            )}

            {showConvertBtn && (
              <div className="flex justify-center">
                <button
                  onClick={start}
                  disabled={isBusy}
                  className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto"
                >
                  <Sparkles className="w-5 h-5" />
                  Convert to ZIP
                </button>
              </div>
            )}

            {!isDone && status !== "idle" && (
              <div className="pixel-card pixel-card-corners noise-overlay p-6">
                <ProgressBar />
              </div>
            )}

            {isDone && (
              <div className="pixel-card pixel-card-corners noise-overlay p-6">
                <ResultCard />
              </div>
            )}

            {!selectedFile && inputMode === "file" && (
              <p className="text-center text-xs text-cream-200/40">
                Tip: Enable "Download mod files" to fetch all JAR files from Modrinth
                CDN for a complete, ready-to-use pack.
              </p>
            )}

            {isBusy && (
              <p className="text-center text-xs text-cream-200/40">
                Processing — this may take a while for large modpacks.
              </p>
            )}
          </div>

          {inputMode === "file" && selectedFile && (
            <div className="lg:sticky lg:top-28 lg:self-start h-fit animate-drop-bounce">
              <div className="h-[500px] lg:h-[80vh]">
                <FileStructure />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { useRef, useEffect, KeyboardEvent, useCallback } from "react";
import { Search, Loader2, ExternalLink } from "lucide-react";
import { useConvertStore } from "@/lib/store";

const steps = [
  { text: "Go to a Modrinth modpack project" },
  { text: "Copy the project ID, slug, or full URL" },
  { text: "Paste it below and auto-fetch starts" },
  { text: "Wait for the pack to be converted" },
];

export function ProjectInput() {
  const projectId = useConvertStore((s) => s.projectId);
  const setProjectId = useConvertStore((s) => s.setProjectId);
  const fetchFromProject = useConvertStore((s) => s.fetchFromProject);
  const status = useConvertStore((s) => s.status);
  const error = useConvertStore((s) => s.error);
  const selectedFile = useConvertStore((s) => s.selectedFile);

  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isBusy = status === "parsing" || status === "downloading";

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Auto-fetch after user stops typing (only in idle state, not after error)
  useEffect(() => {
    if (selectedFile || isBusy || status === "error") return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const trimmed = projectId.trim();
    if (!trimmed) return;

    timeoutRef.current = setTimeout(() => {
      fetchFromProject();
    }, 1000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [projectId, selectedFile, isBusy, status, fetchFromProject]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    fetchFromProject();
  }, [fetchFromProject]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      fetchFromProject();
    }
  };

  if (selectedFile) {
    return null;
  }

  if (isBusy) {
    return null;
  }

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="shrink-0 w-6 h-6 rounded-full bg-grass-500/20 border border-grass-400/40 flex items-center justify-center text-xs font-bold text-grass-300">
              {i + 1}
            </div>
            <p className="text-sm text-cream-200/70 pt-0.5">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-cream-700/30">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream-200/40" />
            <input
              ref={inputRef}
              type="text"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="e.g. fabulously-optimized or 1KVo5zza or full URL"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-ink-900/60 border border-grass-500/30 text-cream-50 placeholder:text-cream-200/40 focus:outline-none focus:border-grass-500/60 focus:ring-1 focus:ring-grass-500/40 transition-all"
              disabled={isBusy}
            />
          </div>
          {error && <p className="text-xs text-red-300">{error}</p>}
          <button
            type="submit"
            disabled={isBusy || !projectId.trim()}
            className="w-full btn-primary flex items-center justify-center gap-2"
          >
            {isBusy ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Fetching...
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                Fetch from Modrinth
              </>
            )}
          </button>
        </form>
      </div>

      <div className="flex items-center gap-1.5 pt-1">
        <ExternalLink className="w-3.5 h-3.5 text-cream-200/40" />
        <a
          href="https://modrinth.com/modpacks"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-cream-200/50 hover:text-grass-300 transition-colors underline underline-offset-2"
        >
          Browse modpacks on Modrinth
        </a>
      </div>
    </div>
  );
}

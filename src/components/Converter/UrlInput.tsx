import { useRef, useEffect, KeyboardEvent, useCallback } from "react";
import { Globe, Loader2, Link } from "lucide-react";
import { useConvertStore } from "@/lib/store";

const steps = [
  { text: "Go to a Modrinth project's Versions tab" },
  { text: "Right-click the green download button for a specific version" },
  { text: 'Select "Copy link address"' },
  { text: "Paste the URL below — auto-download starts" },
];

export function UrlInput() {
  const mrpackUrl = useConvertStore((s) => s.mrpackUrl);
  const setMrpackUrl = useConvertStore((s) => s.setMrpackUrl);
  const fetchFromUrl = useConvertStore((s) => s.fetchFromUrl);
  const status = useConvertStore((s) => s.status);
  const error = useConvertStore((s) => s.error);
  const selectedFile = useConvertStore((s) => s.selectedFile);

  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isBusy = status === "parsing" || status === "downloading";

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Auto-download after user stops typing
  useEffect(() => {
    if (selectedFile || isBusy) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const trimmed = mrpackUrl.trim();
    if (!trimmed) return;

    timeoutRef.current = setTimeout(() => {
      fetchFromUrl();
    }, 1000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [mrpackUrl, selectedFile, isBusy, fetchFromUrl]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    fetchFromUrl();
  }, [fetchFromUrl]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      fetchFromUrl();
    }
  };

  if (selectedFile) {
    return null;
  }

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="shrink-0 w-6 h-6 rounded-full bg-ember-500/20 border border-ember-400/40 flex items-center justify-center text-xs font-bold text-ember-300">
              {i + 1}
            </div>
            <p className="text-sm text-cream-200/70 pt-0.5">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-cream-700/30">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cream-200/40" />
            <input
              ref={inputRef}
              type="url"
              value={mrpackUrl}
              onChange={(e) => setMrpackUrl(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="https://cdn.modrinth.com/..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-ink-900/60 border border-grass-500/30 text-cream-50 placeholder:text-cream-200/40 focus:outline-none focus:border-grass-500/60 focus:ring-1 focus:ring-grass-500/40 transition-all font-mono text-sm"
              disabled={isBusy}
            />
          </div>
          {error && <p className="text-xs text-red-300">{error}</p>}
          <button
            type="submit"
            disabled={isBusy || !mrpackUrl.trim()}
            className="w-full btn-primary flex items-center justify-center gap-2"
          >
            {isBusy ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Link className="w-5 h-5" />
                Download from URL
              </>
            )}
          </button>
        </form>
      </div>

      <div className="flex items-start gap-2 p-3 rounded-lg bg-ember-500/10 border border-ember-500/20">
        <Link className="w-4 h-4 text-ember-300 shrink-0 mt-0.5" />
        <p className="text-xs text-cream-200/60 leading-relaxed">
          Make sure the URL ends with <code className="text-ember-300">.mrpack</code> for proper processing.
        </p>
      </div>
    </div>
  );
}

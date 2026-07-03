import {
  Download,
  Wand2,
  FolderTree,
  FileJson,
  type LucideIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useConvertStore } from "@/lib/store";
import type { ConvertOptions } from "@/lib/types";
import { cn } from "@/lib/utils";

interface OptionConfig {
  key: keyof ConvertOptions;
  label: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}

export function OptionsPanel() {
  const { t } = useTranslation();
  const options = useConvertStore((s) => s.options);
  const setOption = useConvertStore((s) => s.setOption);
  const status = useConvertStore((s) => s.status);
  const isBusy =
    status === "parsing" || status === "downloading" || status === "packaging";

  const OPTIONS: OptionConfig[] = [
    {
      key: "downloadModFiles",
      label: t("options.downloadMods.label"),
      description: t("options.downloadMods.desc"),
      icon: Download,
      accent: "text-grass-300",
    },
    {
      key: "keepOriginalStructure",
      label: t("options.keepStructure.label"),
      description: t("options.keepStructure.desc"),
      icon: FolderTree,
      accent: "text-ember-400",
    },
    {
      key: "normalizeFilenames",
      label: t("options.normalize.label"),
      description: t("options.normalize.desc"),
      icon: Wand2,
      accent: "text-grass-200",
    },
    {
      key: "includeIndexFile",
      label: t("options.includeIndex.label"),
      description: t("options.includeIndex.desc"),
      icon: FileJson,
      accent: "text-ember-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {OPTIONS.map((opt) => {
        const checked = options[opt.key];
        const Icon = opt.icon;
        return (
          <button
            key={opt.key}
            type="button"
            disabled={isBusy}
            onClick={() => setOption(opt.key, !checked)}
            className={cn(
              "group flex items-start gap-3 p-4 rounded-lg text-left transition-all duration-200",
              "border",
              checked
                ? "bg-grass-500/15 border-grass-400/50"
                : "bg-grass-900/40 border-grass-500/20 hover:border-grass-400/40 hover:bg-grass-900/60",
              isBusy && "opacity-50 cursor-not-allowed",
            )}
          >
            <div
              className={cn(
                "shrink-0 w-10 h-10 rounded-md flex items-center justify-center transition-colors",
                checked
                  ? "bg-grass-500/25 border border-grass-400/40"
                  : "bg-grass-800/60 border border-grass-500/20",
              )}
            >
              <Icon
                className={cn(
                  "w-5 h-5 transition-colors",
                  checked ? opt.accent : "text-cream-200/40",
                )}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-cream-100">
                  {opt.label}
                </p>
                <span
                  className={cn(
                    "ml-auto relative w-9 h-5 rounded-full transition-colors shrink-0",
                    checked ? "bg-grass-500" : "bg-grass-800",
                  )}
                >
                  <span
                    className={cn(
                      "absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-cream-50 transition-transform shadow-md",
                      checked && "translate-x-4",
                    )}
                  />
                </span>
              </div>
              <p className="mt-1 text-xs text-cream-200/55 leading-relaxed">
                {opt.description}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

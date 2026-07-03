import { CheckCircle2, Package, Gamepad2, Cpu, FileText, RefreshCw } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useConvertStore } from "@/lib/store";

export function PackInfoCard() {
  const { t } = useTranslation();
  const packInfo = useConvertStore((s) => s.packInfo);
  const selectedFile = useConvertStore((s) => s.selectedFile);
  const status = useConvertStore((s) => s.status);
  const modCount = useConvertStore((s) => s.modCount);
  const reset = useConvertStore((s) => s.reset);
  const isBusy =
    status === "parsing" || status === "downloading" || status === "packaging";

  if (!selectedFile || isBusy || status === "done") return null;

  return (
    <div className="pixel-card pixel-card-corners noise-overlay p-5 animate-drop-bounce">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-grass-500/20 border border-grass-400/40 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-grass-300" />
          </div>
          <div>
            <h3 className="font-semibold text-cream-100">{t("packInfo.title")}</h3>
            <p className="text-xs text-cream-200/50">{t("packInfo.subtitle")}</p>
          </div>
        </div>
        <button
          onClick={reset}
          className="btn-ghost text-sm px-3 py-2"
          title={t("packInfo.replaceFile")}
          aria-label={t("packInfo.replaceFile")}
        >
          <RefreshCw className="w-4 h-4" />
          <span className="hidden sm:inline">{t("packInfo.replace")}</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {packInfo?.name && (
          <div className="flex items-start gap-2 p-2 rounded-lg bg-grass-900/40">
            <Package className="w-4 h-4 text-grass-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] text-cream-200/50 uppercase tracking-wider">{t("packInfo.name")}</p>
              <p className="text-sm text-cream-100 font-medium truncate">{packInfo.name}</p>
            </div>
          </div>
        )}

        {packInfo?.versionId && (
          <div className="flex items-start gap-2 p-2 rounded-lg bg-grass-900/40">
            <FileText className="w-4 h-4 text-ember-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] text-cream-200/50 uppercase tracking-wider">{t("packInfo.version")}</p>
              <p className="text-sm text-cream-100 font-medium">{packInfo.versionId}</p>
            </div>
          </div>
        )}

        {packInfo?.minecraftVersion && (
          <div className="flex items-start gap-2 p-2 rounded-lg bg-grass-900/40">
            <Gamepad2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] text-cream-200/50 uppercase tracking-wider">{t("packInfo.minecraft")}</p>
              <p className="text-sm text-grass-300 font-medium">{packInfo.minecraftVersion}</p>
            </div>
          </div>
        )}

        {packInfo?.modLoader && (
          <div className="flex items-start gap-2 p-2 rounded-lg bg-grass-900/40">
            <Cpu className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] text-cream-200/50 uppercase tracking-wider">{t("packInfo.loader")}</p>
              <p className="text-sm text-ember-300 font-medium">{packInfo.modLoader}</p>
            </div>
          </div>
        )}

        {modCount > 0 && (
          <div className="flex items-start gap-2 p-2 rounded-lg bg-grass-900/40 col-span-2">
            <Package className="w-4 h-4 text-grass-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] text-cream-200/50 uppercase tracking-wider">{t("packInfo.mods")}</p>
              <p className="text-sm text-cream-100 font-medium">{t("packInfo.modFilesDetected", { count: modCount })}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

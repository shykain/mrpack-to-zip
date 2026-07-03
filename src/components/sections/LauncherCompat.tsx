import { Section, SectionHeader } from "@/components/ui/Section";
import { Check, X, AlertCircle, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

type SupportLevel = "full" | "partial" | "none";
type ZipLevel = "not-required" | "sometimes" | "required" | "recommended";

interface Launcher {
  name: string;
  support: SupportLevel;
  needZip: ZipLevel;
  notes: string;
}

const LAUNCHER_META: { support: SupportLevel; needZip: ZipLevel }[] = [
  { support: "full", needZip: "not-required" },
  { support: "full", needZip: "not-required" },
  { support: "none", needZip: "required" },
  { support: "partial", needZip: "sometimes" },
  { support: "full", needZip: "not-required" },
  { support: "full", needZip: "not-required" },
  { support: "none", needZip: "required" },
  { support: "full", needZip: "not-required" },
  { support: "partial", needZip: "recommended" },
];

function SupportBadge({ level }: { level: SupportLevel }) {
  const { t } = useTranslation();
  if (level === "full") {
    return (
      <span className="inline-flex items-center gap-1.5 text-grass-300">
        <Check className="w-4 h-4" />
        {t("launchers.fullSupport")}
      </span>
    );
  }
  if (level === "partial") {
    return (
      <span className="inline-flex items-center gap-1.5 text-ember-400">
        <AlertCircle className="w-4 h-4" />
        {t("launchers.partial")}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-red-300">
      <X className="w-4 h-4" />
      {t("launchers.notSupported")}
    </span>
  );
}

function ZipBadge({ level }: { level: ZipLevel }) {
  const { t } = useTranslation();
  const map: Record<ZipLevel, { label: string; color: string }> = {
    "not-required": { label: t("launchers.notRequired"), color: "text-grass-300" },
    sometimes: { label: t("launchers.sometimes"), color: "text-ember-400" },
    required: { label: t("launchers.required"), color: "text-red-300" },
    recommended: { label: t("launchers.recommended"), color: "text-ember-400" },
  };
  const cfg = map[level];
  return <span className={cfg.color}>{cfg.label}</span>;
}

export function LauncherCompat() {
  const { t } = useTranslation();

  const launcherItems = t("launchers.items", { returnObjects: true }) as Array<{
    name: string;
    notes: string;
  }>;
  const launchers: Launcher[] = launcherItems.map((item, idx) => ({
    ...item,
    ...LAUNCHER_META[idx],
  }));

  return (
    <Section id="launchers">
      <div className="container">
        <SectionHeader
          eyebrow={t("launchers.eyebrow")}
          title={t("launchers.title")}
          description={t("launchers.description")}
        />

        {/* Table */}
        <div className="pixel-card overflow-hidden max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-grass-500/25 bg-grass-900/60">
                  <th className="px-4 sm:px-5 py-3.5 text-xs font-mono uppercase tracking-wider text-grass-300">
                    {t("launchers.launcher")}
                  </th>
                  <th className="px-4 sm:px-5 py-3.5 text-xs font-mono uppercase tracking-wider text-grass-300">
                    {t("launchers.support")}
                  </th>
                  <th className="px-4 sm:px-5 py-3.5 text-xs font-mono uppercase tracking-wider text-grass-300">
                    {t("launchers.needZip")}
                  </th>
                  <th className="hidden sm:table-cell px-4 sm:px-5 py-3.5 text-xs font-mono uppercase tracking-wider text-grass-300">
                    {t("launchers.notes")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {launchers.map((launcher, idx) => (
                  <tr
                    key={launcher.name}
                    className={cn(
                      "border-b border-grass-500/10 hover:bg-grass-500/5 transition-colors",
                      idx % 2 === 1 && "bg-grass-900/20",
                    )}
                  >
                    <td className="px-4 sm:px-5 py-3.5 text-sm font-semibold text-cream-100">
                      {launcher.name}
                    </td>
                    <td className="px-4 sm:px-5 py-3.5 text-sm">
                      <SupportBadge level={launcher.support} />
                    </td>
                    <td className="px-4 sm:px-5 py-3.5 text-sm">
                      <ZipBadge level={launcher.needZip} />
                    </td>
                    <td className="hidden sm:table-cell px-4 sm:px-5 py-3.5 text-sm text-cream-200/55">
                      {launcher.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note for mobile */}
        <p className="sm:hidden mt-3 text-center text-xs text-cream-200/40">
          {t("launchers.scrollHint")}
        </p>

        {/* Universal tip */}
        <div className="mt-6 max-w-4xl mx-auto flex items-start gap-3 p-4 rounded-md bg-grass-500/10 border border-grass-400/25">
          <Rocket className="w-5 h-5 text-grass-300 shrink-0 mt-0.5" />
          <p className="text-sm text-cream-200/70 leading-relaxed">
            <strong className="text-cream-100">
              {t("launchers.proTip")}
            </strong>{" "}
            {t("launchers.proTipDesc")}
          </p>
        </div>
      </div>
    </Section>
  );
}

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  FolderOpen,
  FileArchive,
  Wrench,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

type TabId = "manual" | "jar" | "troubleshoot";

const TAB_META: { id: TabId; icon: typeof FolderOpen }[] = [
  { id: "manual", icon: FolderOpen },
  { id: "jar", icon: FileArchive },
  { id: "troubleshoot", icon: Wrench },
];

const MANUAL_COMMANDS = `# Windows (using PowerShell)
Rename-Item "yourpack.mrpack" "yourpack.zip"
Expand-Archive -Path "yourpack.zip" -DestinationPath "./extracted"

# Linux/macOS
mv yourpack.mrpack yourpack.zip
unzip yourpack.zip -d ./extracted`;

export function UsageGuide() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabId>("manual");

  const TABS = TAB_META.map((tab) => ({
    ...tab,
    label: t(`guide.tabs.${tab.id}`),
  }));

  const manualSteps = t("guide.manual.steps", { returnObjects: true }) as string[];
  const jarSteps = t("guide.jar.steps", { returnObjects: true }) as string[];
  const jarReasons = t("guide.jar.reasons", { returnObjects: true }) as string[];
  const troubleshoot = t("guide.troubleshoot.items", { returnObjects: true }) as Array<{
    problem: string;
    solutions: string[];
  }>;

  return (
    <Section id="guide">
      <div className="container">
        <SectionHeader
          eyebrow={t("guide.eyebrow")}
          title={t("guide.title")}
          description={t("guide.description")}
        />

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-all",
                  active
                    ? "bg-grass-500/20 border border-grass-400/50 text-cream-50 shadow-block-sm"
                    : "bg-grass-900/40 border border-grass-500/20 text-cream-200/60 hover:text-cream-100 hover:border-grass-400/40",
                )}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div className="pixel-card p-6 sm:p-8 max-w-4xl mx-auto">
          {activeTab === "manual" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-cream-100 mb-1">
                  {t("guide.manual.title")}
                </h3>
                <p className="text-sm text-cream-200/60">
                  {t("guide.manual.desc")}
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-semibold text-cream-100 mb-3">
                  <FolderOpen className="w-4 h-4 text-grass-300" />
                  {t("guide.manual.standardTools")}
                </h4>
                <ol className="space-y-2.5">
                  {manualSteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="shrink-0 w-6 h-6 rounded-md bg-grass-500/15 border border-grass-400/30 flex items-center justify-center text-xs font-mono font-bold text-grass-300">
                        {i + 1}
                      </span>
                      <span className="text-cream-200/70 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-semibold text-cream-100 mb-3">
                  <Terminal className="w-4 h-4 text-ember-400" />
                  {t("guide.manual.commandLine")}
                </h4>
                <pre className="p-4 rounded-md bg-grass-950/80 border border-grass-500/25 overflow-x-auto font-mono text-xs sm:text-sm text-grass-200 leading-relaxed">
                  <code>{MANUAL_COMMANDS}</code>
                </pre>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-md bg-ember-500/10 border border-ember-400/25">
                <Lightbulb className="w-5 h-5 text-ember-400 shrink-0 mt-0.5" />
                <p className="text-sm text-cream-200/70 leading-relaxed">
                  <strong className="text-cream-100">
                    {t("guide.manual.note")}
                  </strong>
                </p>
              </div>
            </div>
          )}

          {activeTab === "jar" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-cream-100 mb-1">
                  {t("guide.jar.title")}
                </h3>
                <p className="text-sm text-cream-200/60">
                  {t("guide.jar.desc")}
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-semibold text-cream-100 mb-3">
                  <FileArchive className="w-4 h-4 text-grass-300" />
                  {t("guide.jar.automatic")}
                </h4>
                <ol className="space-y-2.5">
                  {jarSteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-grass-400 shrink-0 mt-0.5" />
                      <span className="text-cream-200/70 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-cream-100 mb-3">
                  {t("guide.jar.why")}
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {jarReasons.map((reason) => (
                    <div
                      key={reason}
                      className="flex items-start gap-2 p-3 rounded-md bg-grass-900/50 border border-grass-500/15 text-sm text-cream-200/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-ember-400 shrink-0 mt-1.5" />
                      {reason}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "troubleshoot" && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-cream-100 mb-1">
                  {t("guide.troubleshoot.title")}
                </h3>
                <p className="text-sm text-cream-200/60">
                  {t("guide.troubleshoot.desc")}
                </p>
              </div>

              <div className="space-y-3">
                {troubleshoot.map((item) => (
                  <div
                    key={item.problem}
                    className="p-4 rounded-md bg-grass-900/50 border border-grass-500/20"
                  >
                    <div className="flex items-start gap-2.5 mb-3">
                      <AlertTriangle className="w-4 h-4 text-ember-400 shrink-0 mt-0.5" />
                      <p className="font-semibold text-cream-100 text-sm">
                        {item.problem}
                      </p>
                    </div>
                    <ul className="space-y-1.5 ml-6">
                      {item.solutions.map((sol, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-cream-200/60"
                        >
                          <span className="w-1 h-1 rounded-full bg-grass-400 shrink-0 mt-2" />
                          {sol}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-3 p-4 rounded-md bg-grass-500/10 border border-grass-400/25">
                <Lightbulb className="w-5 h-5 text-grass-300 shrink-0 mt-0.5" />
                <p className="text-sm text-cream-200/70 leading-relaxed">
                  <strong className="text-cream-100">
                    {t("guide.troubleshoot.advanced")}
                  </strong>{" "}
                  {t("guide.troubleshoot.advancedDesc")}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

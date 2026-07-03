import { Section, SectionHeader } from "@/components/ui/Section";
import { FileJson, FileBox, Check, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export function TechnicalDetails() {
  const { t } = useTranslation();

  const mrpackStructure = t("techDetails.mrpackList", { returnObjects: true }) as string[];
  const zipStructure = t("techDetails.zipList", { returnObjects: true }) as string[];

  return (
    <Section id="technical">
      <div className="container">
        <SectionHeader
          eyebrow={t("techDetails.eyebrow")}
          title={t("techDetails.title")}
          description={t("techDetails.description")}
        />

        <div className="grid md:grid-cols-2 gap-5">
          {/* .mrpack card */}
          <div className="pixel-card p-6 sm:p-7 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-grass-500/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-md bg-grass-500/15 border border-grass-400/30 flex items-center justify-center">
                  <FileJson className="w-5 h-5 text-grass-300" />
                </div>
                <div>
                  <h3 className="font-bold text-cream-100">
                    {t("techDetails.mrpackStructure")}
                  </h3>
                  <p className="text-xs text-cream-200/50 font-mono">
                    {t("techDetails.mrpackFormat")}
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5">
                {mrpackStructure.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-cream-200/70"
                  >
                    <Check className="w-4 h-4 text-grass-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 p-3 rounded-md bg-grass-900/60 border border-grass-500/20 font-mono text-xs text-grass-300/80">
                <div>modrinth.index.json</div>
                <div className="text-cream-200/40">overrides/</div>
                <div className="text-cream-200/40">server-overrides/</div>
              </div>
            </div>
          </div>

          {/* Standard ZIP card */}
          <div className="pixel-card p-6 sm:p-7 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-ember-500/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-md bg-ember-500/15 border border-ember-400/30 flex items-center justify-center">
                  <FileBox className="w-5 h-5 text-ember-400" />
                </div>
                <div>
                  <h3 className="font-bold text-cream-100">
                    {t("techDetails.zipStructure")}
                  </h3>
                  <p className="text-xs text-cream-200/50 font-mono">
                    {t("techDetails.zipFormat")}
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5">
                {zipStructure.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-cream-200/70"
                  >
                    <Check className="w-4 h-4 text-ember-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 p-3 rounded-md bg-grass-900/60 border border-grass-500/20 font-mono text-xs text-ember-400/80">
                <div>mods/*.jar</div>
                <div className="text-cream-200/40">config/</div>
                <div className="text-cream-200/40">defaultconfigs/</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key difference banner */}
        <div className="mt-6 pixel-card p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-md bg-ember-500/15 border border-ember-400/30 flex items-center justify-center">
              <X className="w-5 h-5 text-ember-400" />
            </div>
            <span className="font-semibold text-cream-100">
              {t("techDetails.keyDifference")}
            </span>
          </div>
          <p className="text-sm text-cream-200/60 leading-relaxed">
            {t("techDetails.keyDiffDesc")}
          </p>
        </div>
      </div>
    </Section>
  );
}

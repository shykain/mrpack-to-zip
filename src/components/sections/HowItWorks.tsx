import { Section, SectionHeader } from "@/components/ui/Section";
import { Upload, Cog, Download, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const STEP_META = [
  { number: "01", icon: Upload, accent: "from-grass-400 to-grass-600", sprite: "sprite-grass" },
  { number: "02", icon: Cog, accent: "from-ember-400 to-ember-600", sprite: "sprite-redstone" },
  { number: "03", icon: Download, accent: "from-grass-300 to-grass-500", sprite: "sprite-emerald" },
];

export function HowItWorks() {
  const { t } = useTranslation();

  const steps = t("howItWorks.steps", { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;

  return (
    <Section id="how-it-works">
      <div className="container">
        <SectionHeader
          eyebrow={t("howItWorks.eyebrow")}
          title={t("howItWorks.title")}
          description={t("howItWorks.description")}
        />

        <div className="grid md:grid-cols-3 gap-5 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-grass-500/30 via-ember-500/40 to-grass-400/30" />

          {steps.map((step, idx) => {
            const meta = STEP_META[idx];
            const Icon = meta.icon;
            return (
              <div key={meta.number} className="relative">
                <div className="pixel-card pixel-card-corners pixel-card-hover p-6 h-full relative overflow-hidden">
                  {/* Floating sprite decoration */}
                  <div
                    className={`absolute top-3 right-3 w-8 h-8 ${meta.sprite} rounded-sm opacity-20`}
                    style={{ animation: `pixelFloat ${6 + idx}s ease-in-out ${idx * 0.5}s infinite` }}
                  />

                  {/* Number badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${meta.accent} flex items-center justify-center border border-white/10 shadow-block-sm`}
                    >
                      <Icon className="w-6 h-6 text-cream-50" />
                    </div>
                    <span className="font-pixel text-xs text-grass-300/60">
                      {meta.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-cream-100">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream-200/60 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Mini crafting grid decoration */}
                  <div className="mt-4 flex gap-1">
                    {[0, 1, 2].map((ci) => (
                      <div
                        key={ci}
                        className={`w-2 h-2 rounded-sm ${
                          ci <= idx ? "bg-grass-400/60" : "bg-grass-900/60 border border-grass-500/15"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Arrow between steps (mobile) */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-3">
                    <ArrowRight className="w-5 h-5 text-grass-400/50 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

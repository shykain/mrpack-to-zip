import { Section, SectionHeader } from "@/components/ui/Section";
import {
  ShieldCheck,
  FileBox,
  FolderTree,
  Wand2,
  Zap,
  Boxes,
  Gamepad2,
  Layers,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const FEATURE_ICONS = [ShieldCheck, FileBox, FolderTree, Wand2, Zap, Boxes];

export function About() {
  const { t } = useTranslation();

  const features = t("about.features", { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;
  const tags = t("about.tags", { returnObjects: true }) as string[];

  return (
    <Section id="about">
      <div className="container">
        <SectionHeader
          eyebrow={t("about.eyebrow")}
          title={
            <>
              About MRPack to ZIP <br className="hidden sm:block" />
              Converter
            </>
          }
          description={t("about.description")}
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Features list - spans 2 cols */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {features.map((f, idx) => {
              const Icon = FEATURE_ICONS[idx % FEATURE_ICONS.length];
              const sprites = ["sprite-grass", "sprite-diamond", "sprite-gold", "sprite-emerald", "sprite-redstone", "sprite-lapis"];
              return (
                <div
                  key={f.title}
                  className="pixel-card pixel-card-corners pixel-card-hover p-5 relative overflow-hidden"
                >
                  {/* Floating sprite decoration */}
                  <div
                    className={`absolute top-3 right-3 w-6 h-6 ${sprites[idx % sprites.length]} rounded-sm opacity-15`}
                    style={{ animation: `pixelFloat ${7 + idx}s ease-in-out ${idx * 0.4}s infinite` }}
                  />
                  <div className="relative w-10 h-10 rounded-md bg-grass-500/15 border border-grass-400/30 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-grass-300" />
                  </div>
                  <h3 className="font-semibold text-cream-100">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-cream-200/60 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Side panel */}
          <div className="space-y-4">
            <div className="pixel-card pixel-card-corners p-6 relative overflow-hidden">
              <div
                className="absolute top-3 right-3 w-7 h-7 sprite-emerald rounded-sm opacity-15"
                style={{ animation: "pixelFloat 9s ease-in-out 0s infinite" }}
              />
              <div className="flex items-center gap-2 mb-4">
                <Gamepad2 className="w-5 h-5 text-ember-400" />
                <h3 className="font-semibold text-cream-100">
                  {t("about.builtFor")}
                </h3>
              </div>
              <p className="text-sm text-cream-200/60 leading-relaxed">
                {t("about.builtForDesc")}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-cream-200/40">
                <Layers className="w-3.5 h-3.5" />
                {t("about.worksWith")}
              </div>
              {/* Mod loader pixel badges */}
              <div className="mt-3 flex gap-1.5">
                <span className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-grass-500/10 border border-grass-500/20 text-grass-300">Fabric</span>
                <span className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-ember-500/10 border border-ember-400/20 text-ember-400">Forge</span>
                <span className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-grass-500/10 border border-grass-500/20 text-grass-300">Quilt</span>
              </div>
            </div>

            <div className="pixel-card pixel-card-corners p-6">
              <h3 className="font-semibold text-cream-100 mb-3">
                {t("about.tagsTitle")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-grass-500/10 border border-grass-500/25 text-grass-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

import { Section, SectionHeader } from "@/components/ui/Section";
import { FileJson, FileBox, Check, X } from "lucide-react";

const MRPACK_STRUCTURE = [
  "Contains modrinth.index.json",
  "Includes metadata about mods",
  "Uses Modrinth's format",
  "Files organized by project IDs",
];

const ZIP_STRUCTURE = [
  "Contains mod files directly",
  "Simple folder structure",
  "Compatible with most launchers",
  "Files organized by name/function",
];

export function TechnicalDetails() {
  return (
    <Section id="technical">
      <div className="container">
        <SectionHeader
          eyebrow="Technical Details"
          title="mrpack vs standard ZIP"
          description="Modrinth packages (.mrpack) are special ZIP files containing a JSON index file that describes the mod structure and includes metadata about each file."
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
                  <h3 className="font-bold text-cream-100">.mrpack Structure</h3>
                  <p className="text-xs text-cream-200/50 font-mono">
                    Modrinth modpack format
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5">
                {MRPACK_STRUCTURE.map((item) => (
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
                    Standard ZIP Structure
                  </h3>
                  <p className="text-xs text-cream-200/50 font-mono">
                    Universal archive format
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5">
                {ZIP_STRUCTURE.map((item) => (
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
            <span className="font-semibold text-cream-100">Key difference</span>
          </div>
          <p className="text-sm text-cream-200/60 leading-relaxed">
            A <code className="text-grass-300 font-mono">.mrpack</code> file
            only <strong className="text-cream-100">references</strong> mods via
            download URLs in its index — it doesn't contain the actual JAR files
            (except for overrides). Our converter can optionally download them
            all and bundle them into a self-contained ZIP.
          </p>
        </div>
      </div>
    </Section>
  );
}

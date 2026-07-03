import { Section, SectionHeader } from "@/components/ui/Section";
import { FileCode, History, GitCompare } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const JSON_EXAMPLE = `{
  "formatVersion": 1,
  "game": "minecraft",
  "versionId": "1.0.0",
  "name": "Example Modpack",
  "summary": "A sample modpack demonstrating the format",
  "files": [
    {
      "path": "mods/examplemod.jar",
      "hashes": {
        "sha1": "93d6c1f9a0c18c8d1b6ae114f26fd1b2766e9ff4",
        "sha512": "4cd3a3e74a0b68e5b5e3fa4c8bdd8a3c8531e771..."
      },
      "downloads": [
        "https://cdn.modrinth.com/data/AAAAAAA/versions/1.0.0/examplemod.jar"
      ],
      "fileSize": 1234567
    }
  ],
  "dependencies": {
    "minecraft": "1.19.2",
    "fabric-loader": "0.14.9"
  }
}`;

const HISTORY_YEARS = ["2021", "2022", "2023"];

export function FormatInfo() {
  const { t } = useTranslation();

  const advantages = t("format.advantageList", { returnObjects: true }) as string[];
  const historyItems = t("format.historyItems", { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;
  const comparisonRows = t("format.comparisonRows", { returnObjects: true }) as Array<{
    feature: string;
    mrpack: string;
    curseforge: string;
    zip: string;
  }>;

  return (
    <Section id="format">
      <div className="container">
        <SectionHeader
          eyebrow={t("format.eyebrow")}
          title={t("format.title")}
          description={t("format.description")}
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* JSON structure */}
          <div className="pixel-card overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-grass-500/20 bg-grass-900/60">
              <FileCode className="w-4 h-4 text-grass-300" />
              <span className="font-mono text-sm text-cream-100">
                modrinth.index.json
              </span>
              <span className="ml-auto text-xs text-cream-200/40">
                {t("format.structureExample")}
              </span>
            </div>
            <pre className="p-5 overflow-x-auto font-mono text-xs sm:text-sm text-grass-200 leading-relaxed bg-grass-950/60">
              <code>{JSON_EXAMPLE}</code>
            </pre>
          </div>

          {/* Advantages + history */}
          <div className="space-y-6">
            <div className="pixel-card p-6">
              <h3 className="font-bold text-cream-100 mb-4">
                {t("format.advantages")}
              </h3>
              <ul className="space-y-2">
                {advantages.map((adv) => (
                  <li
                    key={adv}
                    className="flex items-start gap-2.5 text-sm text-cream-200/70"
                  >
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-grass-400 mt-1.5" />
                    {adv}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pixel-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <History className="w-4 h-4 text-ember-400" />
                <h3 className="font-bold text-cream-100">{t("format.history")}</h3>
              </div>
              <div className="space-y-4">
                {historyItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="font-pixel text-xs text-grass-300">
                        {HISTORY_YEARS[idx]}
                      </span>
                      {idx < historyItems.length - 1 && (
                        <span className="w-px flex-1 bg-grass-500/30 mt-2" />
                      )}
                    </div>
                    <div className="pb-1">
                      <p className="font-semibold text-cream-100 text-sm">
                        {item.title}
                      </p>
                      <p className="text-xs text-cream-200/55 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mt-6 pixel-card overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-grass-500/20 bg-grass-900/60">
            <GitCompare className="w-4 h-4 text-grass-300" />
            <h3 className="font-semibold text-cream-100 text-sm">
              {t("format.comparison")}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-grass-500/20">
                  <th className="px-4 sm:px-5 py-3 text-xs font-mono uppercase tracking-wider text-grass-300">
                    {t("format.feature")}
                  </th>
                  <th className="px-4 sm:px-5 py-3 text-xs font-mono uppercase tracking-wider text-grass-300">
                    MRPACK
                  </th>
                  <th className="px-4 sm:px-5 py-3 text-xs font-mono uppercase tracking-wider text-grass-300">
                    CurseForge
                  </th>
                  <th className="px-4 sm:px-5 py-3 text-xs font-mono uppercase tracking-wider text-grass-300">
                    ZIP/MultiMC
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      "border-b border-grass-500/10",
                      idx % 2 === 1 && "bg-grass-900/20",
                    )}
                  >
                    <td className="px-4 sm:px-5 py-3 text-sm font-medium text-cream-100">
                      {row.feature}
                    </td>
                    <td className="px-4 sm:px-5 py-3 text-sm text-grass-300">
                      {row.mrpack}
                    </td>
                    <td className="px-4 sm:px-5 py-3 text-sm text-cream-200/55">
                      {row.curseforge}
                    </td>
                    <td className="px-4 sm:px-5 py-3 text-sm text-cream-200/55">
                      {row.zip}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Section>
  );
}

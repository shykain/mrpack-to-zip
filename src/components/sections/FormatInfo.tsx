import { Section, SectionHeader } from "@/components/ui/Section";
import { FileCode, History, GitCompare } from "lucide-react";
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

const HISTORY = [
  {
    year: "2021",
    title: "Initial release",
    description: "Initial format specification released by Modrinth",
  },
  {
    year: "2022",
    title: "Version 1 standardized",
    description: "Standardized with improved hash verification",
  },
  {
    year: "2023",
    title: "Enhanced support",
    description: "Enhanced launcher support and client/server differentiation",
  },
];

const ADVANTAGES = [
  "Smaller file sizes (references instead of embedding mods)",
  "Automatic dependency resolution",
  "Better version control and updates",
  "Support for both client and server setups",
  "Native compatibility with modern launchers",
];

const COMPARISON = [
  { feature: "File Size", mrpack: "Small (references only)", curseforge: "Medium (manifest)", zip: "Large (contains all mods)" },
  { feature: "Integrity Verification", mrpack: "SHA1 & SHA512 hashes", curseforge: "Project IDs only", zip: "None built-in" },
  { feature: "Launcher Support", mrpack: "Most modern launchers", curseforge: "CurseForge & some others", zip: "Universal support" },
  { feature: "Client/Server Distinction", mrpack: "Built-in support", curseforge: "Limited support", zip: "Manual separation" },
  { feature: "Open Standard", mrpack: "Yes (fully documented)", curseforge: "Partially", zip: "No standard" },
];

export function FormatInfo() {
  return (
    <Section id="format">
      <div className="container">
        <SectionHeader
          eyebrow="Format"
          title="About the MRPACK format"
          description="The Modrinth modpack format (.mrpack) is a specialized ZIP file format designed for distributing Minecraft modpacks in an efficient and standardized way."
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
                Structure example
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
                MRPACK advantages
              </h3>
              <ul className="space-y-2">
                {ADVANTAGES.map((adv) => (
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
                <h3 className="font-bold text-cream-100">Format history</h3>
              </div>
              <div className="space-y-4">
                {HISTORY.map((item, idx) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="font-pixel text-xs text-grass-300">
                        {item.year}
                      </span>
                      {idx < HISTORY.length - 1 && (
                        <span className="w-px flex-1 bg-grass-500/30 mt-2" />
                      )}
                    </div>
                    <div className="pb-1">
                      <p className="font-semibold text-cream-100 text-sm">
                        {item.title}
                      </p>
                      <p className="text-xs text-cream-200/55 mt-0.5">
                        {item.description}
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
              Modpack format comparison
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-grass-500/20">
                  <th className="px-4 sm:px-5 py-3 text-xs font-mono uppercase tracking-wider text-grass-300">
                    Feature
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
                {COMPARISON.map((row, idx) => (
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

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
import { cn } from "@/lib/utils";

type TabId = "manual" | "jar" | "troubleshoot";

const TABS: { id: TabId; label: string; icon: typeof FolderOpen }[] = [
  { id: "manual", label: "Open Manually", icon: FolderOpen },
  { id: "jar", label: "Extract JAR Files", icon: FileArchive },
  { id: "troubleshoot", label: "Troubleshooting", icon: Wrench },
];

const MANUAL_STEPS = [
  "Rename the .mrpack file to .zip (change the extension)",
  "Open with any ZIP extraction tool (WinRAR, 7-Zip, etc.)",
  "Extract the contents to a folder",
  'Look for the modrinth.index.json file and overrides folder',
];

const MANUAL_COMMANDS = `# Windows (using PowerShell)
Rename-Item "yourpack.mrpack" "yourpack.zip"
Expand-Archive -Path "yourpack.zip" -DestinationPath "./extracted"

# Linux/macOS
mv yourpack.mrpack yourpack.zip
unzip yourpack.zip -d ./extracted`;

const JAR_STEPS = [
  "Upload your MRPACK file to our converter",
  'Ensure "Download mod files" is selected',
  "Convert to ZIP format",
  "Download and extract the ZIP",
  "All mod JAR files will be in the mods folder",
];

const JAR_REASONS = [
  "Manually inspect individual mods",
  "Create a custom modpack using select mods",
  "Use with launchers that don't support MRPACK",
  "Backup your favorite mods locally",
  "Modify specific mods before installation",
];

const TROUBLESHOOT = [
  {
    problem: "Cannot open .mrpack file",
    solutions: [
      "Ensure you're using a compatible launcher (Prism, MultiMC, ATLauncher)",
      "Try renaming to .zip and extracting manually",
      "Check if the file downloaded completely without errors",
    ],
  },
  {
    problem: "Missing mods after installation",
    solutions: [
      "Ensure your launcher has internet access to download mods",
      "Some mods may be region-restricted or temporarily unavailable",
      'Use our converter with "Download mod files" enabled',
    ],
  },
  {
    problem: "Corrupted MRPACK file",
    solutions: [
      "Re-download the file from the original source",
      "Try using a different browser or download manager",
      "Convert from MRPACK to ZIP can sometimes repair minor corruption",
    ],
  },
  {
    problem: "Unable to convert MRPACK",
    solutions: [
      "Check your internet connection — mod downloads may be failing",
      "Try using a different browser (Chrome or Firefox recommended)",
      "For large modpacks, ensure your device has sufficient memory",
      "Try disabling browser extensions that might interfere",
    ],
  },
];

export function UsageGuide() {
  const [activeTab, setActiveTab] = useState<TabId>("manual");

  return (
    <Section id="guide">
      <div className="container">
        <SectionHeader
          eyebrow="Usage Guide"
          title="MRPACK usage guide"
          description="Learn how to open, extract, and troubleshoot MRPACK files — with or without our converter."
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
                  How to open MRPACK files manually
                </h3>
                <p className="text-sm text-cream-200/60">
                  While MRPACK files are designed to be installed directly
                  through compatible launchers, you can also manually open and
                  extract them.
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-semibold text-cream-100 mb-3">
                  <FolderOpen className="w-4 h-4 text-grass-300" />
                  Using standard compression tools
                </h4>
                <ol className="space-y-2.5">
                  {MANUAL_STEPS.map((step, i) => (
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
                  Command line approach
                </h4>
                <pre className="p-4 rounded-md bg-grass-950/80 border border-grass-500/25 overflow-x-auto font-mono text-xs sm:text-sm text-grass-200 leading-relaxed">
                  <code>{MANUAL_COMMANDS}</code>
                </pre>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-md bg-ember-500/10 border border-ember-400/25">
                <Lightbulb className="w-5 h-5 text-ember-400 shrink-0 mt-0.5" />
                <p className="text-sm text-cream-200/70 leading-relaxed">
                  <strong className="text-cream-100">Note:</strong> Simply
                  opening the MRPACK file won't download the actual mod files.
                  To obtain the mod files, you'll need to either use a
                  compatible launcher or manually download each mod from the
                  URLs listed in the modrinth.index.json file.
                </p>
              </div>
            </div>
          )}

          {activeTab === "jar" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-cream-100 mb-1">
                  Converting MRPACK to JAR files
                </h3>
                <p className="text-sm text-cream-200/60">
                  MRPACK files don't directly contain the JAR files for your
                  mods, but our converter can help you extract all the JAR
                  files.
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-semibold text-cream-100 mb-3">
                  <FileArchive className="w-4 h-4 text-grass-300" />
                  Automatic JAR extraction
                </h4>
                <ol className="space-y-2.5">
                  {JAR_STEPS.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-grass-400 shrink-0 mt-0.5" />
                      <span className="text-cream-200/70 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-cream-100 mb-3">
                  Why extract JAR files?
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {JAR_REASONS.map((reason) => (
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
                  Common MRPACK issues and solutions
                </h3>
                <p className="text-sm text-cream-200/60">
                  Troubleshooting guide for the most frequent problems.
                </p>
              </div>

              <div className="space-y-3">
                {TROUBLESHOOT.map((item) => (
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
                    Advanced troubleshooting:
                  </strong>{" "}
                  If you continue experiencing issues, you can examine the
                  modrinth.index.json file for invalid entries or corrupted
                  URLs. Often, manually downloading problematic mods and placing
                  them in the correct folders can resolve installation
                  problems.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

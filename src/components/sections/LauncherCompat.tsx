import { Section, SectionHeader } from "@/components/ui/Section";
import { Check, X, AlertCircle, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

type SupportLevel = "full" | "partial" | "none";

interface Launcher {
  name: string;
  support: SupportLevel;
  needZip: "not-required" | "sometimes" | "required" | "recommended";
  notes: string;
}

const LAUNCHERS: Launcher[] = [
  {
    name: "Prism Launcher",
    support: "full",
    needZip: "not-required",
    notes: "Direct import available",
  },
  {
    name: "MultiMC",
    support: "full",
    needZip: "not-required",
    notes: 'Version 5.0+ supports via "Import from zip" feature',
  },
  {
    name: "Official Launcher",
    support: "none",
    needZip: "required",
    notes: "No native support for modpacks",
  },
  {
    name: "CurseForge",
    support: "partial",
    needZip: "sometimes",
    notes: "Primarily designed for .cf format, some mrpack files may need conversion",
  },
  {
    name: "ATLauncher",
    support: "full",
    needZip: "not-required",
    notes: "Direct import available",
  },
  {
    name: "GDLauncher",
    support: "full",
    needZip: "not-required",
    notes: "Use import function",
  },
  {
    name: "Technic Launcher",
    support: "none",
    needZip: "required",
    notes: "Only supports ZIP format",
  },
  {
    name: "HMCL",
    support: "full",
    needZip: "not-required",
    notes: 'Use "Install Modpack" feature',
  },
  {
    name: "PCL2",
    support: "partial",
    needZip: "recommended",
    notes: "ZIP format more stable",
  },
];

function SupportBadge({ level }: { level: SupportLevel }) {
  if (level === "full") {
    return (
      <span className="inline-flex items-center gap-1.5 text-grass-300">
        <Check className="w-4 h-4" />
        Full Support
      </span>
    );
  }
  if (level === "partial") {
    return (
      <span className="inline-flex items-center gap-1.5 text-ember-400">
        <AlertCircle className="w-4 h-4" />
        Partial
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-red-300">
      <X className="w-4 h-4" />
      Not Supported
    </span>
  );
}

function ZipBadge({ level }: { level: Launcher["needZip"] }) {
  const map = {
    "not-required": { label: "Not Required", color: "text-grass-300" },
    sometimes: { label: "Sometimes", color: "text-ember-400" },
    required: { label: "Required", color: "text-red-300" },
    recommended: { label: "Recommended", color: "text-ember-400" },
  };
  const cfg = map[level];
  return <span className={cfg.color}>{cfg.label}</span>;
}

export function LauncherCompat() {
  return (
    <Section id="launchers">
      <div className="container">
        <SectionHeader
          eyebrow="Compatibility"
          title="Launcher compatibility guide"
          description="Not all launchers handle .mrpack files the same way. Here's the full compatibility breakdown."
        />

        {/* Table */}
        <div className="pixel-card overflow-hidden max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-grass-500/25 bg-grass-900/60">
                  <th className="px-4 sm:px-5 py-3.5 text-xs font-mono uppercase tracking-wider text-grass-300">
                    Launcher
                  </th>
                  <th className="px-4 sm:px-5 py-3.5 text-xs font-mono uppercase tracking-wider text-grass-300">
                    MRPACK Support
                  </th>
                  <th className="px-4 sm:px-5 py-3.5 text-xs font-mono uppercase tracking-wider text-grass-300">
                    Need ZIP?
                  </th>
                  <th className="hidden sm:table-cell px-4 sm:px-5 py-3.5 text-xs font-mono uppercase tracking-wider text-grass-300">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {LAUNCHERS.map((launcher, idx) => (
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
          Scroll the table horizontally to see all columns
        </p>

        {/* Universal tip */}
        <div className="mt-6 max-w-4xl mx-auto flex items-start gap-3 p-4 rounded-md bg-grass-500/10 border border-grass-400/25">
          <Rocket className="w-5 h-5 text-grass-300 shrink-0 mt-0.5" />
          <p className="text-sm text-cream-200/70 leading-relaxed">
            <strong className="text-cream-100">Pro tip:</strong> When in doubt,
            converting to ZIP format provides the most universal compatibility
            across all launchers. Use our converter above with "Download mod
            files" enabled for a complete, ready-to-use pack.
          </p>
        </div>
      </div>
    </Section>
  );
}

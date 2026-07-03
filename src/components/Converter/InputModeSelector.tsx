import { Package, Link, Upload } from "lucide-react";
import { useConvertStore } from "@/lib/store";
import { type InputMode } from "@/lib/types";

const modes: { key: InputMode; label: string; description: string; icon: React.ReactNode }[] = [
  {
    key: "project",
    label: "Project ID",
    description: "From Modrinth",
    icon: <Package className="w-5 h-5" />,
  },
  {
    key: "url",
    label: "From URL",
    description: "Paste download link",
    icon: <Link className="w-5 h-5" />,
  },
  {
    key: "file",
    label: "Upload File",
    description: "Local .mrpack",
    icon: <Upload className="w-5 h-5" />,
  },
];

export function InputModeSelector() {
  const inputMode = useConvertStore((s) => s.inputMode);
  const setInputMode = useConvertStore((s) => s.setInputMode);

  return (
    <div className="flex gap-2 sm:gap-3">
      {modes.map((mode) => (
        <button
          key={mode.key}
          onClick={() => setInputMode(mode.key)}
          className={`flex-1 flex flex-col items-center gap-1 px-3 py-3 sm:px-4 sm:py-4 rounded-xl border-2 transition-all duration-200 ${
            inputMode === mode.key
              ? "border-grass-400 bg-grass-500/20 text-grass-300 shadow-glow"
              : "border-cream-700/30 bg-cream-800/20 text-cream-200/60 hover:border-cream-600 hover:text-cream-200/80"
          }`}
        >
          <span className="opacity-80">{mode.icon}</span>
          <span className="text-xs sm:text-sm font-medium">{mode.label}</span>
          <span className="text-[10px] sm:text-xs opacity-60">{mode.description}</span>
        </button>
      ))}
    </div>
  );
}

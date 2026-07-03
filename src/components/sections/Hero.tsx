import { Converter } from "@/components/Converter/Converter";
import { Cpu, Lock, Download } from "lucide-react";

const STATS = [
  { icon: Cpu, label: "Client-side", value: "100%" },
  { icon: Lock, label: "Privacy", value: "Full" },
  { icon: Download, label: "Cost", value: "Free" },
];

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="container">
        {/* Top tagline */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-grass-400 animate-pulse" />
            Modrinth Modpack Tool
          </span>
        </div>

        {/* Converter */}
        <Converter />

        {/* Stats row */}
        <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="pixel-card p-4 sm:p-5 flex flex-col items-center text-center"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-grass-300 mb-2" />
                <span className="text-lg sm:text-2xl font-bold text-cream-50">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-cream-200/50">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

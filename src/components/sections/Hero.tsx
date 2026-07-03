import { Converter } from "@/components/Converter/Converter";
import { Cpu, Lock, Download } from "lucide-react";

const STATS = [
  { icon: Cpu, label: "Client-side", value: "100%" },
  { icon: Lock, label: "Privacy", value: "Full" },
  { icon: Download, label: "Cost", value: "Free" },
];

// Floating Minecraft block decorations
const FLOATING_BLOCKS = [
  { sprite: "sprite-grass", size: 28, top: "8%", left: "5%", duration: "7s", delay: "0s" },
  { sprite: "sprite-diamond", size: 22, top: "15%", left: "88%", duration: "9s", delay: "1.5s" },
  { sprite: "sprite-emerald", size: 24, top: "60%", left: "3%", duration: "8s", delay: "0.8s" },
  { sprite: "sprite-gold", size: 20, top: "70%", left: "92%", duration: "10s", delay: "2s" },
  { sprite: "sprite-redstone", size: 18, top: "40%", left: "95%", duration: "6s", delay: "1s" },
  { sprite: "sprite-lapis", size: 26, top: "35%", left: "2%", duration: "11s", delay: "2.5s" },
];

// Small floating particles
const PARTICLES = [
  { size: 4, top: "12%", left: "15%", duration: "8s", delay: "0s", color: "bg-grass-400" },
  { size: 3, top: "25%", left: "80%", duration: "10s", delay: "1s", color: "bg-ember-400" },
  { size: 5, top: "55%", left: "12%", duration: "7s", delay: "0.5s", color: "bg-grass-300" },
  { size: 3, top: "65%", left: "85%", duration: "9s", delay: "1.8s", color: "bg-grass-400" },
  { size: 4, top: "80%", left: "20%", duration: "11s", delay: "2.2s", color: "bg-ember-400" },
  { size: 3, top: "45%", left: "70%", duration: "8s", delay: "0.3s", color: "bg-grass-300" },
  { size: 4, top: "20%", left: "45%", duration: "9s", delay: "1.5s", color: "bg-grass-400" },
  { size: 3, top: "85%", left: "75%", duration: "10s", delay: "0.7s", color: "bg-grass-300" },
];

export function Hero() {
  return (
    <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 overflow-hidden">
      {/* Floating Minecraft block sprites */}
      {FLOATING_BLOCKS.map((block, i) => (
        <div
          key={`block-${i}`}
          className={`mc-pixel-block ${block.sprite} rounded-sm`}
          style={{
            width: `${block.size}px`,
            height: `${block.size}px`,
            top: block.top,
            left: block.left,
            boxShadow: "0 0 12px rgba(76,175,80,0.2)",
            ["--float-duration" as string]: block.duration,
            ["--float-delay" as string]: block.delay,
            animation: `pixelFloat ${block.duration} ease-in-out ${block.delay} infinite`,
          }}
        />
      ))}

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={`particle-${i}`}
          className={`pixel-particle ${p.color}`}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: p.top,
            left: p.left,
            ["--float-duration" as string]: p.duration,
            ["--float-delay" as string]: p.delay,
            animation: `pixelDrift ${p.duration} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      <div className="container relative z-10">
        {/* Converter */}
        <Converter />

        {/* Stats row */}
        <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="pixel-card pixel-card-corners p-4 sm:p-5 flex flex-col items-center text-center"
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

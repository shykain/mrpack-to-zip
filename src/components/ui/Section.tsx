import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-16 sm:py-24 scroll-mt-20", className)}
    >
      {/* Pixel divider at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 pixel-divider opacity-30" />
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl mb-12",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <span className="section-eyebrow">
        <span className="w-1.5 h-1.5 rounded-sm sprite-grass" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight heading-gradient">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-cream-200/70 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

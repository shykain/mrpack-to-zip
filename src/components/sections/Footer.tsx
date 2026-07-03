import { Link } from "react-router-dom";
import { Boxes, Heart } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Tool",
    links: [
      { label: "Converter", href: "#converter" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Technical Details", href: "#technical" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Usage Guide", href: "#guide" },
      { label: "FAQ", href: "#faq" },
      { label: "Launcher Compatibility", href: "#launchers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy", internal: true },
      { label: "Contact Us", href: "/contact", internal: true },
    ],
  },
  {
    title: "External",
    links: [
      {
        label: "Minecraft",
        href: "https://www.minecraft.net",
        external: true,
      },
      {
        label: "Modrinth",
        href: "https://modrinth.com/",
        external: true,
      },
      {
        label: "CurseForge",
        href: "https://www.curseforge.com/minecraft",
        external: true,
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-grass-500/20 bg-grass-950/60">
      {/* Pixel divider top */}
      <div className="pixel-divider" />

      {/* Floating pixel blocks decoration */}
      <div className="absolute top-4 left-4 w-5 h-5 sprite-diamond rounded-sm opacity-15 hidden sm:block"
        style={{ animation: "pixelFloat 10s ease-in-out 0s infinite" }} />
      <div className="absolute top-6 right-8 w-4 h-4 sprite-gold rounded-sm opacity-15 hidden sm:block"
        style={{ animation: "pixelFloat 8s ease-in-out 1s infinite" }} />

      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="relative w-9 h-9 rounded-md bg-gradient-to-br from-grass-400 to-grass-600 flex items-center justify-center border border-grass-300/40">
                <div className="absolute inset-0 rounded-md sprite-grass opacity-30" />
                <Boxes className="relative w-5 h-5 text-cream-50" />
              </div>
              <div className="leading-tight">
                <span className="block font-pixel text-[10px] text-cream-50">
                  MRPack
                </span>
                <span className="block font-mono text-[10px] text-grass-300 -mt-0.5">
                  to ZIP
                </span>
              </div>
            </div>
            <p className="text-sm text-cream-200/50 leading-relaxed max-w-xs">
              Free, private, browser-based converter for Modrinth modpack
              files. Built for the Minecraft community.
            </p>
            {/* Mini pixel block row */}
            <div className="mt-3 flex gap-1.5">
              <span className="w-3 h-3 sprite-grass rounded-sm" />
              <span className="w-3 h-3 sprite-diamond rounded-sm" />
              <span className="w-3 h-3 sprite-gold rounded-sm" />
              <span className="w-3 h-3 sprite-emerald rounded-sm" />
              <span className="w-3 h-3 sprite-redstone rounded-sm" />
              <span className="w-3 h-3 sprite-lapis rounded-sm" />
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="font-mono text-xs uppercase tracking-wider text-grass-300 mb-3">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => {
                  const isInternal = "internal" in link && link.internal;
                  return (
                    <li key={link.label}>
                      {isInternal ? (
                        <Link
                          to={link.href}
                          className="text-sm text-cream-200/60 hover:text-grass-300 transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target={"external" in link && link.external ? "_blank" : undefined}
                          rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                          className="text-sm text-cream-200/60 hover:text-grass-300 transition-colors"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-grass-500/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-200/40">
          <p>
            © {new Date().getFullYear()} MRPack to ZIP. All processing happens
            in your browser.
          </p>
          <p className="flex items-center gap-1.5">
            Not affiliated with Modrinth. Built with
            <Heart className="w-3 h-3 text-ember-400 fill-ember-400" />
            for Minecrafters.
          </p>
        </div>
      </div>
    </footer>
  );
}

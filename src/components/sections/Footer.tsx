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
    title: "External",
    links: [
      {
        label: "Modrinth",
        href: "https://modrinth.com",
        external: true,
      },
      {
        label: "Modrinth Docs",
        href: "https://docs.modrinth.com",
        external: true,
      },
      {
        label: "MRPACK Spec",
        href: "https://docs.modrinth.com/docs/modpacks/format_definition/",
        external: true,
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-grass-500/20 bg-grass-950/60">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="relative w-9 h-9 rounded-md bg-gradient-to-br from-grass-400 to-grass-600 flex items-center justify-center border border-grass-300/40">
                <Boxes className="w-5 h-5 text-cream-50" />
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
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="font-mono text-xs uppercase tracking-wider text-grass-300 mb-3">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-cream-200/60 hover:text-grass-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
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

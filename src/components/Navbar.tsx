import { useEffect, useState } from "react";
import { Boxes, Menu, X, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#converter", label: "Converter" },
  { href: "#about", label: "About" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#guide", label: "Guide" },
  { href: "#faq", label: "FAQ" },
  { href: "#launchers", label: "Launchers" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-grass-500/20 py-2.5"
          : "bg-transparent py-4",
      )}
    >
      <nav className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#converter"
          className="flex items-center gap-2.5 group"
          onClick={closeMenu}
        >
          <div className="relative w-9 h-9 rounded-md bg-gradient-to-br from-grass-400 to-grass-600 flex items-center justify-center border border-grass-300/40 shadow-block-sm group-hover:scale-105 transition-transform">
            <Boxes className="w-5 h-5 text-cream-50" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-ember-500 border border-grass-900" />
          </div>
          <div className="leading-tight">
            <span className="block font-pixel text-[10px] text-cream-50 tracking-tight">
              MRPack
            </span>
            <span className="block font-mono text-[10px] text-grass-300 -mt-0.5">
              to ZIP
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 rounded-md text-sm font-medium text-cream-200/70 hover:text-cream-50 hover:bg-grass-500/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://modrinth.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sm"
          >
            <Github className="w-4 h-4" />
            Modrinth
          </a>
          <a href="#converter" className="btn-primary text-sm">
            Convert Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-10 h-10 rounded-md flex items-center justify-center text-cream-100 hover:bg-grass-500/15"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden container mt-2 animate-drop-bounce">
          <div className="glass rounded-lg border border-grass-500/20 p-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-4 py-2.5 rounded-md text-sm font-medium text-cream-200/80 hover:text-cream-50 hover:bg-grass-500/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#converter"
              onClick={closeMenu}
              className="btn-primary mt-2 text-sm"
            >
              Convert Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

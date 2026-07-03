import { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Boxes, Menu, X, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { LANGUAGES } from "@/i18n";
import type { LanguageCode } from "@/i18n";
import { getLangFromPath, buildLocalizedPath, stripLangFromPath } from "@/i18n/utils";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = getLangFromPath(location.pathname);
  const cleanPath = stripLangFromPath(location.pathname);
  const isHome = cleanPath === "/";

  const NAV_LINKS = [
    { href: isHome ? "#converter" : buildLocalizedPath("/#converter", currentLang), label: t("nav.converter") },
    { href: isHome ? "#about" : buildLocalizedPath("/#about", currentLang), label: t("nav.about") },
    { href: isHome ? "#how-it-works" : buildLocalizedPath("/#how-it-works", currentLang), label: t("nav.howItWorks") },
    { href: isHome ? "#guide" : buildLocalizedPath("/#guide", currentLang), label: t("nav.guide") },
    { href: isHome ? "#faq" : buildLocalizedPath("/#faq", currentLang), label: t("nav.faq") },
    { href: isHome ? "#launchers" : buildLocalizedPath("/#launchers", currentLang), label: t("nav.launchers") },
  ];

  const PAGE_LINKS = [
    { to: buildLocalizedPath("/privacy", currentLang), label: t("nav.privacy") },
    { to: buildLocalizedPath("/contact", currentLang), label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleLanguageChange = (code: LanguageCode) => {
    const newPath = buildLocalizedPath(cleanPath, code);
    setLangOpen(false);
    setMenuOpen(false);
    navigate(newPath + location.hash);
  };

  const currentLangInfo = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

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
        <Link
          to={buildLocalizedPath("/", currentLang)}
          className="flex items-center gap-2.5 group"
          onClick={closeMenu}
        >
          <div className="relative w-9 h-9 rounded-md bg-gradient-to-br from-grass-400 to-grass-600 flex items-center justify-center border border-grass-300/40 shadow-block-sm group-hover:scale-105 transition-transform">
            <div className="absolute inset-0 rounded-md sprite-grass opacity-30" />
            <Boxes className="relative w-5 h-5 text-cream-50" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-sm bg-ember-500 border border-grass-900" />
          </div>
          <div className="leading-tight">
            <span className="block font-pixel text-[10px] text-cream-50 tracking-tight">
              MRPack
            </span>
            <span className="block font-mono text-[10px] text-grass-300 -mt-0.5">
              to ZIP
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-md text-sm font-medium text-cream-200/70 hover:text-cream-50 hover:bg-grass-500/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
          {PAGE_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                cleanPath === stripLangFromPath(link.to) && cleanPath !== "/"
                  ? "text-cream-50 bg-grass-500/10"
                  : "text-cream-200/70 hover:text-cream-50 hover:bg-grass-500/10",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="btn-ghost text-sm"
              aria-expanded={langOpen}
              aria-label={t("a11y.selectLanguage")}
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{currentLangInfo.label}</span>
              <ChevronDown
                className={cn(
                  "w-3.5 h-3.5 transition-transform",
                  langOpen && "rotate-180",
                )}
              />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-36 glass rounded-lg border border-grass-500/20 p-1.5 animate-drop-bounce shadow-lg">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors",
                      currentLang === lang.code
                        ? "bg-grass-500/20 text-cream-50"
                        : "text-cream-200/70 hover:text-cream-50 hover:bg-grass-500/10",
                    )}
                  >
                    {lang.label}
                    <span className="text-xs font-mono opacity-50">
                      {lang.flag}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          className="md:hidden w-10 h-10 rounded-md flex items-center justify-center text-cream-100 hover:bg-grass-500/15"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={t("a11y.toggleMenu")}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

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
            {PAGE_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={cn(
                  "px-4 py-2.5 rounded-md text-sm font-medium transition-colors",
                  cleanPath === stripLangFromPath(link.to) && cleanPath !== "/"
                    ? "text-cream-50 bg-grass-500/10"
                    : "text-cream-200/80 hover:text-cream-50 hover:bg-grass-500/10",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-grass-500/15">
              <div className="flex gap-1">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={cn(
                      "flex-1 px-2 py-2 rounded-md text-xs font-medium transition-colors",
                      currentLang === lang.code
                        ? "bg-grass-500/20 text-cream-50"
                        : "text-cream-200/70 hover:text-cream-50 hover:bg-grass-500/10",
                    )}
                  >
                    {lang.flag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { useTranslation } from "react-i18next";
import Home from "@/pages/Home";
import { LANGUAGES } from "@/i18n";
import type { LanguageCode } from "@/i18n";
import { getLangFromPath, isValidLang, DEFAULT_LANG, stripLangFromPath, buildLocalizedPath } from "@/i18n/utils";

const Privacy = lazy(() => import("@/pages/Privacy"));
const Contact = lazy(() => import("@/pages/Contact"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-grass-950">
      <div className="w-8 h-8 sprite-grass rounded-sm animate-pulse" />
    </div>
  );
}

function LangSync() {
  const { lang } = useParams<{ lang?: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && isValidLang(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    } else if (!lang && i18n.language !== DEFAULT_LANG) {
      i18n.changeLanguage(DEFAULT_LANG);
    }
  }, [lang, i18n]);

  return null;
}

function RootLangSync() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const pathLang = getLangFromPath(location.pathname);
    if (i18n.language !== pathLang) {
      i18n.changeLanguage(pathLang);
    }
  }, [location.pathname, i18n]);

  return null;
}

function HreflangManager() {
  const location = useLocation();

  useEffect(() => {
    const cleanPath = stripLangFromPath(location.pathname);
    const baseUrl = "https://mrpacktozip.club";

    const existing = document.querySelectorAll('link[data-hreflang="true"]');
    existing.forEach((el) => el.remove());

    LANGUAGES.forEach((lang: { code: LanguageCode; label: string; flag: string }) => {
      const path = buildLocalizedPath(cleanPath, lang.code);
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lang.code;
      link.href = baseUrl + path;
      link.setAttribute("data-hreflang", "true");
      document.head.appendChild(link);
    });

    const xDefault = document.createElement("link");
    xDefault.rel = "alternate";
    xDefault.hreflang = "x-default";
    xDefault.href = baseUrl + buildLocalizedPath(cleanPath, DEFAULT_LANG);
    xDefault.setAttribute("data-hreflang", "true");
    document.head.appendChild(xDefault);
  }, [location.pathname]);

  return null;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/:lang">
        <Route index element={<><LangSync /><Home /></>} />
        <Route path="privacy" element={<><LangSync /><Privacy /></>} />
        <Route path="contact" element={<><LangSync /><Contact /></>} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <RootLangSync />
        <HreflangManager />
        <Suspense fallback={<PageLoader />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

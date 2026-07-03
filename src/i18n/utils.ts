import { LANGUAGES, type LanguageCode } from "./index";

export const DEFAULT_LANG: LanguageCode = "en";

export function isValidLang(code: string): code is LanguageCode {
  return LANGUAGES.some((l) => l.code === code);
}

export function getLangFromPath(pathname: string): LanguageCode {
  const firstSeg = pathname.split("/")[1];
  if (firstSeg && isValidLang(firstSeg)) {
    return firstSeg;
  }
  return DEFAULT_LANG;
}

export function stripLangFromPath(pathname: string): string {
  const parts = pathname.split("/");
  if (parts.length > 1 && isValidLang(parts[1])) {
    parts.splice(1, 1);
  }
  const result = parts.join("/") || "/";
  return result.startsWith("/") ? result : `/${result}`;
}

export function buildLocalizedPath(pathname: string, lang: LanguageCode): string {
  const cleanPath = stripLangFromPath(pathname);
  if (lang === DEFAULT_LANG) {
    return cleanPath;
  }
  return cleanPath === "/" ? `/${lang}` : `/${lang}${cleanPath}`;
}

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import zh from "./zh";
import ru from "./ru";
import de from "./de";
import fr from "./fr";
import es from "./es";

const resources = {
  en: { translation: en },
  zh: { translation: zh },
  ru: { translation: ru },
  de: { translation: de },
  fr: { translation: fr },
  es: { translation: es },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  defaultNS: "translation",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

export const LANGUAGES = [
  { code: "en", label: "English", flag: "EN" },
  { code: "de", label: "Deutsch", flag: "DE" },
  { code: "fr", label: "Français", flag: "FR" },
  { code: "ru", label: "Русский", flag: "RU" },
  { code: "es", label: "Español", flag: "ES" },
  { code: "zh", label: "中文", flag: "ZH" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

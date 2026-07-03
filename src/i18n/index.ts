import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import zh from "./zh";

const resources = {
  en: { translation: en },
  zh: { translation: zh },
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
  { code: "zh", label: "中文", flag: "ZH" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

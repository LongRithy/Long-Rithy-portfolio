import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import kh from "@/locales/kh.json";

const savedLang = localStorage.getItem("portfolio-lang") || "en";

const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: "en",
  messages: {
    en,
    km: kh
  }
});

export default i18n;
export function setLanguage(lang) {
  i18n.global.locale.value = lang;
  localStorage.setItem("portfolio-lang", lang);
}
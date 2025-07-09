import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import km from '../locales/km.json'

const savedLang = localStorage.getItem('portfolio-lang') || 'en'

export const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'en',
  messages: {
    en,
    km
  }
})

export function setLanguage(lang) {
  localStorage.setItem('portfolio-lang', lang)
  document.documentElement.lang = lang
  i18n.global.locale.value = lang
}
export function getLanguage() {
  return localStorage.getItem('portfolio-lang') || 'en'
}
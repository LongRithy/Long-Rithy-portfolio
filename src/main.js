import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Importing i18n and JSON files for translations 
import en from './locales/en.json'
import km from './locales/km.json'
import './assets/main.css'
import './assets/global.css'


import { createI18n } from 'vue-i18n'
const savedLang = localStorage.getItem('portfolio-lang') || 'en'
const i18n = createI18n({
  locales: savedLang,
  fallbackLocale: 'en',
  messages: {
    en,
    km
  }
})
createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')
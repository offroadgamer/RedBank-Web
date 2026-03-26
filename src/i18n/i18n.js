import { createI18n } from "vue-i18n";

const i18n = createI18n({
  local: 'en',
  fallbackLocale: 'en',
  messages,
  legacy: false,
})

export default i18n;
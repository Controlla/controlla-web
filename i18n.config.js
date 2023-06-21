import { en, es } from './i18n/locales'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, es }
}))
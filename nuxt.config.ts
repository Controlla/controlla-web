// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/image-edge",
    "@nuxtjs/i18n",
  ],
  i18n: {
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "es",
        file: "es.json",
      },
    ],
    langDir: "lang/",
    defaultLocale: "en",
  },
  runtimeConfig: {
    public: {
      iubenda_cookie_key: process.env.IUBENDA_COOKIE_KEY,
    },
  },
});

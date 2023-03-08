// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Controlla",
      meta: [
        {
          hid: "viewport",
          property: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          property: "description",
          name: "description",
          content:
            "Tech & software / We design , bulid and deploy beautiful apps and custom made software ! Drop me a line ! We will get back to yo ASAP",
        },
        { hid: "og:type", name: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          name: "og:url",
          content: "https://www.controlla.com.mx/",
        },
        {
          hid: "og:description",
          property: "og:description",
          name: "og:description",
          content:
            "Tech & software / We design , bulid and deploy beautiful apps and custom made software ! Drop me a line ! We will get back to yo ASAP",
        },
        {
          hid: "og:image",
          property: "og:image",
          name: "og:image",
          content: "https://www.controlla.com.mx/logocontrolla.webp",
        },
      ],
    },
  },
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
  build: {
    transpile: ["@typeform/embed"],
  },
  image: {
    provider: "netlify",
  },
});

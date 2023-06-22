import { overwriteSEO } from './seo'

export default defineNuxtConfig({
  app: {
    head: {
      title: overwriteSEO().title,
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        ...overwriteSEO().meta,
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        ...overwriteSEO().link,
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter&family=Poppins:ital,wght@0,300;0,400;0,600;0,700;0,800;1,500&display=swap'
        }
      ]
    }
  },
  components: [
    '~/components',
    '~/components/navbar',
    '~/components/image',
    '~/components/link',
    '~/components/home',
    '~/components/button',
    '~/components/containers',
    '~/components/avatar',
    '~/components/grid',
    '~/components/carrousel',
    '~/components/card',
    '~/components/footer',
    '~/components/banner',
    '~/components/friendshore',
    '~/components/team',
    '~/components/loaders'
  ],
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/motion/nuxt',
    '@vite-pwa/nuxt',
    '@pinia/nuxt',
    'nuxt-gtag',
  ],
  plugins: ['~/plugins/vue-awesome-swiper.client.ts'],
  router: {
    options: {
      linkExactActiveClass: 'route-link--active'
    }
  },
  pwa: {
    manifest: {
      name: 'Controlla connecting dots',
      short_name: 'Controlla',
      description:
        'We design and develop high-quality digital solutions with methodic strategy through trusted alliances',
      icons: [
        {
          src: '/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png'
        },
        {
          src: '/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          src: '/favicon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/favicon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: '/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png'
        },
        {
          src: '/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png'
        },
        {
          src: '/safari-pinned-tab.svg',
          color: '#5bbad5',
          rel: 'mask-icon'
        }
      ]
    },
    workbox: {
      navigateFallback: '/'
    }
  },
  i18n: {
    strategy: 'no_prefix',
    vueI18n: './i18n.config.js',
  },
  gtag: {
    id: 'G-VWSBXFK174',
  },
  experimental: {
    reactivityTransform: true
  },
  build: {
    transpile: ['swiper', '@typeform']
  }
})

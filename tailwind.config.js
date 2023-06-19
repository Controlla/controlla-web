import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '976px',
        xl: '1280px',
        '2xl': '1440px'
      },
      animationDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
        400: '400ms'
      },
      animation: {
        floating: 'floating 5s infinite'
      },
      colors: {
        primary: '#3D9CF0',
        secondary: '#7CC0FD',
        'secondary-light': '#F0F8FF',
        base: '#FAFAFA',
        'base-gray': '#F9FAFB',
        dark: '#051225'
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        inter: 'Inter, sans-serif'
      },
      backgroundImage: {
        // bckgrounds images
        header: "url('~/assets/images/header/desktop/banner.webp')",
        'header-mobile': "url('~/assets/images/header/mobile/banner.png')",
        footer: "url('~/assets/images/backgrounds/footer-bg.svg')",
        'footer-mobile':
          "url('~/assets/images/backgrounds/footer-bg-mobile.webp')",
        'banner-rounded-up':
          "url('~/assets/images/backgrounds/banner-rounded.webp')",
        // custom gradients
        'gradient-blue':
          'radial-gradient(circle, rgba(92,175,252,0.25) 0%, rgba(192,191,216,0.45) 50%, rgba(171,165,252,0.45) 100%)',
        'bg-gradient-text':
          'linear-gradient(91.4deg, #3C9BEF 13.63%, #84C5FE 99.9%)'
      },
      transitionProperty: {},
      keyframes: {
        floating: {
          from: {
            transform: 'translate(0%, 0%)'
          },
          '50%': {
            transform: 'translate(5%, 2%)'
          },
          to: {
            transform: 'translate(0%, 0%)'
          }
        }
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none'
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        },
        '.container-fluid': {
          width: '95%',
          margin: '0 auto',
          '@media (min-width: 480px)': {
            width: '95%'
          },
          '@media (min-width: 768px)': {
            width: '95%'
          },
          '@media (min-width: 976px)': {
            width: '940px'
          },
          '@media (min-width: 1280px)': {
            width: '1100px'
          },
          '@media (min-width: 1440px)': {
            width: '1300px'
          }
        },
        '.text-fill-transparent': {
          'text-fill-color': 'transparent'
        }
      })
    }),
    require('tailwindcss-animation-delay')
  ]
}

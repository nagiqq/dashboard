import { defineNuxtConfig } from 'nuxt'
import { IntlifyModuleOptions } from '@intlify/nuxt3'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
  }
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,

  // app
  app: {
    head: {
      title: 'Nuxt 3 Awesome Starter',
      titleTemplate: '%s - Nuxt 3 Awesome Starter',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3 Awesome Starter',
        },
      ],
      script: [],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'assets/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'assets/css/typography.css' },
        { rel: 'stylesheet', href: 'assets/css/style.css' },
        { rel: 'stylesheet', href: 'assets/css/responsive.css' },
        { rel: 'stylesheet', href: 'assets/css/remixicon.css' },
        { rel: 'stylesheet', href: 'assets/css/variable.css' },
        { rel: 'stylesheet', href: 'assets/css/line-awesome.min.css' },
        { rel: 'stylesheet', href: 'assets/css/Chart.min.css' },
        { rel: 'stylesheet', href: 'assets/css/table.css' },
        { rel: 'stylesheet', href: 'assets/css/variable.css' },
        { rel: 'stylesheet', href: 'assets/css/owl.carousel.min.css' },
        { rel: 'stylesheet', href: 'assets/css/dripicons.css' },
        { rel: 'stylesheet', href: 'assets/css/remixicon.css' },
        { rel: 'stylesheet', href: 'assets/css/fontawesome.css' },
        { rel: 'stylesheet', href: 'assets/css/line-awesome.min.css' },
        { rel: 'stylesheet', href: 'assets/css/ionicons.min.css' },
        { rel: 'stylesheet', href: 'assets/css/slick.css' },
        { rel: 'stylesheet', href: 'assets/css/slick-theme.css' },
        { rel: 'stylesheet', href: 'assets/css/Chart.min.css' },
        { rel: 'stylesheet', href: 'assets/css/select2.min.css' },
        { rel: 'stylesheet', href: 'assets/css/magnific-popup.css' },
        { rel: 'stylesheet', href: 'assets/css/animate.css' },
        { rel: 'stylesheet', href: 'assets/css/developer.css' },
        { rel: 'stylesheet', href: 'assets/css/Ecommerce.css' },
        { rel: 'stylesheet', href: 'assets/css/EcommerceResponsive.css' },
        { rel: 'stylesheet', href: 'assets/css/spacer.css' },
        { rel: 'stylesheet', href: 'assets/css/table.css' },
        { rel: 'stylesheet', href: 'assets/css/calender.css' },
        { rel: 'stylesheet', href: 'assets/css/fullcalendar/core/main.css' },
        { rel: 'stylesheet', href: 'assets/fullcalendar/list/main.css' },
        { rel: 'stylesheet', href: 'assets/fullcalendar/timegrid/main.css' },
        { rel: 'stylesheet', href: 'assets/fullcalendar/daygrid/main.css' },
        { rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css',
        },
      ],
    },
  },

  // css
  css: [
    // 'virtual:windi-base.css',
    // 'virtual:windi-components.css',
    // 'virtual:windi-utilities.css',
    // 'v-calendar/dist/style.css',
    // '~/assets/sass/vendor.scss',
    // '~/assets/sass/app.scss',
  ],

  // plugins
  plugins: ['~/plugins/navbar.ts'],

  // build
  build: {
    transpile: ['@headlessui/vue'],
  },

  // modules
  modules: [
    // 'nuxt-windicss',
    '@intlify/nuxt3',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@pinia/nuxt',
  ],

  // build modules
  buildModules: ['@nuxtjs/eslint-module', 'unplugin-icons/nuxt', '@nuxtjs/svg'],

  // experimental features
  experimental: {
    reactivityTransform: true,
  },

  // auto import components
  components: true,

  // vite plugins
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en', 'id', 'ja', 'ko'],
    },
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // windicss
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 4000,
        open: false,
      },
    },
    scan: true,
  },

  // content
  content: {},
})

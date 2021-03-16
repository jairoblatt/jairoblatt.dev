export default {
  target: 'static',

  ssr: true,

  head: {
    title: 'Jairo Blatt',
    lang: 'pt-br, en',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sapiente voluptates libero soluta vero labore ad suscipit dolorum?',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    '@/assets/scss/dark.scss',
    '@/assets/scss/main.scss',
    '@/assets/scss/content.scss',
    '@/assets/scss/rlt.scss',
  ],

  plugins: [
    {
      src: '@/plugins/v-clipboard.js',
      mode: 'client',
    },
  ],

  i18n: {
    strategy: 'no_prefix',

    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.js',
        name: 'English',
        domain: 'https://en.jairoblatt.dev',
      },

      {
        code: 'pt',
        iso: 'pt-BR',
        file: 'pt-BR.js',
        name: 'Português',
        domain: 'https://jairoblatt.dev',
      },
    ],

    vueI18n: {
      fallbackLocale: 'pt',
    },

    defaultLocale: 'pt',
    parsePages: false,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'language',
      onlyOnRoot: true,
    },
    seo: false,
    lazy: true,
    langDir: 'lang/',
  },

  publicRuntimeConfig: {},

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],

  pageTransition: {
    name: 'home',
    mode: '',
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-duotone-sea.css',
      },
    },
  },

  modules: ['@nuxtjs/pwa', '@nuxt/content', 'nuxt-i18n'],

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {},
};

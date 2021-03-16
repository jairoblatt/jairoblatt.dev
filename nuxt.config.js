export default {
  target: 'static',

  ssr: true,

  head: {
    title: 'Jairo Blatt',
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
      src: '@/plugins/vue-disqus.js',
      mode: 'client',
    },
  ],

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

  modules: ['@nuxtjs/pwa', '@nuxt/content'],

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {},
};

import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@formkit/nuxt'],
  css: [
    '~/assets/styles/tailwind.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-regular-svg-icons',
    ]
  }
})

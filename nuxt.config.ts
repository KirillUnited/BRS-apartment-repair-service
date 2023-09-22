// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: true },
  head: {
  },
  css: [
    "vuetify/styles",
      "@/assets/styles/main.scss"
  ],
  build: {
    transpile: ["vuetify"]
  },
  modules: [
    '@nuxt/image-edge',
  ],
  image: {
    dir: 'assets/images',
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
    },
  },
  vite: {
    define: {
      "process.env.DEBUG": false
    }
  },
})

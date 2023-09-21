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
  vite: {
    define: {
      "process.env.DEBUG": false
    }
  },
})

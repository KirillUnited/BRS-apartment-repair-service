// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    srcDir: 'src/',
    devtools: {enabled: true},
    head: {
        
    },
    css: [
        "@mdi/font/css/materialdesignicons.css",
        "vuetify/styles",
        "@/assets/styles/main.scss"
    ],
    build: {
        transpile: ["vuetify"]
    },
    modules: [
        '@nuxt/image',
    ],
    image: {
        dir: 'assets/images',
        format: ["avif", "webp"],
    },
    vite: {
        define: {
            "process.env.DEBUG": false
        }
    },
})

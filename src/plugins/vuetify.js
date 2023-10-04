import {defineNuxtPlugin} from "nuxt/app";
import {createVuetify} from "vuetify";
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        theme: {
            themes: {
                light: {
                    colors: {
                        primary: "#FFC771",
                        secondary: "#593F0D",
                    }
                },
            },
        },
    });

    nuxtApp.vueApp.use(vuetify)
})

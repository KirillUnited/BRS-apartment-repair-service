<template>
    <v-img
            :src="cover"
            :lazy-src="cover"
            aspect-ratio="1.6"
            cover=""
            class="text-center cover"
            gradient="359deg, #1A1A1A 1.21%, rgba(26, 26, 26, 0.40) 99.86%"
            :alt="data.title"
    >
        <div class="cover-content fill-height d-flex flex-column">
            <div class="mt-auto">
                <h3 class="text-white cover-title font-weight-light text-truncate">
                    {{data.title}}</h3>
                <p class="cover-subtitle text-primary font-weight-bold text-truncate">
                    {{data.subtitle}}</p>
            </div>
            <a href="#" class="text-shades-white cover-link mt-auto">Подробнее</a>
        </div>
        <template v-slot:placeholder>
            <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
            >
                <v-progress-circular
                        indeterminate
                        color="grey-lighten-5"
                ></v-progress-circular>
            </v-row>
        </template>
    </v-img>

</template>

<script>
    import {useImage} from "../../.nuxt/imports";

    export default {
        name: "GalleryItem",
        props: {
            data: {
                type: Object,
                defaultValue: {}
            }
        },
        setup(props) {
            const img = useImage();
            const src = props.data?.cover;
            const cover = img(src, {quality: 50});

            return {
                cover
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cover {
        &-title,
        &-subtitle {
            font-size: 2rem;
        }

        &-link {
            font-size: 1.25rem;
        }

        &-content {
            padding: 2.5rem 1rem;
        }
    }
</style>

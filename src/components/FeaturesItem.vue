<template>
    <v-card
            elevation="5"
            height="100%"
    >
        <v-banner height="100%">
            <template v-slot:prepend>
                <v-avatar v-if="item.image"
                        color="primary"
                        size="120"
                >
                    <v-img
                            cover
                            :src="image"
                    :lazy-src="image"></v-img>
                </v-avatar>
            </template>
            <v-banner-text class="text-secondary pr-0">
                <h3 class="title font-weight-bold mb-2">{{item.title}}</h3>
                <p class="description">
                    {{item.description}}
                </p>
            </v-banner-text>
        </v-banner>
    </v-card>

</template>

<script>
    import {useImage} from "../../.nuxt/imports";

    export default {
        name: "FeaturesItem",
        props: {
            item: Object
        },
        setup(props) {
            const img = useImage();
            const src = props.item?.image;
            const image = img(src, {quality: 90});

            return {
                image
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/utilities";

    .title {
        font-size: getMinMax(24px, 24px);
    }

    .description {
        font-size: getMinMax(20px, 20px);
    }
    @include less-xs(){
        .v-banner {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            text-align: center;
            &>:first-child {
                margin-inline-end: 0;
                align-self: center;
            }
        }
    }
</style>

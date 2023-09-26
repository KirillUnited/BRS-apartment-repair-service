<template>
    <section class="section">
        <v-container class="text-center heading">
            <h2 class="text-title title text-secondary" v-html="title"></h2>
            <h3 class="text-subtitle subtitle text-secondary" v-html="subtitle"></h3>
        </v-container>
        <v-container class="content">
            <v-row>
                <v-col
                        v-for="item in gallery"
                        :key="item"
                        class="d-flex child-flex"
                        cols="12"
                        sm="6"
                >
                    <GalleryItem :data="item"/>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="d-flex justify-center actions">
            <Button text="получить консультацию" size="x-large"/>
            <div class="actions-bg" :style="backgroundStyles"></div>
        </v-container>
    </section>
</template>

<script>
    import Button from "./Button";
    import GalleryItem from "./GalleryItem";
    import {computed, useImage} from "../../.nuxt/imports";

    export default {
        name: "Gallery",
        components: {GalleryItem, Button},
        data: () => ({
            title: "С <span class='text-primary font-weight-bold'>2015 года</span> отремонтировали </br>" +
                "<span class='text-primary font-weight-bold'>более 160 объектов</span>",
            subtitle: "От небольших студий до ресторанов на высоте 100 метров",
            gallery: [
                {
                    title: "Ресторан Ямал",
                    subtitle: "300 м2",
                    cover: "/gallery.png"
                },
                {
                    title: "Дизайн интерьера, ремонт жилой и коммерческой недвижимости под ключ в Минске",
                    subtitle: "60 м2",
                    cover: "/service-1.png"
                },
                {
                    title: "Ремонт  с нами - выгодно",
                    subtitle: "120 м2",
                    cover: "/service-2.png"
                },
                {
                    title: "Ресторан Ямал",
                    subtitle: "300 м2",
                    cover: "/service-3.png"
                },
            ]
        }),
        setup(props) {
            const img = useImage();
            const src = '/Paint-Cans-and-Brushes.png';
            const backgroundStyles = computed(() => {
                const imgUrl = img(src, {width: 200, height: 200})
                return {backgroundImage: `url(\'${imgUrl}\')`}
            });

            return {
                backgroundStyles
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/utilities";

    .section {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    .heading {
        padding-bottom: 2.5rem;
    }

    .title {
        margin-bottom: 0.5rem;
    }

    .actions {
        position: relative;
        padding-top: 40px;

        &-bg {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(0, -50%);
            width: getMinMax(100px, 300px);
            height: getMinMax(100px, 300px);
            background-position: center bottom 10px;
            background-repeat: no-repeat;
            background-size: 110%;
            z-index: 10;
        }
    }
</style>

<template>
    <NuxtLayout id="gallery" name="section">
        <template #title>
            С <span class='text-primary font-weight-bold'>2015 года</span> отремонтировали <span
                class='text-primary font-weight-bold'>более 160 объектов</span>
        </template>
        <template #subtitle>
            От небольших студий до ресторанов на высоте 100 метров
        </template>
        <template #content>
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
        </template>
        <template #actions>
            <div class="actions-bg" :style="backgroundStyles"></div>
        </template>
    </NuxtLayout>
</template>

<script>
    import Button from "./Button";
    import GalleryItem from "./GalleryItem";

    export default {
        name: "Gallery",
        components: {GalleryItem, Button},
        data: () => ({
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

    .actions {
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

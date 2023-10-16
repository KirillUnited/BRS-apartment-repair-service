<template>
    <NuxtLayout id="brands" name="section" :style="sectionBackgroundStyles">
        <template #title>
            Используем только лучшие метериалы от <span class="text-primary font-weight-bold">80+</span> Мировых
            производителей
        </template>
        <template #subtitle>
            Некоторые из них:
        </template>
        <template #content>
            <div class="d-flex justify-center">
                <v-img
                        :src="image"
                        :lazy-src="image"
                        max-width="900"
                ></v-img>
            </div>
        </template>
        <template #actions>
            <div class="actions-bg" :style="backgroundStyles"></div>
        </template>
    </NuxtLayout>
</template>

<script>
    export default {
        name: "Brands",
        setup(props) {
            const img = useImage();
            const src = '/Brands.png';
            const actionsBg = '/Paint-Bucket.png';
            const sectionBg = '/Wheelbarrow.png';
            const image = img(src, {
                format: 'webp',
                quality: 90,
                width: 900,
                height: 490
            });
            const backgroundStyles = computed(() => {
                const imgUrl = img(actionsBg, {width: 200, height: 200})
                return {backgroundImage: `url(\'${imgUrl}\')`}
            });
            const sectionBackgroundStyles = computed(() => {
                const imgUrl = img(sectionBg, {quality: 100})
                return {
                    backgroundImage: `url(\'${imgUrl}\')`,
                    backgroundPosition: 'left bottom -70px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '300px'
                }
            });

            return {
                image,
                backgroundStyles,
                sectionBackgroundStyles
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/utilities";

    .section {
        position: relative;
    }

    .actions {
        &-bg {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(0, -50%);
            width: getMinMax(100px, 200px);
            height: getMinMax(100px, 200px);
            background-position: center;
            background-repeat: no-repeat;
            background-size: 110%;
            z-index: 10;
        }
    }
</style>

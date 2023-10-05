<template>
    <NuxtLayout id="calc" name="section">
        <template #title>
            Рассчитайте стоимость ремонта <span class="text-primary font-weight-bold">за 1 минуту</span> с точностью 99%
        </template>
        <template #content>
        </template>
        <template #actions>
            <Button text="РАССЧИТАТЬ ТОЧНУЮ СТОИМОСТЬ" size="x-large"/>
            <div class="actions-bg" :style="backgroundStyles"></div>
        </template>
    </NuxtLayout>
</template>

<script>
    import {computed, useImage} from "../../.nuxt/imports";

    export default {
        name: "Calculator",
        setup(props) {
            const img = useImage();
            const src = '/calc-section-bg.png';
            const backgroundStyles = computed(() => {
                const imgUrl = img(src, {width: 400, height: 300, quality: 100})
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
            width: getMinMax(100px, 400px);
            height: getMinMax(100px, 300px);
            background-position: bottom;
            background-repeat: no-repeat;
            background-size: 100%;
            z-index: 10;
        }
    }
</style>

<template>
    <section class="section">
        <v-img
                :src="img(src, { height, quality: 100 })"
                :srcset="_srcset.srcset"
                cover=""
                max-height="650"
                class="align-center"
                :lazy-src="img(src, { width: 100, quality: 70 })"
        >
            <v-container>
                <div class="content">
                    <h1 class="text-title title text-secondary" v-html="title"></h1>
                    <h2 class="text-subtitle subtitle text-secondary" v-html="subtitle"></h2>
                    <Button href="/#callSection" text="Рассчитать стоимость ремонта" size="x-large" :image="SmetaImage"></Button>
                </div>
            </v-container>
            <svg class="arc arc-bottom d-none d-md-flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 67" fill="none">
                <path d="M0 0C0 0 431.075 40.1343 708.021 40C982.612 39.8669 1410 0 1410 0V67H0V0Z" fill="white"/>
            </svg>
        </v-img>
    </section>
</template>

<script>
    import Button from "./Button";
    import SmetaImage from "../assets/images/smeta.png";

    export default {
        name: "Hero",
        components: {Button},
        data: () => ({
            SmetaImage: SmetaImage,
            title: 'Дизайн интерьера, ремонт\n' +
                '                        жилой и коммерческой\n' +
                '                        недвижимости <span\n' +
                '                                class="text-primary font-weight-bold">под ключ в\n' +
                '                Минске</span>',
            subtitle: 'Выполним ремонт точно в срок с гарантией по договору'
        }),
    }
</script>
<script setup>
    const props = defineProps({
        height: {type: [Number, String], default: 650},
        src: {
            type: String,
            default: '/hero.png'
        }
    });
    const img = useImage();
    const _srcset = computed(() => {
        return img.getSizes(props.src, {
            sizes: 'xs:320px sm:768px md:1200px lg:1440',
            modifiers: {
                format: 'webp',
                quality: 80,
                height: props.height
            }
        })
    });
</script>
<style lang="scss" scoped>
    .v-img {
        position: relative;

        &:after {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: '';
            background: linear-gradient(90deg, #FFF 20%, rgba(255, 255, 255, 0.00) 86.67%);
            z-index: 1;
        }
    }

    .content {
        position: relative;
        max-width: 650px;
        z-index: 10;

        .btn {
            position: relative;
            margin-top: 2.5rem;

            &:after {
                position: absolute;
                content: '';
                top: 0;
                right: 0;
                width: 100px;
                height: 100px;
                left: auto;
                background-image: url("../assets/images/smeta.png");
                background-size: 100%;
                border: none;
                opacity: 1;
                transform: translate(60%, -30%);
                z-index: 1;
            }
        }
    }

    .title {
        margin-bottom: 1.5rem;

        &:after {
            display: block;
            content: '';
            width: 100px;
            height: 3px;
            background-color: #FFC771;
            margin-top: 1.5rem;
        }
    }

    .subtitle {
        max-width: 400px;
    }
</style>

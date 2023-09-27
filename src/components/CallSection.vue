<template>
    <section class="section">
        <v-img
                :src="image"
                :srcset="imageSrcset.srcset"
                cover=""
                min-height="600"
                :lazy-src="image"
        >
            <svg class="arc arc-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 50" fill="none">
                <path d="M1405 50C1405 50 973.925 9.86575 696.979 10C422.388 10.1331 -5.00012 50 -5.00012 50V-17L1405 -17V50Z"
                      fill="white"/>
            </svg>
            <v-container>
                <v-row>
                    <v-col>
                        <div class="content text-secondary flex-1-1">
                            <h2 class="title font-weight-bold">
                                Закажите замер, а также предварительную оценку объекта <span
                                    class="text-primary">БЕСПЛАТНО</span>
                            </h2>
                            <div class="description">
                                <p class="mb-2">На бесплатном выезде инженер-замерщик:</p>
                                <ul>
                                    <li>Сделает точный замер</li>
                                    <li>Сориентирует по срокам</li>
                                    <li>Поможет определиться с видом ремонта</li>
                                </ul>
                            </div>
                        </div>
                    </v-col>
                    <v-col
                            cols="12"
                            sm="6"
                            lg="5"
                    >
                        <Call/>
                    </v-col>
                </v-row>
                <v-img
                        class="decor d-none d-md-flex"
                        :src="decor"
                        cover=""
                ></v-img>
            </v-container>
            <svg class="arc arc-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 137" fill="none">
                <path d="M-5 0C-5 0 423.053 62.2745 700 62C974.591 61.7278 1405 0 1405 0V137H-5V0Z" fill="white"/>
            </svg>
        </v-img>
    </section>
</template>

<script>
    import {computed, useImage} from "../../.nuxt/imports";
    import Call from "./Call";
    import decor from "../assets/images/Surveyor.png";

    export default {
        name: "CallSection",
        components: {Call},
        data: () => ({
            decor: decor
        }),
        setup(props) {
            const img = useImage();
            const src = '/call-bg.png';
            const image = img(src, {quality: 100});
            const imageSrcset = computed(() => {
                return img.getSizes(src, {
                    sizes: 'xs:320px sm:768px md:1200px lg:1440',
                    modifiers: {
                        format: 'webp',
                        quality: 90,
                    }
                })
            });
            return {
                image,
                imageSrcset
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/utilities";

    .v-container {
        height: 100%;
        position: relative;
        max-width: 1000px;
        padding-top: 80px;
        padding-bottom: 140px;
    }

    .content {
        max-width: 400px;
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .title {
        font-size: getMinMax(30px, 30px);
        margin-bottom: 0.75em;
    }

    .description {
        font-size: getMinMax(20px, 20px);

        & > ul {
            padding-left: 1em;
        }
    }

    .v-img {
        position: relative;
    }

    .arc {
        position: absolute;
        left: 0;
        width: 100%;

        &-top {
            top: 0;
        }

        &-bottom {
            bottom: 0;
        }
    }

    .decor {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 300px;
        height: 300px;
        z-index: 10;
    }
</style>

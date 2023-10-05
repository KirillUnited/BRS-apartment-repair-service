<template>
    <section id="callSection" class="section">
        <v-img
                class="section-bg"
                :src="image"
                :srcset="imageSrcset.srcset"
                cover=""
                :lazy-src="image"
        >
            <svg class="arc arc-top d-none d-md-flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 50"
                 fill="none">
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
                            md="5"
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
            <svg class="arc arc-bottom d-none d-md-flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 137"
                 fill="none">
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
            const image = img(src, {quality: 100, width: 1400, height: 900});
            const imageSrcset = computed(() => {
                return img.getSizes(src, {
                    sizes: 'xs:320px sm:768px md:1200px lg:1440',
                    modifiers: {
                        format: 'webp',
                        quality: 90,
                        width: 1400,
                        height: 900
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
        padding-top: getMinMax(24px, 80px);
        padding-bottom: getMinMax(24px, 140px);
    }

    .content {
        max-width: 400px;
        padding-top: getMinMax(1px, 40px);
        padding-bottom: getMinMax(1px, 40px);
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
        max-height: 900px;

        &:after {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: "";
            background: linear-gradient(180deg, #FFF 20%, rgba(255, 255, 255, 0) 86.67%);
            z-index: -1;
        }
    }

    .decor {
        position: absolute;
        left: 0;
        bottom: 0;
        width: getMinMax(100px, 300px);
        height: getMinMax(100px, 300px);
        z-index: 10;
    }

    @include less-md() {
        .v-img {
            &:after {
                display: block;
            }
        }
    }
</style>

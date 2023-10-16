<template>
    <NuxtLayout id="testimonials" name="section">
        <template #title>
            Отзывы наших клиентов
        </template>

        <template #content>
            <swiper
                    class="swiper"
                    :modules="modules"
                    :slides-per-view="1"
                    :space-between="70"
                    :navigation="{ clickable: true }"
                    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
                    pagination
            >
                <swiper-slide>
                    <v-card
                            elevation="5"
                    >
                        <v-banner
                                avatar="https://cdn.vuetifyjs.com/images/john-smirk.png"
                        >
                            <v-banner-text>
                                Banner with three lines of text. One or two lines is preferable. Three lines should be
                                considered the absolute maximum length on desktop in order to keep messages short and
                                actionable.
                            </v-banner-text>
                        </v-banner>
                    </v-card>
                </swiper-slide>
                <swiper-slide>
                    <v-card
                            elevation="5"
                    >
                        <v-banner
                                avatar="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
                        >
                            <v-banner-text>
                                ui-avatars.com is a service that you can use to get placeholder profile pictures. This
                                service is slightly different to the other services, because it returns the initials of
                                the user rather than a picture of a human, character or object.

                                If you’re using Laravel Jetstream in your projects, you’ll might have already come
                                across this. It uses this service to fetch a default profile picture if a user hasn’t
                                already uploaded one. You can check the code where it’s used
                            </v-banner-text>
                        </v-banner>
                    </v-card>
                </swiper-slide>
                <swiper-slide>
                    <v-card
                            elevation="5"
                    >
                        <v-banner
                                avatar="https://actomrussia.ru/images/2020/11/16/2816616767.jpg"
                        >
                            <v-banner-text>
                                If you’re using Laravel Jetstream in your projects, you’ll might have already come
                                across this. It uses this service to fetch a default profile picture if a user hasn’t
                                already uploaded one. You can check the code where it’s used
                            </v-banner-text>
                        </v-banner>
                    </v-card>
                </swiper-slide>
            </swiper>
        </template>
    </NuxtLayout>
</template>

<script>
    import {Swiper, SwiperSlide} from 'swiper/vue';
    import {Navigation, Pagination, A11y, Autoplay} from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/autoplay';
    import 'swiper/css/pagination';

    export default {
        name: "Testimonials",
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            return {
                modules: [Navigation, A11y, Autoplay, Pagination],
            };
        },
    }
</script>

<style lang="scss" scoped>
    .swiper {
        --swiper-navigation-color: var(--color-secondary);
        --swiper-pagination-color: var(--color-secondary);
        max-width: 840px;
        padding: 12px 52px;
    }

    .swiper-slide {
        height: auto;
    }

    .v-card {
        height: 100%;
    }

    .v-banner {
        width: auto;
        border-bottom: none;

        &-text {
            padding-right: 8px;
        }
    }
</style>

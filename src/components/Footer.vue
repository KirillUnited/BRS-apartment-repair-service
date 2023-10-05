<template>
    <v-footer id="contacts" class="footer-top text-secondary bg-primary">
        <v-container>
            <v-row justify="center">
                <v-col
                        cols="12"
                        lg="1"
                >
                    <Logo/>
                </v-col>
                <v-col
                        cols="12"
                        lg="3"
                >
                    <div class="contacts d-flex flex-column">
                        <p class="contacts-title font-weight-bold text-secondary">Контактная информация</p>

                        <a href="mail:info@stroy.ru" class="d-flex text-truncate text-secondary text-decoration-none">
                            <v-icon icon="mdi-email" class="mr-2"></v-icon>
                            <span>info@stroy.ru</span>
                        </a>

                        <a href="tel:+7 (999) 999-99-11"
                           class="d-flex text-truncate text-secondary text-decoration-none mr-2">
                            <v-icon icon="mdi-phone"></v-icon>
                            +7 (999) 999-99-11
                        </a>

                        <strong >График работы</strong>
                        <p>с 8:00 до 22:00</p>
                    </div>
                </v-col>

                <v-col
                        cols="12"
                        lg="3"
                >
                    <Socials :items="socials" :title="true">
                        <template v-slot:text>
                            <span class="socials-text text-secondary text-center font-weight-bold contacts-title">Мы в соцсетях</span>
                        </template>
                    </Socials>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
    <v-footer class="footer-bottom">

        <v-container>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>Belremstroy</strong>
            </v-col>
        </v-container>
    </v-footer>
</template>

<script>
    import Socials from "./Socials";
    import insta from "../assets/icons/insta.svg";
    import youtube from "../assets/icons/youtube.svg";
    import phone from "../assets/icons/phone.svg";
    import telegram from "../assets/icons/telegram.svg";
    import Logo from "./Logo";

    export default {
        name: "Footer",
        components: {Logo, Socials},
        data: () => ({
            socials: [
                {
                    icon: insta,
                    name: "Instagram"
                },
                {
                    icon: youtube,
                    name: "youtube"
                },
                {
                    icon: phone,
                    name: "phone"
                },
                {
                    icon: telegram,
                    name: "telegram"
                },
            ]
        }),
    }
</script>

<style lang="scss" scoped>
    .footer-top {
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .footer-bottom{
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
    }

    .contacts {
        gap: 0.75rem;

        &-title {
            font-size: 1.5rem;
        }
    }

    .socials {
        flex-direction: column;
    }
</style>

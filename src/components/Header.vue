<template>
    <v-app-bar scroll-behavior="hide" flat="" height="80">
        <v-container class="d-flex justify-space-between align-center">
            <div class="logo d-flex align-center">
                <NuxtLink to="/" class="d-flex">
                    <img src="@/static/logo.svg" width="48" height="39"
                         alt="Ремонт жилой и коммерческой нежвижимости в Минске"/>
                </NuxtLink>
                <span class="logo-text text-secondary d-none d-md-flex">Ремонт жилой и коммерческой<br/> нежвижимости в Минске</span>
            </div>
            <v-spacer></v-spacer>
            <Socials :items="socials">
                <template v-slot:text>
                    <span class="socials-text text-secondary text-center d-none d-lg-flex">Связаться с нами<br/> через месседжеры</span>
                </template>
            </Socials>
            <v-spacer></v-spacer>
            <div class="d-flex align-center">
                <div class="contacts d-flex flex-column text-right mr-5">
                    <a href="tel:+7 (999) 900-90-90"
                       class="contacts-link text-secondary font-weight-bold text-decoration-none text-truncate">+7
                        (999)
                        900-90-90</a>
                    <span class="contacts-text contacts-timeline text-secondary">Ежедневно с 10:00 до 22:00</span>
                </div>
                <Modal cta-btn-title="ЗАКАЗАТЬ ЗВОНОК" cta-btn-size="large"></Modal>
            </div>
        </v-container>
    </v-app-bar>
</template>

<script>
    import Button from "./Button";
    import insta from "../assets/icons/insta.svg";
    import youtube from "../assets/icons/youtube.svg";
    import phone from "../assets/icons/phone.svg";
    import telegram from "../assets/icons/telegram.svg";
    import Socials from "./Socials";
    import Modal from "./Modal";

    export default {
        name: "Header",
        components: {Modal, Socials, Button},
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
    .logo {
        gap: 0.5rem;

        &-text {
            font-size: 0.75rem;
            line-height: normal;
        }
    }

    .contacts {
        &-link {
            font-size: 1.2rem;
        }

        &-text {
            font-size: 0.75rem;
        }

        &-timeline {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            &:before {
                display: block;
                content: '';
                width: 10px;
                height: 10px;
                background-color: #22C74E;
                border-radius: 50%;
            }
        }
    }

    .socials-text {
        font-size: 0.9rem;
        line-height: normal;
    }
</style>

<template>
    <v-container class="d-flex justify-space-between align-center">
        <div class="logo d-flex align-center">
            <NuxtLink to="/" class="d-flex">
                <img src="@/static/logo.svg" width="48" height="39"
                     alt="Ремонт жилой и коммерческой нежвижимости в Минске"/>
            </NuxtLink>
            <span class="logo-text text-secondary">Ремонт жилой и коммерческой<br/> нежвижимости в Минске</span>
        </div>
        <v-spacer></v-spacer>
        <div class="socials d-flex flex-wrap align-center justify-center">
            <span class="text-secondary text-center">Связаться с нами<br/> через месседжеры</span>
            <ul class="socials-list">
                <li v-for="social in socials" class="socials-list-item" :key="social">
                    <NuxtLink to="https://www.google.com" class="d-flex align-center justify-center">
                        <img :src="social.icon" class="socials-icon" width="24" height="24"
                             :alt="social.name"/>
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex align-center">
            <div class="contacts d-flex flex-column text-right mr-5">
                <a href="tel:+7 (999) 900-90-90"
                   class="contacts-link text-secondary font-weight-bold text-decoration-none">+7
                    (999)
                    900-90-90</a>
                <span class="contacts-text contacts-timeline text-secondary">Ежедневно с 10:00 до 22:00</span>
            </div>
            <Button text="ЗАКАЗАТЬ ЗВОНОК"></Button>
        </div>
    </v-container>
</template>

<script>
    import Button from "./Button";
    import insta from "../assets/icons/insta.svg";
    import youtube from "../assets/icons/youtube.svg";
    import phone from "../assets/icons/phone.svg";
    import telegram from "../assets/icons/telegram.svg";

    export default {
        name: "Header",
        components: {Button},
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
        }
    }

    .socials {
        gap: 1rem;

        &-list {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 0.5rem;

            &-item {
                max-width: 2rem;
                max-height: 2rem;
            }
        }

        &-icon {
            max-width: 100%;
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
</style>

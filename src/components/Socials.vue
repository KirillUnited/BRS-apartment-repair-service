<template>
    <div class="socials d-flex flex-wrap align-center justify-center">
        <slot name="text" v-if="title">
            <span class="socials-text text-secondary text-center">Связаться с нами<br/> через месседжеры</span>
        </slot>
        <ul class="socials-list">
            <li v-for="item in items" class="socials-list-item" :key="item">
                <NuxtLink to="https://www.google.com" class="d-flex align-center justify-center">
                    <img :src="item.icon" class="socials-icon" width="24" height="24"
                         :alt="item.name"/>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
    import insta from "../assets/icons/insta.svg";
    import youtube from "../assets/icons/youtube.svg";
    import phone from "../assets/icons/phone.svg";
    import telegram from "../assets/icons/telegram.svg";

    export default {
        name: "Socials",
        props: {
            title: Boolean,
            items: {
                type: Array,
                default: [
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .socials {
        gap: 1rem;

        &-text {
            font-size: 0.9rem;
            line-height: normal;
        }

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
</style>

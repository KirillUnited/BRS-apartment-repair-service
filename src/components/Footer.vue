<template>
    <v-footer>
        <v-container>
            <v-row justify="center" no-gutters>
                <Socials :items="socials" :title="true">
                    <template v-slot:text>
                        <span class="socials-text text-secondary text-center d-none d-lg-flex">Связаться с нами<br/> через месседжеры</span>
                    </template>
                </Socials>
                <v-col class="text-center mt-4" cols="12">
                    {{ new Date().getFullYear() }} — <strong>Belremstroy</strong>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
    import Socials from "./Socials";
    import insta from "../assets/icons/insta.svg";
    import youtube from "../assets/icons/youtube.svg";
    import phone from "../assets/icons/phone.svg";
    import telegram from "../assets/icons/telegram.svg";

    export default {
        name: "Footer",
        components: {Socials},
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

<style scoped>

</style>

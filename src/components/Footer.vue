<template>
    <v-footer id="contacts" class="footer-top text-secondary bg-primary">
        <v-container>
            <v-row justify="center">
                <v-col
                        cols="12"
                        lg="3"
                        class="d-flex flex-column align-center text-center"
                >
                    <Logo>
                        Ремонт жилой и коммерческой нежвижимости в Минске
                    </Logo>
                </v-col>
                <v-col
                        cols="12"
                        lg="3"
                        class="d-flex flex-column align-center text-center"
                >
                    <div class="info d-flex flex-column">
                        <p class="info-title font-weight-bold text-secondary">Контактная информация</p>
                        <Contacts tel="+7 (999) 900-90-90" email="info@stroy.ru"/>
                    </div>
                </v-col>
                <v-col
                        cols="12"
                        lg="3"
                        class="d-flex flex-column align-center text-center"
                >
                    <Socials :items="socials" :title="true">
                        <template v-slot:text>
                            <span class="socials-text text-secondary text-center font-weight-bold info-title">Мы в соцсетях</span>
                        </template>
                    </Socials>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
    <v-footer class="footer-bottom">
        <v-container>
            <v-col class="text-secondary text-center mt-4" cols="12">
                <a href="#" class="text-secondary">Политика обработки персональных данных</a>
                <p>УНП 123456789 Свидетельство регистрации в реестре бытовых услуг от 01.01.2023</p>
                {{ new Date().getFullYear() }} — <strong>Belremstroy</strong>
            </v-col>
        </v-container>
    </v-footer>
</template>

<script>
    import Socials from "./Socials";
    import Logo from "./Logo";
    import Contacts from "./Contacts";
    import Navbar from "./Navbar";

    export default {
        name: "Footer",
        components: {Navbar, Contacts, Logo, Socials},
        data: () => ({}),
    }
</script>

<style lang="scss" scoped>
    .footer-top {
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .footer-bottom {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
    }

    .info {
        gap: 0.75rem;
        align-items: center;

        &-title {
            font-size: 1.15rem;
        }
    }

    .socials {
        flex-direction: column;
    }
</style>

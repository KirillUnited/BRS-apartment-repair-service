<template>
    <v-container class="d-flex justify-space-between align-center">
        <div class="logo d-flex align-center">
            <img src="@/static/logo.svg" width="48" height="39"
                 alt="Ремонт жилой и коммерческой нежвижимости в Минске"/>
            <span class="logo-text text-secondary">Ремонт жилой и коммерческой<br/> нежвижимости в Минске</span>
        </div>
        <v-spacer></v-spacer>
        <span class="text-secondary text-center">Связаться с нами<br/> через месседжеры</span>
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

    export default {
        name: "Header",
        components: {Button}
    }
</script>

<style lang="scss" scoped>
    .logo {
        gap: 0.5rem;

        &-text {
            font-size: 0.75rem;
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

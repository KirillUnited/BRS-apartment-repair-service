<template>
    <NuxtLayout id="services" name="section">
        <template #title>
            Предлагаем самые <span class="text-primary font-weight-bold">выгодные<br/>
        решения</span> для наших клиентов
        </template>
        <template #subtitle>
            Выберите тариф, который вам подходит
        </template>
        <template #content>
            <v-row class="justify-center">
                <v-col
                        v-for="item in services"
                        :key="item"
                        class=""
                        cols="12"
                        sm="6"
                        md="3"
                >
                    <ServicesItem :item="item"/>
                </v-col>
            </v-row>
        </template>
        <template #actions>
            <a href="#" class="text-subtitle text-secondary text-center">Индивидуальный проект узнать подробнее</a>
        </template>
    </NuxtLayout>
</template>

<script>
    import ServicesItem from "./ServicesItem";

    export default {
        name: "Services",
        components: {ServicesItem},
        data: () => ({
            services: [
                {
                    title: "<span class='font-weight-bold'>Тариф «Эконом»</span><br/>" +
                        "от 4000 ₽/м²",
                    services: [
                        "Стены и обои",
                        "Пол: Ламинат или кварцвинил",
                        "Сан. узел - плитка"
                    ],
                    image: "/service-1.png"
                },
                {
                    title: "<span class='font-weight-bold'>Тариф «Комфорт»</span><br/>" +
                        "от 6000 ₽/м²",
                    services: [
                        "Стены и обои или покраска",
                        "Пол: Ламинат или кварцвинил",
                        "Сан. узел - плитка",
                        "Сантехника и электрика"
                    ],
                    image: "/service-2.png"
                },
                {
                    title: "<span class='font-weight-bold'>Тариф «Евролюкс»</span><br/>" +
                        "от 8000 ₽/м²",
                    services: [
                        "Стены и обои или покраска, декоративная штукатурка",
                        "Пол: Ламинат, кварцвинил или кранитная плитка",
                        "Сан. узел - плитка",
                        "Сантехника и электрика",
                        "Натяжные потолки",
                        "Монтаж люстр, раковин, санфоянсоф и т.д."
                    ],
                    image: "/service-3.png"
                },
            ]
        }),
    }
</script>

<style lang="scss" scoped>

</style>

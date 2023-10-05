<template>
    <NuxtLayout id="features" name="section">
        <template #title>
            Почему нам <span class="text-primary font-weight-bold">доверяют?</span>
        </template>
        <template #content>
            <v-row no-gutters="">
                <v-col
                        v-for="item in features"
                        :key="item"
                        class=""
                        cols="12"
                >
                    <FeaturesItem :item="item"/>
                </v-col>
            </v-row>
        </template>
    </NuxtLayout>
</template>

<script>
    import FeaturesItem from "./FeaturesItem";

    export default {
        name: "Features",
        components: {FeaturesItem},
        data: () => ({
            features: [
                {
                    title: 'Опыт',
                    description: 'Опыт наших мастеров более 10 лет',
                    image: '/feature-1.png'
                },
                {
                    title: 'Гарантии',
                    description: 'Даем гарантию на свои работы 2 года',
                    image: '/feature-2.png'
                },
                {
                    title: 'Команда',
                    description: 'Ежеквартально наши мастера проходят профессиональную аттестацию',
                    image: '/feature-3.png'
                },
                {
                    title: 'Поставщики',
                    description: 'Специальные условия от поставщиков мебели для наших  клиентов',
                    image: '/feature-4.png'
                },
                {
                    title: 'Видеонаблюдение',
                    description: 'Установим камеру видеонаблюдения за ремонтом, в режиме реального времени с компьютера или телефона',
                    image: '/feature-5.png'
                },
                {
                    title: 'Договор',
                    description: 'Все сроки и гарании прописываем в договоре',
                    image: '/feature-6.png'
                },
            ]
        })
    }
</script>

<style lang="scss" scoped>
    .v-row{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 480px), 1fr));
        gap: 40px 80px;
    }
</style>

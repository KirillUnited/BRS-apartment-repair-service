<template>
    <NuxtLayout id="steps" name="section">
        <template #title>
            <span class="text-primary font-weight-bold">5 шагов</span> до ремонта вашей мечты
        </template>

        <template #content>
            <v-list
                    class="ma-auto"
                    max-width="810px"
            >
                <v-list-item
                        v-for="(item, index) in items"
                        :key="item.title"
                >
                    <StepsItem :item="item" :step="index+1"/>
                </v-list-item>
            </v-list>
        </template>

        <template #actions>
            <div class="actions-bg" :style="backgroundStyles"></div>
        </template>
    </NuxtLayout>
</template>

<script>
    import {computed, useImage} from "../../.nuxt/imports";
    import StepsItem from "./StepsItem";

    export default {
        name: "Steps",
        components: {StepsItem},
        data: () => ({
            items: [
                {
                    title: 'Заявка',
                    description: 'Вы оставляете заявку на сайте или по телефону. Мы \n' +
                        'договариваемся о встрече для точного замера и расчета стоимости'
                },
                {
                    title: 'Замер',
                    description: 'Мы выезжаем на объект, делаем \n' +
                        'все необходимые замеры'
                },
                {
                    title: 'Смета, договор',
                    description: 'Состовляем точную смету, сроки, \n' +
                        'а также график платежей'
                },
                {
                    title: 'Передача ключей',
                    description: 'После подписания договора вы передаете нам ключи, мы приступаем к работе'
                },
                {
                    title: 'Ремонт',
                    description: 'Делаем качественный ремонт, утверждая\n' +
                        'с вами каждый этап работ'
                },
                {
                    title: 'Замер',
                    description: 'Принимайте работу!'
                },
            ]
        }),
        setup(props) {
            const img = useImage();
            const src = '/Toolbox.png';
            const backgroundStyles = computed(() => {
                const imgUrl = img(src, {width: 300, height: 300})
                return {backgroundImage: `url(\'${imgUrl}\')`}
            });

            return {
                backgroundStyles
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/utilities";

    .actions {
        &-bg {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(0, -50%);
            width: getMinMax(100px, 300px);
            height: getMinMax(100px, 300px);
            background-position: center bottom;
            background-repeat: no-repeat;
            background-size: 120%;
            z-index: 10;
        }
    }
</style>

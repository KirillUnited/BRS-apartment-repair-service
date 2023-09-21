<template>
    <section class="section">
        <v-img :src="BgImage" cover="" max-height="600" class="align-center">
            <v-container>
                <div class="content">
                    <h1 class="title text-secondary font-weight-light" v-html="title"></h1>
                    <h2 class="subtitle text-secondary" v-html="subtitle"></h2>
                    <Button text="Рассчитать стоимость ремонта" size="x-large" :image="SmetaImage"></Button>
                </div>
            </v-container>
        </v-img>
    </section>
</template>

<script>
    import Button from "./Button";
    import BgImage from "../assets/images/hero.png";
    import SmetaImage from "../assets/images/smeta.png";

    export default {
        name: "Hero",
        components: {Button},
        data: () => ({
            BgImage: BgImage,
            SmetaImage: SmetaImage,
            title: 'Дизайн интерьера, ремонт\n' +
                '                        жилой и коммерческой\n' +
                '                        недвижимости <span\n' +
                '                                class="text-primary font-weight-bold">под ключ в\n' +
                '                Минске</span>',
            subtitle: 'Выполним ремонт точно в срок с гарантией по договору'
        })
    }
</script>

<style lang="scss" scoped>
    .v-img {
        position: relative;

        &:after {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: '';
            background: linear-gradient(90deg, #FFF 20%, rgba(255, 255, 255, 0.00) 86.67%);
            z-index: 1;
        }
    }

    .content {
        position: relative;
        max-width: 650px;
        z-index: 10;

        .btn {
            position: relative;
            margin-top: 2.5rem;

            &:after {
                position: absolute;
                content: '';
                top: 0;
                right: 0;
                width: 100px;
                height: 100px;
                left: auto;
                background-image: url("../assets/images/smeta.png");
                background-size: 100%;
                border: none;
                opacity: 1;
                transform: translate(60%, -30%);
                z-index: 1;
            }
        }
    }

    .title {
        font-size: 2.5rem;
        line-height: normal;
        margin-bottom: 1.5rem;

        &:after {
            display: block;
            content: '';
            width: 100px;
            height: 3px;
            background-color: #FFC771;
            margin-top: 1.5rem;
        }
    }

    .subtitle {
        max-width: 400px;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
</style>

<template>
    <NuxtLayout id="answers" name="section">
        <template #title>
            Остались вопросы?
        </template>

        <template #content>
            <div class="content">
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, i) in items" class="text-secondary" elevation="0" rounded="0" :key="i">
                        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
                            {{item.title}}
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            {{item.text}}
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </template>
    </NuxtLayout>
</template>

<script>
    export default {
        name: "Answers",
        data: () => ({
            items: [
                {
                    title: 'Сколько в среднем длится ремонт?',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                        '                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
                        '                        laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    title: 'Как происходит оплата?',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                        '                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
                        '                        laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    title: 'Как можно сэкономить на ремонте?',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                        '                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
                        '                        laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    title: 'Какие гарантии на выполненную работу?',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                        '                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
                        '                        laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    title: 'Когда можно вызвать замерщика?',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                        '                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
                        '                        laboris nisi ut aliquip ex ea commodo consequat.'
                },
            ]
        })
    }
</script>

<style lang="scss" scoped>
    .v-expansion-panel {
        &-title {
            font-size: 20px;
        }
    }

    .content {
        max-width: 1000px;
        margin: 0 auto;
    }
</style>

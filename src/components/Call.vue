<template>
    <v-card
            elevation="10"
    >
        <v-card-item class="text-secondary">
            <p class="title font-weight-bold">Укажите ваши контакты</p>
            <p class="subtitle">и мы перезвоним вам, чтобы назначить удобное время для замера</p>
        </v-card-item>
        <v-card-text>
            <v-form method="post" action="/" id="callForm" v-model="valid" ref="callForm">
                <v-text-field
                        label="Ваше имя"
                        variant="underlined"
                        v-model="name"
                        :rules="nameRules"
                        required
                        name="message"
                        clearable
                        color="secondary"
                ></v-text-field>
                <v-text-field
                        label="Телефон"
                        variant="underlined"
                        v-model="phone"
                        :rules="phoneRules"
                        required
                        name="phone"
                        type="tel"
                        clearable
                        color="secondary"
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions class="actions flex-column">
            <Button form="callForm" text="ЗАКАЗАТЬ БЕСПЛАТНЫЙ ЗАМЕР" block="" size="x-large" @click="submit"
                    :disabled="!valid"/>
            <slot name="actions"></slot>
        </v-card-actions>
    </v-card>
</template>

<script>
    import Button from "./Button";

    export default {
        name: "Call",
        components: {Button},
        data() {
            return {
                valid: false,
                name: '',
                nameRules: [
                    (v) => !!v || 'Пожалуйста, введите Ваше имя',
                ],
                phone: '',
                phoneRules: [
                    (v) => !!v || 'Пожалуйста, введите Ваш номер телефона',
                    (v) => /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/.test(v) || 'Телефон должен быть действительным'
                ]
            }
        },
        methods: {
            submit() {
                this.$refs.callForm.submit();
            }
        },
        mounted() {
        }
    }
</script>
<style lang="scss" scoped>
    @import "../assets/styles/utilities";

    .title {
        font-size: getMinMax(28px, 28px);
    }

    .subtitle {
        font-size: getMinMax(16px, 16px);
    }

    .actions {
        gap: 1rem;
        padding: 1rem 1rem 1.5rem;
    }
</style>

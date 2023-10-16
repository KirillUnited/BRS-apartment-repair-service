<template>
    <v-btn class="btn text-secondary" color="primary" :text="text" :size="size">
        <template v-slot:append v-if="icon">
        </template>
    </v-btn>
</template>

<script>
    export default {
        name: "Button",
        props: {
            text: String,
            size: String,
            icon: {
                defaultValue: null
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn {
        font-size: 0.75rem;
        letter-spacing: 1.2px;
        background: linear-gradient(274deg, rgba(255, 255, 255, 0.00) -14.6%, rgba(255, 255, 255, 0.39) 39.52%, rgba(255, 255, 255, 0.00) 110.6%), linear-gradient(264deg, var(--color-primary) 10.32%, #FFC858 98.17%);
        box-shadow: 19px 0px 25px 0px rgba(255, 255, 255, 0.11) inset, 0px 2px 15px 0px rgba(255, 255, 255, 0.41) inset;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        transition: all 150ms;

        &:disabled {
            opacity: 0.6;
        }
    }
</style>

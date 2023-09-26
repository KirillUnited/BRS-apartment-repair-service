<template>
    <section class="section">
        <v-container class="text-center heading">
            <h2 class="text-title title text-secondary">
                <slot name="title"></slot>
            </h2>
            <h3 class="text-subtitle subtitle text-secondary">
                <slot name="subtitle"></slot>
            </h3>
        </v-container>
        <v-container class="content">
            <slot name="content"></slot>
        </v-container>
        <v-container class="d-flex justify-center actions">
            <slot name="actions"></slot>
        </v-container>
    </section>
</template>

<script>
    export default {
        name: "Section"
    }
</script>

<style lang="scss" scoped>
    .section {
        padding-top: 50px;
        padding-bottom: 80px;
    }

    .heading {
        padding-bottom: 2.5rem;
    }

    .title {
        margin-bottom: 0.5rem;
    }

    .actions {
        padding-top: 40px;
    }
</style>

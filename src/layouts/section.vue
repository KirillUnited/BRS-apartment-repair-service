<template>
    <section class="section">
        <v-container class="text-center heading d-flex flex-column align-center">
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
            <Modal v-if="CTA" cta-btn-title="получить консультацию" cta-btn-size="x-large"/>
        </v-container>
    </section>
</template>

<script>
    import Modal from "../components/Modal";
    export default {
        name: "Section",
        components: {Modal},
        props: {
            CTA: {
                type: Boolean,
                defaultValue: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .section {
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .heading {
        padding-bottom: 2.5rem;
    }

    .title {
        max-width: 660px;
        margin-bottom: 0.5rem;
    }

    .actions {
        position: relative;
        padding-top: 40px;
    }
</style>

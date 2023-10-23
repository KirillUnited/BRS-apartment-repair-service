<template>
    <section :id="id" class="section">
        <v-container class="text-center heading d-flex flex-column align-center">
            <h2 v-if="$slots.title" class="text-title title text-secondary">
                <slot name="title"></slot>
            </h2>
            <h3 v-if="$slots.subtitle" class="text-subtitle subtitle text-secondary">
                <slot name="subtitle"></slot>
            </h3>
        </v-container>
        <v-container v-if="$slots.content" class="content">
            <slot name="content"></slot>
        </v-container>
        <v-container v-if="($slots.actions || CTA)" class="d-flex justify-center actions">
            <slot name="actions"></slot>
            <Modal v-if="CTA" cta-btn-title="получить консультацию" cta-btn-size="x-large" />
        </v-container>
    </section>
</template>

<script>
    import Modal from "../components/Modal";
    export default {
        name: "Section",
        components: { Modal },
        props: {
            id: String,
            CTA: {
                type: Boolean,
                defaultValue: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/utilities/";

    .section {
        padding-top: getMinMax(28px, 40px);
        padding-bottom: getMinMax(28px, 40px);
    }

    .heading {
        padding-bottom: getMinMax(20px, 40px);
    }

    .title {
        max-width: 660px;

        &+* {
            margin-top: 1rem;
        }
    }

    .actions {
        position: relative;
        padding-top: getMinMax(28px, 40px);
    }   
</style>

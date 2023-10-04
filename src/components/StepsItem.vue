<template>
    <v-banner class="step fill-height text-secondary">
        <template v-slot:prepend>
            <v-avatar
                    color="primary"
                    size="74"
            >
                <div class="font-weight-bold step-count text-secondary">{{step}}</div>
            </v-avatar>
        </template>
        <v-banner-text class="pr-0">
            <h3 class="title font-weight-bold mb-3">{{item.title}}</h3>
            <p class="description">
                {{item.description}}
            </p>
        </v-banner-text>
    </v-banner>
</template>

<script>
    export default {
        name: "StepsItem",
        props: {
            step: Number,
            item: Object
        },
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/utilities";

    .title {
        font-size: getMinMax(24px, 24px);
    }

    .description {
        font-size: getMinMax(20px, 20px);
    }

    .step {
        border-bottom: none;

        &-count {
            font-size: 30px;
        }
    }

    @include less-xs() {
        .v-banner {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            text-align: center;

            & > :first-child {
                margin-inline-end: 0;
                align-self: center;
            }
        }
    }
</style>

<template>
    <v-card
            elevation="10"
            height="100%"
            class="d-flex flex-column"
    >
        <template v-slot:loader="{ isActive }">
            <v-progress-linear
                    :active="isActive"
                    color="primary"
                    height="4"
                    indeterminate
            ></v-progress-linear>
        </template>

        <v-img
                cover
                height="200"
                :src="image"
                :lazy-src="image"
                class="flex-0-0"
        ></v-img>

        <div class="d-flex flex-column flex-1-1">
            <v-card-item>
                <v-card-title v-html="item.title" class="text-secondary"></v-card-title>
            </v-card-item>

            <v-card-text class="text-secondary">
                <ul>
                    <li v-for="service in item.services" :key="service">
                        {{service}}
                    </li>
                </ul>
            </v-card-text>

            <v-card-actions class="mt-auto">
                <Button text="выбрать" size="x-large"/>
            </v-card-actions>
        </div>
    </v-card>
</template>

<script>
    import {useImage} from "../../.nuxt/imports";
    import Button from "./Button";

    export default {
        name: "ServicesItem",
        components: {Button},
        props: {
            item: {
                type: Object,
                defaultValue: {}
            }
        },
        setup(props) {
            const img = useImage();
            const src = props.item?.image;
            const image = img(src, {quality: 90});

            return {
                image
            }
        }
    }
</script>

<style lang="scss" scoped>
    .v-btn {
        width: 100%;
    }

    ul {
        list-style-type: "— ";
        padding-left: 16px;
    }
</style>

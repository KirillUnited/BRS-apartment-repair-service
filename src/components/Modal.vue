<template>
    <v-dialog width="500">
        <template v-slot:activator="{ props }">
            <Button v-bind="props" :text="ctaBtnTitle" :size="ctaBtnSize"></Button>
        </template>

        <template v-slot:default="{ isActive }">
            <v-btn class="position-absolute" style="top: 0; right: 0; z-index: 10" icon="$close" variant="text" @click="isActive.value = false">
                <v-icon icon="$close"></v-icon>
            </v-btn>
            <Call></Call>
        </template>
    </v-dialog>
</template>

<script>
    import Call from "./Call";

    export default {
        name: "Modal",
        components: {Call},
        props: {
            ctaBtnTitle: String,
            ctaBtnSize: String,
        }
    }
</script>

<style lang="scss" scoped>

</style>

<template>
    <v-dialog width="500">
        <template v-slot:activator="{ props }">
            <Button v-bind="props" text="ЗАКАЗАТЬ ЗВОНОК" size="large"></Button>
        </template>

        <template v-slot:default="{ isActive }">
            <v-btn class="position-absolute" style="top: 0; right: 0; z-index: 10" icon="$close" variant="text" @click="isActive.value = false">
                &#x2715
            </v-btn>
            <Call>
                <template v-slot:actions>
                    <v-btn block="" variant="text" @click="isActive.value = false">Закрыть</v-btn>
                </template>
            </Call>
        </template>
    </v-dialog>
</template>

<script>
    import Call from "./Call";

    export default {
        name: "Modal",
        components: {Call}
    }
</script>

<style lang="scss" scoped>

</style>

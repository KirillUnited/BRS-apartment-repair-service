<template>
    <v-container>
        <v-footer>
            <v-row justify="center" no-gutters>
                <v-btn
                        color="secondary"
                        variant="text"
                        class="mx-2"
                        rounded="xl"
                >
                    FOOTER
                </v-btn>
                <v-col class="text-center mt-4" cols="12">
                    {{ new Date().getFullYear() }} — <strong>Belremstroy</strong>
                </v-col>
            </v-row>
        </v-footer>
    </v-container>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>

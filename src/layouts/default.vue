<template>
    <v-app>
        <v-app-bar scroll-behavior="hide" flat="" height="110">
            <Header/>
        </v-app-bar>
        <v-main>
            <slot/>
        </v-main>
        <v-footer>
            <Footer/>
        </v-footer>
    </v-app>
</template>

<script>
    import Header from "../components/Header";
    import Footer from "../components/Footer";

    export default {
        name: "default",
        components: {Footer, Header}
    }
</script>

<style lang="scss" scoped>
</style>

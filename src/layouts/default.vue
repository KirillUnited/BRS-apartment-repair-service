<template>
    <v-app>
        <Header/>
        <v-main>
            <slot/>
        </v-main>
        <Footer/>
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
    .content {
        flex: 1;
    }
</style>

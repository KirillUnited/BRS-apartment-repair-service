<template>
    <v-app>
        <Header/>
        <main class="content">
            <slot/>
        </main>
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

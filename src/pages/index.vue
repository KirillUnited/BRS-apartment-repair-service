<template>
    <Hero/>
    <Gallery/>
    <Services/>
</template>
<script>
    import Hero from "../components/Hero";
    import Gallery from "../components/Gallery";
    import Services from "../components/Services";
    export default {
        components: {Services, Gallery, Hero}
    }
</script>
<style scoped>

</style>

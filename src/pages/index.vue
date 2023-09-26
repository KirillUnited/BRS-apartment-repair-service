<template>
    <Hero/>
    <Gallery/>
    <Services/>
    <Calculator/>
</template>
<script>
    import Hero from "../components/Hero";
    import Gallery from "../components/Gallery";
    import Services from "../components/Services";
    import Calculator from "../components/Calculator";
    export default {
        components: {Calculator, Services, Gallery, Hero}
    }
</script>
<style scoped>

</style>

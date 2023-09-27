<template>
    <Hero/>
    <Gallery :CTA="true"/>
    <Services/>
    <Calculator/>
    <Features :CTA="true"/>
    <CallSection/>
</template>
<script>
    import Hero from "../components/Hero";
    import Gallery from "../components/Gallery";
    import Services from "../components/Services";
    import Calculator from "../components/Calculator";
    import Features from "../components/Features";
    import CallSection from "../components/CallSection";

    export default {
        components: {CallSection, Features, Calculator, Services, Gallery, Hero}
    }
</script>
<style scoped>

</style>

<template>
    <Hero/>
    <Gallery :CTA="true"/>
    <Services/>
    <Calculator/>
    <Features :CTA="true"/>
    <CallSection/>
    <Steps :CTA="true"/>
    <Brands :CTA="true"/>
    <Testimonials/>
    <Answers/>
</template>
<script>
    import Hero from "../components/Hero";
    import Gallery from "../components/Gallery";
    import Services from "../components/Services";
    import Calculator from "../components/Calculator";
    import Features from "../components/Features";
    import CallSection from "../components/CallSection";
    import Steps from "../components/Steps";
    import Brands from "../components/Brands";
    import Testimonials from "../components/Testimonials";
    import Answers from "../components/Answers";

    export default {
        components: {Answers, Testimonials, Brands, Steps, CallSection, Features, Calculator, Services, Gallery, Hero}
    }
</script>
<style scoped>

</style>

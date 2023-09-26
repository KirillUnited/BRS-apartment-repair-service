<template>
    <NuxtLayout name="section">
        <template #title>
            Рассчитайте стоимость ремонта <span class="text-primary font-weight-bold">за 1 минуту</span> с точностью 99%
        </template>
        <template #content>
            <NuxtImg src="/calculator.png" lazy-src="/calculator.png"/>
        </template>
    </NuxtLayout>
</template>

<script>
    export default {
        name: "Calculator"
    }
</script>

<style lang="scss" scoped>

</style>

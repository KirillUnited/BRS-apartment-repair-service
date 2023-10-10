<template>
    <div class="logo d-flex align-center">
        <NuxtLink to="/" class="d-flex">
            <img src="@/static/logo.svg" width="48" height="39"
                 alt="Ремонт жилой и коммерческой нежвижимости в Минске"/>
        </NuxtLink>
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "Logo"
    }
</script>

<style scoped>
    .logo {
        gap: 0.5rem;
    }
</style>

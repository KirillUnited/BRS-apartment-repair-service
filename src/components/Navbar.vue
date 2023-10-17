<template>
    <v-list class="navbar">
        <v-list-item class="navbar-item" v-for="(item, i) in items" :title="item.title" link="" :href="item.href" :key="i"></v-list-item>
    </v-list>
</template>

<script>
export default {
    name: "Navbar",
    data: () => ({
        items: [
            {
                title: 'Галлерея',
                value: 1,
                href: "/#gallery",
            },
            {
                title: 'Тарифы',
                value: 2,
                href: "/#services",
            },
            {
                title: 'Калькулятор',
                value: 3,
                href: "/#calc",
            },
            {
                title: 'Заказать замер',
                value: 5,
                href: "/#callSection",
            },
            {
                title: 'Отзывы',
                value: 6,
                href: '/#testimonials'
            },
        ],
    }),
}
</script>

<style lang="scss" scoped>
.navbar {
    background-color: transparent;

    &-item {
        color: var(--color-secondary);
    }

    a {
        transition: all 150ms;

        &:hover {
            color: var(--color-primary);
        }
    }
}
</style>

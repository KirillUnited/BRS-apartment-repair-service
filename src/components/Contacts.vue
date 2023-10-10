<template>
    <div class="contacts d-flex flex-column align-center">
        <a v-if="tel" href="tel:{{tel}}"
           class="contacts-link text-secondary font-weight-bold text-decoration-none text-truncate">
            <v-icon icon="mdi-phone"></v-icon>
            {{tel}}</a>

        <a v-if="email" href="mailto:{{email}}"
           class="contacts-link contacts-link-email font-weight-bold text-truncate text-secondary text-decoration-none">
            <v-icon icon="mdi-email" class="mr-2"></v-icon>
            <span>{{email}}</span>
        </a>
        <span class="contacts-text contacts-timeline text-secondary">Ежедневно с 10:00 до 22:00</span>
    </div>
</template>

<script>
    export default {
        name: "Contacts",
        props: {
            tel: String,
            email: String
        }
    }
</script>

<style lang="scss" scoped>
    .contacts {
        gap: 0.25rem;

        &-link {
            display: block;
            font-size: 1rem;
        }

        &-text {
            font-size: 0.75rem;
        }

        &-timeline {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            &:before {
                display: block;
                content: '';
                width: 10px;
                height: 10px;
                background-color: #22C74E;
                border-radius: 50%;
            }
        }
    }
</style>

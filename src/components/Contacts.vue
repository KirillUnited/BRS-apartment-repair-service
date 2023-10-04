<template>
    <div class="contacts d-flex flex-column">
        <a href="tel:+7 (999) 900-90-90"
           class="contacts-link text-secondary font-weight-bold text-decoration-none text-truncate">+7
            (999)
            900-90-90</a>
        <span class="contacts-text contacts-timeline text-secondary">Ежедневно с 10:00 до 22:00</span>
    </div>
</template>

<script>
    export default {
        name: "Contacts"
    }
</script>

<style lang="scss" scoped>
    .contacts {
        &-link {
            display: block;
            font-size: 1.2rem;
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

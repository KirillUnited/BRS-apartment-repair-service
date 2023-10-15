<template>
    <v-app-bar absolute="" flat="" height="80" color="transparent">
        <v-container class="d-flex justify-space-between align-center">
            <Logo />
            <v-app-bar-nav-icon class="hidden-lg-and-up text-secondary" variant="text"
                @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <Navbar class="d-none d-lg-flex flex-wrap" />
            <v-spacer class="hidden-lg-and-up"></v-spacer>
            <div class="d-flex align-center">
                <div class="d-none d-md-flex">
                    <Contacts class="mr-5" tel="+375 (29) 900-90-90" />
                </div>
                <Modal cta-btn-title="ЗАКАЗАТЬ ЗВОНОК" cta-btn-size="large"></Modal>
            </div>
        </v-container>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary elevation="5">
        <Navbar class="text-center" />
        <v-list class="navbar-contacts d-flex flex-column align-center">
            <v-list-item>
                <Socials></Socials>
            </v-list-item>
            <v-list-item>
                <Contacts tel="+375 (29) 900-90-90" email="info@stroy.by" />
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import Button from "./Button";
import Modal from "./Modal";
import Navbar from "./Navbar";
import Socials from "./Socials";
import Contacts from "./Contacts";
import Logo from "./Logo";

export default {
    name: "Header",
    components: { Logo, Contacts, Socials, Navbar, Modal, Button },
    data: () => ({
        drawer: false,
        headerColor: 'transparent'
    }),
}
</script>

<style lang="scss" scoped>
.logo {
    gap: 0.5rem;

    &-text {
        font-size: 0.75rem;
        line-height: normal;
    }
}

.socials-text {
    font-size: 0.9rem;
    line-height: normal;
}
</style>

<template>
    <div class="d-flex align-center flex-column">
        <div class="text-subtitle-2">With props</div>
        <v-card
                width="400"
                title="This is a title"
                subtitle="This is a subtitle"
                text="This is content"
        ></v-card>

        <div class="mt-4 text-subtitle-2">With slots</div>
        <v-card
                width="400"
        >
            <template v-slot:title>
                This is a title TEST
            </template>

            <template v-slot:subtitle>
                This is a subtitle
            </template>

            <template v-slot:text>
                This is content
            </template>
        </v-card>

        <div class="mt-4 text-subtitle-2">With markup</div>
        <v-card
                width="400"
        >
            <v-img
                    class="align-end text-white"
                    height="200"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    cover=""
            >
                <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>
            <v-hover open-delay="200" v-slot="{isHovering, props}">
                <v-card-title :class="{'text-primary': isHovering}" v-bind="props">This is a title</v-card-title>
            </v-hover>
            <v-card-item>
                <v-card-title class="font-weight-bold text-primary">This is a title</v-card-title>
                <v-card-subtitle class="text-secondary">This is a subtitle</v-card-subtitle>
            </v-card-item>

            <v-card-text>
                This is content
            </v-card-text>
            <v-btn text="BUTTON" color="primary" class="text-secondary"></v-btn>
        </v-card>
    </div>
</template>
<style scoped>
    .v-btn {
        box-shadow: 19px 0px 25px 0px rgba(255, 255, 255, 0.11) inset, 0px 2px 15px 0px rgba(255, 255, 255, 0.41) inset;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
</style>

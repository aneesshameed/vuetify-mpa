<template>
    <v-app app>
        <v-app-bar app absolute prominent elevation="0" color="white">
            <template v-slot:extension>
                <v-btn text href="/" color="primary">Home</v-btn>
                <v-btn text href="/products" color="primary">Products</v-btn>
                <!-- or write class="primary--text"-->
                <v-btn text href="/contact" class="primary--text">Contact</v-btn>
            </template>
        </v-app-bar>
        <v-content>
            <v-container>
                <v-row>
                    <v-col>
                        Hello From Home Page
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style lang="scss" scoped>
    //Styles are appended using webpack, please check webpack.config    
</style>
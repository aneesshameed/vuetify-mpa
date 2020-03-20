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
                        <v-btn class="ma-1" :ripple=false color="primary" text link to="products/1">Product 1</v-btn>
                        <v-btn class="ma-1" :ripple=false color="primary" text link to="products/2">Product 2</v-btn>
                        <v-btn class="ma-1" :ripple=false color="primary" text link to="products/3">Product 3</v-btn>
                        <v-btn class="ma-1" :ripple=false color="primary" text link to="products/4">Product 4</v-btn>
                        <v-btn class="ma-1" :ripple=false color="primary" text link to="products/5">Product 5</v-btn>
                        <v-btn class="ma-1" :ripple=false color="primary" text link to="products/6">Product 6</v-btn>

                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: "ProductList",
    }
</script>

<style lang="scss" scoped>
    //Styles are appended using webpack, please check webpack.config    
</style>
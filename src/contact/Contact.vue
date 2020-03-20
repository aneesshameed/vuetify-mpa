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
            <v-form v-model="valid" ref="contactForm" :lazy-validation=true>
                <v-container class="col-xs-12 col-sm-8 col-md-4">
                    <v-row dense>
                        <v-col>
                            <v-text-field hide-details :rules="required" label="Name" v-model="form.name">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row dense>
                        <v-col>
                            <v-text-field hide-details :rules="emailOnly" label="Email" v-model="form.email">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row dense>
                        <v-col>
                            <v-text-field hide-details :rules="required" label="Message" v-model="form.message">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-btn outlined color="primary" @click="send">Send</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
            <v-snackbar v-model="snackbar" bottom left>
                {{snackbarText}}
            </v-snackbar>
        </v-content>
    </v-app>
</template>

<script>
    import axios from "axios";
    export default {
        name: "Home",
        data() {
            return {
                valid: false,
                snackbar: false,
                snackbarText: null,
                required: [
                    v => !!v || 'Required'
                ],
                emailOnly: [
                    v => (!v || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)) ||
                    'Invalid Email address'
                ],
                form: {
                    name: "",
                    email: "",
                    message: "",
                }
            }
        },
        methods: {
            snackMessage(text) {
                this.snackbarText = text;
                this.snackbar = true;
            },
            send() {
                if (this.$refs.contactForm.validate()) {
                    axios.post('/api/contact', this.form)
                        .then(response => {
                            const body = response["data"];
                            console.log(body);
                            this.snackMessage("Message Received");
                        }).catch(err => {
                            const errorData = err.response["data"];
                            this.snackMessage(errorData.message);
                        })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
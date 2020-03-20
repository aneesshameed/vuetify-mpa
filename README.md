# vuetify-mpa

Multipage app with vue, vuetify, webpack and express. Every pages are pushed from nodeback end and all communications to backend api are made using axios. The project has four pages
    
    * /home
    * /products
    * /products/:id
    * /contact

## How pages are routed?
Pages are routed from the backend as in a normal node web application. All the pages requested are received by the page router inside api/routes/pages. Based on the requesting url a corresponding html page is send back. The html page consists of link to JS file inside /dist and emitted by webpack. This JS file loads vue app inside the `<div id="app"></div>`. To do this correctly we need to set both dist and src folder as static.

```
app.use('/dist', express.static('dist'));
app.use('/src', express.static('src'));
```

## API requests
API requests are made to /api/~, One api request in the app is the post request in /contacts page and is send to /api/contact. All API requests are made using axios from the vue front.

``` 
axios.post('/api/contact', this.form)
    .then(response => {
        const body = response["data"];
        console.log(body);
        this.snackMessage("Message Received");
    }).catch(err => {
        const errorData = err.response["data"];
        this.snackMessage(errorData.message);
    });
```
## SASS and CSS

SASS and CSS are appended to webpack emitted file. This makes sure that css are available to all the emits and we don't have include sass files in every vue file.

```
options: {
    // This is the path to your variables
    prependData: "@import './src/scss/variables.scss'"
},
```

## Products page
Every page in a mutipage app can be turned into a single page app. For eg, the /product and /product/:id pages works as SPA. To do that, use vue-router.

```
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/products', component: List},
    { path: '/products/:id', component: View},
  ]
})
```

And in view.vue, use watch and mounted to listen to the changes in id
```
watch: {
    "$route.params.id": function (n) {
        this.id = n;
    },
},
mounted(){
    this.id = this.$route.params.id;
}
```

## Help
Fork it and help me to improve the code.
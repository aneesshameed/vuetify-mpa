import Vue from 'vue'
import App from './Products.vue'
import List from './List.vue'
import View from './View.vue'

Vue.config.productionTip = false

import vuetify from '../plugins/vuetify' // path to vuetify export
Vue.use(vuetify);

import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/products', component: List},
    { path: '/products/:id', component: View},
  ]
})

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')




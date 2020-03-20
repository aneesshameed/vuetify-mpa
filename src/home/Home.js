import Vue from 'vue'
import App from './Home.vue'

Vue.config.productionTip = false

import vuetify from '../plugins/vuetify' // path to vuetify export
Vue.use(vuetify);

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')




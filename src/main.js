import Vue from 'vue'
import Router from 'vue-router'
import routes from './router/index.js'

import App from './App.vue'
import 'animate.css'
import 'vue-fullpage-all/vue-fullpage-all.css'
import VueFullpage from 'vue-fullpage-all'
Vue.use(VueFullpage)
Vue.use(Router)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router: routes,
  render: h => h(App),
}).$mount('#app')

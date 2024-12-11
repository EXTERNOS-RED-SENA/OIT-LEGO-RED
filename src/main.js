import Vue from 'vue'
import App from './App.vue'
import router from './js/router'
import store from './js/store'
import legored from 'legored'

import './styles/_styles.sass'

import config from './js/global'
//Vue.prototype.$config = config

const packageJson = require('../package.json')
//Vue.prototype.$package = packageJson

Vue.use(legored, { config, packageJson })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

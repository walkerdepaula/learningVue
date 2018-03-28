import Vue from 'vue'
import App from './App.vue'

import router from './core/router'
import store from './core/store'
import './core/api'

// Configs
import './core/config/bootstrap'
import './core/config/registerServiceWorker'
import './core/config/i18n'
import { i18n } from './core/config/i18n'

// Plugins
import './shared/plugins'

// Filters
import './shared/filters/currency'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { components } from '@mauromadeit/vue-commons'
import '@mauromadeit/vue-commons/dist/@mauromadeit/vue-commons.css'

Vue.use(Vuetify)

Object.entries(components).forEach(([key, val]) => {
  Vue.component(key, val.default)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.addEventListener('load', function() {
  function updateOnlineStatus(event) {
    if (navigator.onLine) {
      store.commit('setState', ['toast', 'Connection Restored'])
    } else {
      store.commit('setState', ['toast', 'Offline'])
    }
  }

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
})


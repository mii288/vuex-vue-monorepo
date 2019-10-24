import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { module } from 'ui'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({}) 
store.registerModule('counter', module)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/bulma/css/bulma.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'

import Create from './components/Create.vue'
import Edit from './components/Edit.vue'
import Index from './components/Index.vue'

import Vue from 'vue'
import App from './App.vue'

import 'bulma/css/bulma.css'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit',
    component: Edit
  },
  {
    name: 'Index',
    path: '/index',
    component: Index
  }
]

const router = new VueRouter({ mode: 'history', routes: routes })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

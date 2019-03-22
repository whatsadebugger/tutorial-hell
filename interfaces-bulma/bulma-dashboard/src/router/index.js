import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Customers from '../pages/Customers.vue'
import Books from '../pages/Books.vue'
import Orders from '../pages/Orders.vue'
import Login from '../pages/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/books',
      name: 'books',
      component: Books,
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers,
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
  linkActiveClass: 'is-active'
})


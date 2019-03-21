import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../Dashboard.vue'
import Customers from '../Customers.vue'
import Books from '../Books.vue'
import Orders from '../Orders.vue'

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
  ],
  linkActiveClass: 'is-active'
})


import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import product from '@/components/product'
import categoryes from '@/components/categoryes'
import search from '@/components/search'
import info from '@/components/info'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/categoryes',
      name: 'categoryes',
      component: categoryes
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/product',
      name: 'product',
      component: product
    }
  ]
})

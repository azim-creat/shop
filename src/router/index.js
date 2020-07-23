import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import services from '@/components/services'
import details from '@/components/details'
import categoryes from '@/components/categoryes'
import search from '@/components/search'
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
      path: '/services',
      name: 'services',
      component: services
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/details/:Pid',
      name: 'details',
      component: details
    }
  ]
})

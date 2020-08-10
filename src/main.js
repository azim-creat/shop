// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {store} from './store/vuex.js';
import VueLazyload from 'vue-lazyload'

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require("./assets/preloader.svg"),
  loading: require("./assets/preloader.svg"),
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

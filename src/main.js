// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueScrollReveal from 'vue-scroll-reveal'
import { revealh3 } from './components/sub/utils'

Vue.use(VueScrollReveal, {
  beforeReveal: function (e) {
    revealh3(e)
  },
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})

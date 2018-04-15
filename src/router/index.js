import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/nenufart/',
      name: 'Home',
      component: Home
    },
    {
      path: '/nenufart/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

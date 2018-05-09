import Vue from 'vue'
import Router from 'vue-router'
import Contact from '@/components/Contact'
import About from '@/components/About'
import Projets from '@/components/Projets'
import Projet from '@/components/Projet'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/projets',
            name: 'Projets',
            component: Projets
        },
        { 
            path: '/projet/:slug',
            component: Projet
        }
    ]
})

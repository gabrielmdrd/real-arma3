import Vue from 'vue'
import Router from 'vue-router'
import about from './components/pages/About.vue'
import store from './components/pages/store.vue'
import login from './components/pages/login.vue'
import adminPanel from './components/pages/adminPanel.vue'
import carousel from './components/carousel.vue'


Vue.use(Router)

export default new Router({
    routes: [
    {
        path:'/about',
        name: "about",
        component: about
    },
    {
        path:'/home',
        name: "home",
        component: carousel
    },
    {
        path:'/store',
        name: "magasin",
        component: store
    },
    {   path:'/login',
        name: "authentification",
        component: login
    },
    {
        path:'/adminPanel',
        name: "administration",
        component: adminPanel
    }

]
})
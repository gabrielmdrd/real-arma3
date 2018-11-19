import Vue from 'vue'
import Router from 'vue-router'
import about from './components/pages/About.vue'
import store from './components/pages/store.vue'
import login from './components/pages/login.vue'
import basket from './components/pages/basket.vue'
import logout from './components/pages/logout.vue'
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
        path:'/',
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
            path:'/logout',
            name: "deconnexion",
            component: logout
        },
        {
            path:'/basket',
            name: "baskeet",
            component: basket
        },
    {
        path:'/adminPanel',
        name: "administration",
        component: adminPanel
    }

]
})
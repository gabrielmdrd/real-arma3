import Vue from 'vue'
import Router from 'vue-router'
import about from './components/pages/About.vue'
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
    }

]
})
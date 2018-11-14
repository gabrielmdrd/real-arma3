import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSession from 'vue-session'
import Paginate from 'vuejs-paginate'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




Vue.use(VueSession);
Vue.use(BootstrapVue);
Vue.use(Paginate);
Vue.config.productionTip = false;
export const EventBus = new Vue();
new Vue({
    router,
  render: h => h(App)
}).$mount('#app')

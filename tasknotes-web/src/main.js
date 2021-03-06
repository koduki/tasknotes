import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import Auth from "@/modules/auth"

// Import axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

// Import BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import { BCarousel } from 'bootstrap-vue'
Vue.component('b-carousel', BCarousel)
import { BCarouselSlide } from 'bootstrap-vue'
Vue.component('b-carousel-slide', BCarouselSlide)

// Meta tag generator
import Meta from 'vue-meta';
Vue.use(Meta);

Vue.config.productionTip = false

// Auth
Auth.init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

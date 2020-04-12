import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "register-service-worker"
import dateFilter from '@/filters/date.filter'
//Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
//Scrollbar
import Vue2PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'


Vue.use(Vue2PerfectScrollbar, {
  name: 'scroll'
})
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false


Vue.filter('date', dateFilter)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
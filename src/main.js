import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "register-service-worker"
import dateFilter from '@/filters/date.filter'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false


Vue.filter('date', dateFilter)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
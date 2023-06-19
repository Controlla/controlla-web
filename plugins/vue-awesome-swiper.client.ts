import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.min.css'

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(VueAwesomeSwiper)
})

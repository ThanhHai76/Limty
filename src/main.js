import Vue from 'vue'
import AppLayout from './layout/index.vue'
import router from './router'
import store from './store'
import './vue-component'
import './vue-filter'

// import '@/assets/css/bootstrap.min.css'
// import '@/assets/css/owlCarousel.min.css'
// import '@/assets/css/fontawesome.min.css'
// import '@/assets/css/flaticon.css'
// import '@/assets/css/animate.css'
// import '@/assets/css/style.css'

// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

new Vue({
  router: router,
  store: store,
  render: h => h(AppLayout),
}).$mount('#app')

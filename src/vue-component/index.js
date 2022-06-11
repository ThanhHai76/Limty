import Vue from 'vue'
import Default from '../layout/Wrappers/defaultLayout.vue'
import Login from '../layout/Wrappers/loginLayout.vue'
import { BootstrapVue } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue);


Vue.component('default-layout', Default)
Vue.component('login-layout', Login)

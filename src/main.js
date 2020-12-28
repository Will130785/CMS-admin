import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from "axios"
import VueRouter from "vue-router"
import RouterPrefetch from "vue-router-prefetch"

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(RouterPrefetch)

Vue.config.productionTip = false;

//Load the token from local storage
Vue.prototype.$http = axios;
const token = localStorage.getItem("token")

//Is there any token then we will append default axios authorisation headers
if(token){
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

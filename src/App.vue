<template>
  <div id="app">
    <div>
      <TopBar />
    </div>
    <div class="main">
      <SideBar />
      <router-view />
    </div>
  
  </div>
</template>

<script>
import TopBar from "./components/TopBar"
import SideBar from "./components/SideBar"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default {
    components: {
      TopBar,
      SideBar
    }
}
</script>

<style>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family:Arial, Helvetica, sans-serif;
      background-color: #1e1e2b !important;
      padding: 1rem;
    }

    .main {
      display: flex;
    }
</style>
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
      font-size: 62.5% !important;
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
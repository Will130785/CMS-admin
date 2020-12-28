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

    .entries {
        width: 70%;
        height: 50rem;
        background-color: #fff;
        position: relative;
        margin: 0 auto;
        transform: translateX(15%);
    }

    .entry-container {
        display: grid;
        grid-template-columns: 1fr;
    }

    .entry {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        box-shadow: 0 .1rem .5rem .1rem rgba(0, 0, 0, .5);
        padding: 1rem;
        border-radius: .5rem;
    }

</style>
<template>
  <div id="app">
    <svgKit />
  </div>
</template>

<script>
import svgKit from "./components/svgKit.vue";

export default {
  name: "App",
  components: {
    svgKit
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #333;
  height: 100vh;
  width: 100%;
}
</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  created() {
    let vm = this;
    window.onresize = () => {
      if (vm.$isMobile()) {
        vm.$router.push("/mobile");
      } else {
        vm.$router.push("/");
      }
    };
    window.onresize();
  }
};
</script>
<style>
@tailwind base;

@tailwind components;

@tailwind utilities;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
}
</style>

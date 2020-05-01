<template>
  <div id="app" class="bg-blue-gray relative ml-16">
    <!-- <div class="p-4 text-white flex w-full justify-end absolute top-0 z-50">
      <router-link to="/projects">{{ $t("projects") }}</router-link>
    </div>-->
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  },
  created() {
    let vm = this;
    window.onresize = () => {
      if (
        vm.$router.history.current.name === "Mobile" ||
        vm.$router.history.current.name === "Home"
      ) {
        if (vm.$isMobile() && vm.$router.history.current.name === "Home") {
          vm.$router.push("/mobile");
        } else if (vm.$router.history.current.name === "Mobile") {
          vm.$router.push("/");
        }
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

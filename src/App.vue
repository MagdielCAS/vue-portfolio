<template>
  <div id="app" class="bg-blue-gray relative ml-16">
    <!-- <div class="p-4 text-white flex w-full justify-end absolute top-0 z-50">
      <router-link to="/projects">{{ $t("projects") }}</router-link>
    </div>-->
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Navbar from "@/components/Navbar.vue";
import _isMobile from "@/utils/mobileCheck";

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  name = "App";

  created() {
    window.onresize = this.verifyMobileOnResize(this);
    this.verifyMobileOnResize(this)();
  }

  verifyMobileOnResize(vm: any) {
    return () => {
      console.log(vm);
      if (
        // @ts-ignore
        vm.$router.history.current.name === "Mobile" ||
        // @ts-ignore
        vm.$router.history.current.name === "Home"
      ) {
        // @ts-ignore
        if (_isMobile() && vm.$router.history.current.name === "Home") {
          vm.$router.push("/mobile");
          // @ts-ignore
        } else if (vm.$router.history.current.name === "Mobile") {
          vm.$router.push("/");
        }
      }
    };
  }
}
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
.unselectable {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>

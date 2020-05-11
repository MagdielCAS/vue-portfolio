<template>
  <div
    class="unselectable navbar fixed left-0 h-screen text-white z-50 group ease-in-out duration-500 w-16 hover:w-48"
  >
    <div class="flex flex-col">
      <router-link to="/">
        <div
          class="flex p-4 items-center cursor-pointer nav-item text-tea-green"
        >
          <i class="fas fa-user-alt text-2xl"></i>
          <div
            class="ml-2 text-xl invisible opacity-0 group-hover:visible group-hover:opacity-100 item-text"
            transition="fade"
          >
            {{ $t("home") }}
          </div>
        </div>
      </router-link>
      <router-link to="/projects">
        <div
          class="flex p-4 items-center cursor-pointer nav-item text-tea-green"
        >
          <i class="fas fa-cubes text-2xl"></i>
          <div
            class="ml-2 text-xl invisible opacity-0 group-hover:visible group-hover:opacity-100 item-text"
            transition="fade"
          >
            {{ $t("projects") }}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Navbar extends Vue {
  name = "Navbar";
}
</script>

<style>
/* Css animations */
.navbar {
  background: #23232e;
  transition: width;
}
.nav-item {
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: ease-in-out 300ms;
  background: #23232e;
}

.nav-item:hover {
  text-decoration: none;
  filter: grayscale(0%) opacity(1);
  background: #141418;
}
.item-text {
  transition: visibility 0s, opacity 0.5s ease-in;
}
</style>

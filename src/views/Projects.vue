<template>
  <div class="h-screen relative overflow-hidden">
    <div class="text-lg text-white font-medium p-4">
      {{ $t("warnings.development") }}
    </div>
    <div class="w-screen flex justify-center items-center z-0">
      <MaurerRose></MaurerRose>
    </div>
  </div>
</template>

<script>
import MaurerRose from "./Projects/MaurerRose";
export default {
  components: {
    MaurerRose
  }
};
</script>

<style></style>

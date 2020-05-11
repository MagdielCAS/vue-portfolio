<template>
  <div class="px-2">
    <div
      class="rounded-full p-1 bg-manatee cursor-pointer ease duration-300"
      :class="{
        'bg-manatee': !content,
        'bg-munsell': content
      }"
      @click="content = !content"
    >
      <div
        class="rounded-full border-8 ease duration-300"
        :class="{
          'border-white mr-4': !content,
          'border-tea-green ml-4': content
        }"
      >
        &nbsp;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToggleSwitch",
  props: ["value"],
  computed: {
    content: {
      get() {
        return !!this.value;
      },
      set(content) {
        this.$emit("input", content);
      }
    }
  }
};
</script>

<style></style>

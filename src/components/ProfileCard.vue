<template>
  <div class="rounded overflow-hidden shadow-lg bg-white">
    <SmoothReflow>
      <div class="px-6 py-4 flex flex-col sm:flex-row">
        <div class="flex justify-start sm:justify-center sm:items-center m-2">
          <img
            class="rounded-full w-1/3 sm:w-auto mr-4 sm:mr-0"
            width="150"
            height="150"
            src="https://www.gravatar.com/avatar/c3c2f0d199db2d43eae71665ab1e129f?s=150"
          />
          <div class="sm:hidden flex flex-col justify-center items-center">
            <div class="font-bold text-xl mb-2">{{ $t("name") }}</div>
            <span>{{ $t("bio.position") }}</span>
          </div>
        </div>
        <div class="p-4">
          <div class="font-bold text-xl mb-2 hidden sm:block">
            {{ $t("name") }}
          </div>
          <p class="text-gray-700 text-base flex flex-col">
            <strong>{{ $t("bio.graduation") }}</strong>
            <span class="hidden sm:block">{{ $t("bio.position") }}</span>
            <span>{{ $t("bio.hobbies") }}</span>
          </p>
          <div class="flex flex-row justify-around flex-wrap mt-2">
            <div
              class="cursor-pointer"
              @click="openUrl('https://github.com/MagdielCAS')"
              style="color: #333;"
            >
              <i class="fab fa-github mr-1"></i>
              {{ $t("github") }}
            </div>
            <div
              class="cursor-pointer"
              @click="openUrl('https://linkedin.com/in/magdiel-campelo/')"
              style="color: #0077b5;"
            >
              <i class="fab fa-linkedin mr-1"></i>
              {{ $t("linkedin") }}
            </div>
          </div>
        </div>
      </div>
    </SmoothReflow>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  methods: {
    openUrl(url) {
      window.open(url, "_blank");
    }
  }
};
</script>

<style></style>

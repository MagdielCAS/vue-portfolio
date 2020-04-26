 <template>
  <div class="rounded overflow-hidden shadow-lg bg-white">
    <div class="px-6 py-4 flex flex-row">
      <div class="flex justify-center items-center m-4">
        <img
          class="rounded-full"
          width="150"
          height="150"
          src="https://www.gravatar.com/avatar/c3c2f0d199db2d43eae71665ab1e129f?s=150"
        />
      </div>
      <div class="p-4">
        <div class="font-bold text-xl mb-2">{{$t('name')}}</div>
        <p class="text-gray-700 text-base flex flex-col">
          <strong>{{$t('bio.graduation')}}</strong>
          <span>{{$t('bio.position')}}</span>
          <span>{{$t('bio.hobbies')}}</span>
        </p>
        <div class="flex flex-row justify-around flex-wrap mt-2">
          <div
            class="cursor-pointer"
            @click="openUrl('https://github.com/MagdielCAS')"
            style="color: #333;"
          >
            <i class="fab fa-github mr-1"></i>
            {{$t('github')}}
          </div>
          <div
            class="cursor-pointer"
            @click="openUrl('https://linkedin.com/in/magdiel-campelo/')"
            style="color: #0077b5;"
          >
            <i class="fab fa-linkedin mr-1"></i>
            {{$t('linkedin')}}
          </div>
        </div>
      </div>
    </div>
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
 
 <style>
</style>
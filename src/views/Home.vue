<template>
  <div class="home">
    <kinesis-container>
      <div class="w-screen h-screen flex justify-center items-center bg-blue-gray relative">
        <kinesis-element :strength="10" type="depth">
          <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div class="px-6 py-4 flex flex-row">
              <div class="flex justify-center items-center">
                <img
                  class="rounded-full"
                  width="600"
                  height="600"
                  src="https://www.gravatar.com/avatar/c3c2f0d199db2d43eae71665ab1e129f?s=600"
                />
              </div>
              <div>
                <div class="font-bold text-xl mb-2">{{$t('name')}}</div>
                <p
                  class="text-gray-700 text-base"
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
              </div>
            </div>
          </div>
        </kinesis-element>
      </div>
    </kinesis-container>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  name: "Home",
  components: {
    KinesisContainer,
    KinesisElement
  },
  created() {
    console.log(this);
  }
};
</script>

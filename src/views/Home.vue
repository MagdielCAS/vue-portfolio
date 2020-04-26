<template>
  <div class="home relative overflow-hidden">
    <kinesis-container>
      <div class="w-screen h-screen flex justify-center items-center bg-blue-gray z-0">
        <kinesis-element :strength="10" type="depth" class="z-50">
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
              </div>
            </div>
          </div>
        </kinesis-element>
        <kinesis-element
          v-for="(ball,index) in balls"
          :key="index"
          class="absolute z-10"
          :style="{top:ball.y+'px',left:ball.x+'px',}"
        >
          <div
            class="rounded-full border"
            :style="{width: 2*ball.r+'px',height: 2*ball.r+'px', 'border-color': ball.color, 'border-width':ball.border+'px'}"
          >&nbsp;</div>
        </kinesis-element>
      </div>
    </kinesis-container>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import flatcolor from "@/utils/flatcolor";
import perlin from "@/utils/perlin";

export default {
  name: "Home",
  components: {
    KinesisContainer,
    KinesisElement
  },
  data: () => ({
    balls: []
  }),
  created() {
    let number = Math.floor(Math.random() * 10 + 3);
    // noise.seed(Math.random);
    let noise = perlin.noise;
    noise.seed(Math.random);
    for (var i = 0; i < number; i++) {
      let x = Math.floor(Math.random() * (window.innerWidth - 300) + 150);
      let y = Math.floor(Math.random() * (window.innerHeight - 300) + 150);
      this.balls.push({
        x,
        y,
        r: Math.floor(Math.random() * 150),
        border: Math.floor(Math.random() * 5 + 1),
        color: flatcolor(Math.abs(noise.perlin2(x / 100, y / 100)) * 360).hex
      });
    }
  }
};
</script>

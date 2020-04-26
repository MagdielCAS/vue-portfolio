<template>
  <div class="home relative overflow-hidden">
    <kinesis-container :active="!isMobile">
      <div class="w-screen h-screen flex justify-center items-center bg-blue-gray z-0">
        <kinesis-element :strength="10" type="depth" class="z-50">
          <ProfileCard></ProfileCard>
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
import ProfileCard from "@/components/ProfileCard.vue";
import flatcolor from "@/utils/flatcolor";
import perlin from "@/utils/perlin";

export default {
  name: "Home",
  components: {
    KinesisContainer,
    KinesisElement,
    ProfileCard
  },
  data: () => ({
    balls: []
  }),
  computed: {
    isMobile() {
      return !!this.$isMobile();
    }
  },
  created() {
    let number = Math.floor(Math.random() * 10 + 3);
    // noise.seed(Math.random);
    let noise = perlin.noise;
    noise.seed(Math.random);
    for (var i = 0; i < number; i++) {
      let x = Math.floor(Math.random() * (window.innerWidth - 40) + 20);
      let y = Math.floor(Math.random() * (window.innerHeight - 40) + 20);
      this.balls.push({
        x,
        y,
        r: Math.floor(Math.random() * 100),
        border: Math.floor(Math.random() * 10 + 1),
        color: flatcolor(Math.abs(noise.perlin2(x / 100, y / 100)) * 360).hex
      });
    }
  }
};
</script>

<template>
  <div class="home relative overflow-hidden">
    <div class="w-screen h-screen flex justify-center items-center z-0">
      <ProfileCard class="z-50"></ProfileCard>
      <div
        v-for="(ball,index) in balls"
        :key="index"
        class="absolute z-10"
        :style="{top:ball.y+'px',left:ball.x+'px',}"
      >
        <div
          class="rounded-full border"
          :style="{width: 2*ball.r+'px',height: 2*ball.r+'px', 'border-color': ball.color, 'border-width':ball.border+'px'}"
        >&nbsp;</div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard.vue";
import flatcolor from "@/utils/flatcolor";
import perlin from "@/utils/perlin";

export default {
  name: "Home",
  components: {
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

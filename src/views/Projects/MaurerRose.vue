<template>
  <div class="rounded overflow-hidden shadow-lg bg-white p-4 flex">
    <div class="rounded">
      <vue-p5 @setup="setup" @draw="draw"></vue-p5>
    </div>
    <div class="flex flex-col px-4">
      <div class="flex flex-row items-center mb-2">
        <ToggleSwitch v-model="dnoise"></ToggleSwitch>
        <span class="ml-1">{{ $t("maurer_rose.animate") }}</span>
      </div>
      <div class="flex flex-row items-center mb-2">
        <ToggleSwitch v-model="lightTheme"></ToggleSwitch>
        <span class="ml-1">{{ $t("maurer_rose.theme") }}</span>
      </div>
      <span class="mb-1">{{ $t("maurer_rose.params") }}</span>
      <div class="flex flex-row items-center mb-2">
        <span class="ml-1">n</span>
        <vue-slider v-model="n" contained></vue-slider>
      </div>
      <div class="flex flex-row items-center mb-2">
        <span class="ml-1">d</span>
        <vue-slider v-model="d" :contained="true"></vue-slider>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

let VueP5 = require("vue-p5");
import ToggleSwitch from "@/components/ToggleSwitch.vue";

@Component({
  components: {
    "vue-p5": VueP5,
    ToggleSwitch
  }
})
export default class MaurerRose extends Vue {
  name = "MaurerRose";

  vh = 400;
  vw = 400;
  s = 10;
  n = 2;
  d = 29;
  nMin = 0;
  nMax = 20;
  nStep = 1;
  dMin = 0;
  dMax = 360;
  dStep = 0.1;
  dvelocity = 1;
  dvelocityMin = -10;
  dvelocityMax = 10;
  dvelocityStep = 0.01;
  dnoise = true;
  lightTheme = false;
  gui: any = null;

  setup(p5: any) {
    p5.createCanvas(400, 400);
    p5.angleMode(p5.DEGREES);
  }

  draw(p5: any) {
    if (this.lightTheme) {
      p5.background(255);
    } else {
      p5.background(0);
    }
    // frameRate(1);
    p5.translate(this.vw / 2, this.vh / 2);
    p5.scale(this.s);
    if (this.lightTheme) {
      p5.stroke(0);
    } else {
      p5.stroke(255);
    }

    p5.strokeWeight(1 / this.s);
    p5.line(this.vw / 2, 0, -this.vw / 2, 0);
    p5.line(0, this.vh / 2, 0, -this.vh / 2);
    if (this.lightTheme) {
      p5.stroke(0, 0, 255, 255);
    } else {
      p5.stroke(255, 255, 255, 158);
    }
    p5.noFill();
    p5.beginShape();
    p5.strokeWeight(1 / this.s);
    for (let i = 0; i <= 360; i++) {
      let k = i * this.d;
      let r = (p5.sin(this.n * k) * p5.min(this.vh / 2, this.vw / 2)) / this.s;
      let a = k;
      let x = r * p5.cos(a);
      let y = r * p5.sin(a);
      p5.vertex(x, y);
    }
    p5.endShape();
    p5.noFill();
    if (this.lightTheme) {
      p5.stroke(255, 0, 0, 255);
    } else {
      p5.stroke(255, 0, 255, 255);
    }
    p5.strokeWeight(3 / this.s);
    p5.beginShape();
    for (let i = 0; i < 361; i++) {
      let k = i;
      let r = (p5.sin(this.n * k) * p5.min(p5.vh / 2, p5.vw / 2)) / p5.s;
      let x = r * p5.cos(k);
      let y = r * p5.sin(k);
      p5.vertex(x, y);
    }
    p5.endShape();
    if (this.dnoise) {
      this.d = p5.noise(this.d) * this.dvelocity + this.d;
      this.d = this.d > 360 ? 0 : this.d;
    }
  }
}
</script>

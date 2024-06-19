<template>
  <div class="q-pa-md" style="margin-bottom: 30px;">
    <q-carousel
      animated
      v-model="slide"
      infinite
      arrows
      :autoplay="autoplay"
      swipeable
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="../../src/assets/rose/img1.jpg" />
      <q-carousel-slide :name="2" class="adj2" img-src="../../src/assets/rose/img2.jpg" />
      <q-carousel-slide :name="3" img-src="../../src/assets/rose/img3.jpg" />
      <q-carousel-slide :name="4" class="adj1" img-src="../../src/assets/rose/img12.jpg" />
      <q-carousel-slide :name="5" class="adj3" img-src="../../src/assets/rose/img15.jpg" />
      <q-carousel-slide :name="6" img-src="../../src/assets/rose/img10.jpg" />
      <q-carousel-slide :name="7" class="adj4" img-src="../../src/assets/rose/img7.jpg" />
      <q-carousel-slide :name="8" class="adj5" img-src="../../src/assets/rose/img8.jpg" />
      <q-carousel-slide :name="9" class="adj9" img-src="../../src/assets/rose/img9.jpg" />
      <q-carousel-slide :name="10" img-src="../../src/assets/rose/img13.jpg" />
      <q-carousel-slide :name="11" img-src="../../src/assets/rose/img14.jpg" />
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>

<style>
.adj1 {
  background-position: 0 -120px;
}
.adj2 {
  background-position: 0 0px;
}
.adj3 {
  background-position: 0 0px;
}
.adj4 {
  background-position: 0 -30px;
}
.adj5 {
  background-position: 0px 0px;
}
.adj6 {
  background-position: 0px 0px;
}
</style>

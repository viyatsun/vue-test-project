<script setup>
import { ref } from 'vue';

const slide = ref(1);

</script>

<template>
  <div class="q-pa-md center">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      center
      class="carousel"
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
  </div>
</template>

<style scoped>

</style>

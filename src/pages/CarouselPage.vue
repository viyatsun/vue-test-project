<script setup>
import { ref } from 'vue';

const slide = ref(1);
const autoplay = ref(true);
</script>

<template>
  <div class="container">
    <q-carousel
      animated
      v-model="slide"
      :autoplay="autoplay"
      arrows
      navigation
      infinite
      center
      class="carousel size"
    >
      <q-carousel-slide
        :name="1"
        img-src="https://images.wallpaperscraft.com/image/single/boat_mountains_lake_135258_3840x2160.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://images.wallpaperscraft.com/image/single/mountains_lake_tops_119133_3840x2400.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://images.wallpaperscraft.com/image/single/road_asphalt_marking_130996_3840x2400.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://images.wallpaperscraft.com/image/single/ocean_horizon_sunset_135214_3840x2160.jpg"
      />

    </q-carousel>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 20px
}

@media (min-width: 350px) {
      .size {
        width: 340px;
        height: 191px;
      }
    }

    @media (min-width: 500px) {
      .size {
        width: 400px;
        height: 225px;
      }
    }

    @media (min-width: 900px) {
      .size {
        width: 800px;
        height: 450px;
      }
    }

    @media (min-width: 1100px) {
      .size {
        width: 900px;
        height: 618px;
      }
    }

    @media (min-width: 1500px) {
      .size {
        width: 1000px;
        height: 731px;
      }
    }

    @media (min-width: 1900px) {
      .size {
        width: 1500px;
        height: 843px;
      }
    }

    @media (min-width: 2500px) {
      .size {
        width: 2300px;
        height: 1293px;
      }
    }

    @media (min-width: 3800px) {
      .size {
        width: 3400px;
        height: 1912px;
      }
    }
</style>

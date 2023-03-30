<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { onMounted } from "vue";
import type Image from "~/interfaces/Image";

const images: Array<Image> = useImages();

const itemsToShow = ref(2.75);
onMounted(() => {
  if (window.innerWidth < 640) itemsToShow.value = 1.3;
});
</script>

<template lang="pug">
div(class=`
  w-[100%]
  mb-20
`)
  carousel(:items-to-show='itemsToShow' :wrap-around='true')
    slide(v-for='(image, index) in images' :index='index')
      img(
        class="carrousel__item" 
        :src='image.src'
      )
    template(#addons)
      navigation
        pagination
</template>

<style scoped>
/* stylelint-disable */
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>

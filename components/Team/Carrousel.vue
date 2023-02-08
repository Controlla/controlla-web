<script setup>
import 'vue3-carousel/dist/carousel.css'
/* stylelint-disable */
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const images = [
  '/img/team_carousel_1.svg',
  '/img/team_carousel_2.svg',
  '/img/team_carousel_3.svg',
  '/img/team_carousel_4.svg',
  '/img/team_carousel_5.svg',
  '/img/team_carousel_6.svg',
  '/img/team_carousel_7.svg',
]
</script>

<template lang="pug">
div(class=`
  w-[90%]
  mx-auto
  my-20
`)
  carousel(:items-to-show='2.75' :wrap-around='true')
    slide(v-for='(image, index) in images' :index='index')
      NuxtImg(
        format="webp"
        loading="lazy"
        class="carrousel__item" 
        :src='image'
      )
    template(#addons='')
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
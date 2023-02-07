<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const images = [
  'us_carousel/4E0A05CC-9286-46D8-BB88-B21D7B010431_1_100_o.svg',
  'us_carousel/7A74E68E-3B61-4601-AB9C-0E2F50A687C0_1_100_o-1.svg',
  'us_carousel/25FD4FFA-F53C-4753-9B23-BEFE193D8191_1_100_o-1.svg',
  'us_carousel/41A427A3-715C-4FF3-A33F-EFE10AB5A3A7_1_100_o.svg',
  'us_carousel/BD3C576A-1DF1-4ABA-A376-97C93458806C_1_100_o.svg',
  'us_carousel/CB08D40C-D307-47E4-9E1A-29C19E6ED427_1_100_o-1.svg',
  'us_carousel/F302C381-16B8-4A5A-9188-2DE6DB8AC15B_1_105_c-5-1.svg',
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
      img(class="carrousel__item" :src='image')
    template(#addons='')
      navigation
        pagination
</template>

<style scoped>
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
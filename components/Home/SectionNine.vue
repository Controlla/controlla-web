<script setup>
import "vue3-carousel/dist/carousel.css";
/* eslint-disable */
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
/* eslint-enable */
</script>

<template lang="pug">
div(class=`
  w-[90%]
  mx-auto
  md:my-20
`)
  h2(class=`
    text-3xl
    text-center
    font-semibold
    flex
    justify-center
    items-center
    gap-2
  `) {{ $t('success') }} 
    img(src="@/assets/img/rocket-emoji.webp" class=`
      h-8
    `)
  carousel(:items-to-show='1')
    slide(key='1')
      HomeCarrouselSercomSlide
    slide(key='2')
      HomeCarrouselLeanfitSlide
    slide(key='3')
      HomeCarrouselCanoSteelSlide
    slide(key='4')
      HomeCarrouselTresOsitasSlide
    slide(key='5')
      HomeCarrouselFloatSlide
    template(#addons='')
      navigation
        pagination
</template>

<style>
@media screen and (max-width: 640px) {
  .carousel__slide {
    margin-top: 5rem;
    align-items: flex-start; 
  }
}
</style>

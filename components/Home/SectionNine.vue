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
`)
  h2(class=`
    text-3xl
    text-center
    overflow-hidden
    font-semibold
  `) {{ $t('success') }} 
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
      template(#addons)
        navigation
          pagination
</template>

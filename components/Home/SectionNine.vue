<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
</script>

<template lang="pug">
div(class=`
  w-[90%]
  mx-auto
  my-20
`)
  carousel(:items-to-show='1')
    slide(key='1')
      HomeCarrouselSercom
    slide(key='2')
      HomeCarrouselLeanfit
    slide(key='3')
      HomeCarrouselCanoSteel
    template(#addons='')
      navigation
        pagination
</template>

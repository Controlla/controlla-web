<template>
  <section class="team-carrousel">
    <swiper
      class="team-carrousel__swiper"
      :modules="[Autoplay]"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :centered-slides="false"
      :space-between="70"
      :slides-per-view="1"
      :breakpoints="{
        '768': {
          slidesPerView: 2,
          spaceBetween: 20
        },
        '1280': {
          slidesPerView: 3,
          spaceBetween: 50
        }
      }"
    >
      <swiper-slide
        v-for="image in images"
        :key="image"
        class="team-carrousel__swiper__slide"
        :style="`background-image: url(${image});`"
      />
    </swiper>
  </section>
</template>

<script>
import { Autoplay } from 'swiper'
import img1 from '@/assets/images/team/carrousel/1.webp'
import img2 from '@/assets/images/team/carrousel/2.webp'
import img3 from '@/assets/images/team/carrousel/3.webp'
import img4 from '@/assets/images/team/carrousel/4.webp'
import img5 from '@/assets/images/team/carrousel/5.webp'
import img6 from '@/assets/images/team/carrousel/6.webp'

export default defineComponent({
  name: 'VTeamCarrousel',
  setup() {
    return {
      Autoplay,
      images: [img1, img2, img3, img4, img5, img6]
    }
  }
})
</script>

<style lang="scss">
.team-carrousel {
  @apply w-full py-12;
  &__swiper {
    @apply w-full;
    &__slide {
      @apply h-[250px] sm:h-[300px] md:h-[350px] xl:h-[400px] rounded-3xl overflow-hidden;
      @apply bg-cover bg-center bg-no-repeat cursor-grab;
    }
  }
}
</style>

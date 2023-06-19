<template>
  <div class="carrousel__pagination carrousel__pagination--left">
    <v-button
      padding-size="unset"
      variant="transparent"
      @onClick="swiper.slidePrev()"
    >
      <v-image :src="arrowLeftUrlImage" />
    </v-button>
  </div>
  <div class="carrousel__pagination carrousel__pagination--right">
    <v-button
      padding-size="unset"
      variant="transparent"
      @onClick="swiper.slideNext()"
    >
      <v-image :src="arrowRighttUrlImage" />
    </v-button>
  </div>
</template>

<script lang="ts">
import { useSwiper } from 'swiper/vue'
import arrowLeftUrlImage from '@/assets/images/icons/arrow-left.svg'
import arrowRighttUrlImage from '@/assets/images/icons/arrow-right.svg'

export default defineComponent({
  setup() {
    const swiper = useSwiper()

    return {
      arrowLeftUrlImage,
      arrowRighttUrlImage,
      swiper
    }
  }
})
</script>

<style scoped></style>

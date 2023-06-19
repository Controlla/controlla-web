<template>
  <swiper
    :modules="[Autoplay]"
    :autoplay="{ delay: 2500, disableOnInteraction: true }"
    class="carrousel"
  >
    <swiper-slide
      v-for="slide in carrousel"
      :key="slide.image"
      class="carrousel-slide"
    >
      <v-section-heading-image
        class="carrousel-slide__content"
        invert-on-mobile
        :sizes="{ image: 4, heading: 8 }"
      >
        <template #image>
          <v-image
            :src="getUrlImage(slide.image)"
            class="carrousel-slide__content__image"
          />
        </template>
        <template #title>
          {{ $t(slide.title) }}
        </template>
        <template #description>
          <p>
            {{ $t(slide.text) }}
          </p>
          <p v-if="slide.insights" class="carrousel-slide__content__subtitle">
            {{ $t('cano.subtitle') }}
          </p>
          <ul v-if="slide.insights" class="carrousel-slide__content__insights">
            <li
              v-for="insight in slide.insights"
              :key="insight"
              class="carrousel-slide__content__insights__item"
            >
              <p>• {{ $t(insight) }}</p>
            </li>
          </ul>
        </template>
        <template #footer>
          <ul class="carrousel-slide__content__card-list" role="list">
            <li
              v-for="card in slide.details"
              :key="card.text"
              class="carrousel-slide__content__card-list__item"
              role="listitem"
            >
              <v-card>
                <template #header>
                  <h3 class="carrousel-slide__content__card-list__item__title">
                    {{ $t(card.title) }}
                  </h3>
                </template>
                <template #body>
                  <p class="carrousel-slide__content__card-list__item__text">
                    {{ $t(card.text) }}
                  </p>
                  <span
                    v-if="card.tech"
                    class="carrousel-slide__content__card-list__item__tech"
                  >
                    • {{ $t(card.tech) }}
                  </span>
                </template>
              </v-card>
            </li>
          </ul>
        </template>
      </v-section-heading-image>
    </swiper-slide>
    <v-carrousel-pagination />
  </swiper>
</template>

<script lang="ts">
import { Autoplay } from 'swiper'
import { carrousel } from '@/mocks'
import sercomUrlImage from '@/assets/images/home/carrousel/sercom.webp'
import canoUrlImage from '@/assets/images/home/carrousel/cano.webp'
import floatUrlImage from '@/assets/images/home/carrousel/float.webp'
import leanfitUrlImage from '@/assets/images/home/carrousel/leanfit.webp'
import ositasUrlImage from '@/assets/images/home/carrousel/tres-ositas.webp'

export default defineComponent({
  name: 'VCarrousel',
  setup() {
    const images = ref({
      sercom: sercomUrlImage,
      cano: canoUrlImage,
      float: floatUrlImage,
      leanfit: leanfitUrlImage,
      ositas: ositasUrlImage
    })

    const getUrlImage = (key: string) => images.value[key]

    return {
      carrousel,
      getUrlImage,
      Autoplay
    }
  }
})
</script>

<style lang="scss">
.carrousel {
  @apply w-full relative;
  & > div {
    @apply items-stretch;
  }
  &-slide {
    @apply cursor-grab h-full md:h-auto flex md:items-center justify-center;
    @apply bg-gray-100;
    &__content {
      @apply h-auto;
      &__image {
        @apply animate-floating;
        & img {
          @apply h-[250px] md:h-auto;
        }
      }
      &__subtitle {
        @apply mt-4 font-semibold;
      }
      &__insights {
        @apply w-full flex flex-wrap justify-between;
        &__item {
          @apply w-full lg:w-6/12;
        }
      }
      &__card-list {
        @apply flex flex-col md:flex-row flex-wrap w-full;
        &__item {
          @apply p-6 w-full lg:w-6/12 xl:w-4/12;
          &__title {
            @apply mb-4 mt-0;
            @apply text-dark text-xl font-semibold;
          }
          &__text {
            @apply text-dark text-lg;
          }
          &__tech {
            @apply text-gray-400;
          }
        }
      }
    }
  }
  &__pagination {
    @apply absolute z-20;
    &--left {
      @apply top-1/2 left-0 md:left-9 xl:left-20;
    }
    &--right {
      @apply top-1/2 right-0 md:right-9 xl:right-20;
    }
  }
}
</style>

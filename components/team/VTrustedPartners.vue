<template>
  <section v-motion-fade-visible-once class="trusted-partners">
    <article class="trusted-partners__content">
      <header class="trusted-partners__content__header">
        <h2 class="trusted-partners__content__header__title">
          {{ $t('trusted-partners.title') }}
        </h2>
        <p class="trusted-partners__content__header__text">
          {{ $t('trusted-partners.text') }}
        </p>
      </header>
      <footer class="trusted-partners__content__footer">
        <v-image v-if="sm" :src="mobileImage" />
        <ul
          v-else
          class="trusted-partners__content__footer__images"
          role="list"
        >
          <li
            v-for="image in images"
            :key="image"
            class="trusted-partners__content__footer__images__image"
            role="listitem"
          >
            <v-image :src="image" />
          </li>
        </ul>
      </footer>
    </article>
  </section>
</template>

<script>
import cano from '@/assets/images/partners/cano.png'
import expert from '@/assets/images/partners/expert.png'
import float from '@/assets/images/partners/float.png'
import ikki from '@/assets/images/partners/ikki.png'
import lf from '@/assets/images/partners/lf.png'
import recluta from '@/assets/images/partners/recluta.png'
import softii from '@/assets/images/partners/softii.png'
import tresOsitas from '@/assets/images/partners/tres-ositas.png'
import twenty from '@/assets/images/partners/twenty.png'
import mobileImage from '@/assets/images/partners/mobile.png'

export default defineComponent({
  name: 'VTrustedPartners',
  setup() {
    const { sm } = useResponsive()

    return {
      images: [
        twenty,
        tresOsitas,
        float,
        expert,
        ikki,
        recluta,
        lf,
        softii,
        cano
      ],
      mobileImage,
      sm
    }
  }
})
</script>

<style lang="scss">
.trusted-partners {
  @apply py-12;
  &__content {
    @apply container-fluid;
    &__header {
      @apply flex flex-col items-center;
      &__title {
        @apply text-center font-bold;
        @apply text-2xl md:text-4xl xl:text-[42px] md:leading-[3rem];
      }
      &__text {
        @apply text-dark text-lg md:text-2xl text-center mt-6;
        @apply max-w-[760px];
      }
    }
    &__footer {
      @apply w-full mt-6 flex justify-center;
      &__images {
        @apply w-full flex flex-wrap items-center justify-center;
        &__image {
          @apply w-full md:w-6/12 lg:w-4/12 xl:w-3/12;
          @apply p-4 flex justify-center items-center;
        }
      }
    }
  }
}
</style>

<template>
  <section
    v-motion
    :="sm ? animations.fadeVisibleOnce : animations.noop"
    class="why-work"
  >
    <article class="why-work__content">
      <header class="why-work__content__header">
        <h2
          v-motion
          :="sm ? animations.noop : animations.popVisibleOnce"
          class="why-work__content__header__title"
        >
          {{ $t('why-work.title.1') }}
          <span class="why-work__content__header__title--blue">
            {{ $t('why-work.title.2') }}
          </span>
          {{ $t('why-work.title.3') }}
        </h2>
      </header>
      <footer class="why-work__content__footer">
        <ul
          v-motion
          :="sm ? animations.noop : animations.slideVisibleOnceBottom"
          class="why-work__content__footer__list"
          role="listitem"
        >
          <li
            v-for="card in whyWorkCards"
            :key="card.title"
            class="why-work__content__footer__list__item"
            role="list"
          >
            <v-card>
              <template #icon>
                <v-image
                  :src="icons[card.icon].icon"
                  class="why-work__content__footer__list__item__image"
                />
              </template>
              <template #header>
                <h3 class="why-work__content__footer__list__item__title">
                  {{ $t(card.title) }}
                </h3>
              </template>
              <template #body>
                <p class="why-work__content__footer__list__item__text">
                  {{ $t(card.text) }}
                </p>
              </template>
            </v-card>
          </li>
        </ul>
      </footer>
    </article>
  </section>
</template>

<script lang="ts">
import clockImageUrl from '@/assets/images/icons/clock.webp'
import planeImageUrl from '@/assets/images/icons/plane.webp'
import calendarImageUrl from '@/assets/images/icons/calendar.webp'
import { whyWorkCards } from '@/mocks'

export default defineComponent({
  name: 'VWhywhyWork',
  setup() {
    const { sm } = useResponsive()
    const { animations } = useMotionAnimation()
    const icons = ref([
      {
        id: 1,
        icon: clockImageUrl
      },
      {
        id: 2,
        icon: planeImageUrl
      },
      {
        id: 3,
        icon: calendarImageUrl
      }
    ])

    return {
      whyWorkCards,
      icons,
      sm,
      animations
    }
  }
})
</script>

<style lang="scss">
.why-work {
  @apply py-12 xl:py-[132px];
  &__content {
    @apply container-fluid relative;
    &__header {
      @apply flex flex-col items-center;
      &__title {
        @apply text-center font-bold;
        @apply text-2xl md:text-4xl xl:text-[42px] md:leading-[3rem] max-w-[700px];
        &--blue {
          @apply text-primary;
        }
      }
      &__text {
        @apply text-dark text-lg md:text-2xl text-center mt-6;
        @apply max-w-[1010px];
      }
    }
    &__footer {
      @apply flex justify-center mt-12;
      &__list {
        @apply flex flex-wrap w-full justify-center;
        &__item {
          @apply w-full md:w-5/12 lg:w-4/12 p-4;
          &__image {
            @apply w-[74px];
          }
          &__title {
            @apply mb-4 mt-8;
            @apply text-dark text-xl md:text-2xl lg:text-3xl font-semibold;
          }
          &__text {
            @apply text-dark text-lg lg:text-2xl;
          }
        }
      }
    }
    &__arrow {
      @apply absolute -bottom-[95%] md:translate-y-11 lg:translate-y-12 xl:translate-y-14;
      @apply left-8 xl:left-28;
      @apply max-w-[400px] lg:max-w-[450px] xl:max-w-full;
    }
  }
}
</style>

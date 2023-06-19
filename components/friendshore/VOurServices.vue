<template>
  <section
    v-motion
    :="sm ? animations.fadeVisibleOnce : animations.noop"
    class="our-services"
  >
    <article class="our-services__content">
      <header class="our-services__content__header">
        <h2
          v-motion
          :="sm ? animations.noop : animations.popVisibleOnce"
          class="our-services__content__header__title"
        >
          {{ $t('our-services.title') }}
        </h2>
        <p
          v-motion
          :="sm ? animations.noop : animations.popVisibleOnce"
          class="our-services__content__header__text"
        >
          {{ $t('our-services.subtitle') }}
        </p>
      </header>
      <footer
        v-motion
        :="sm ? animations.noop : animations.slideVisibleOnceBottom"
        class="our-services__content__footer"
      >
        <ul class="our-services__content__footer__positions" role="list">
          <li
            v-for="position in positions"
            :key="position.text"
            class="our-services__content__footer__positions__item"
            role="listitem"
          >
            <v-image :src="position.icon" />
            <span> {{ position.text }} </span>
          </li>
        </ul>
      </footer>
    </article>
  </section>
</template>

<script>
import gabrielUrlImage from '@/assets/images/team/gabriel.png'
import marioUrlImage from '@/assets/images/team/mario.png'
import edgarUrlImage from '@/assets/images/team/edgar.png'
import aideUrlImage from '@/assets/images/team/aide.png'

export default defineComponent({
  name: 'VOurServices',
  setup() {
    const { sm } = useResponsive()
    const { animations } = useMotionAnimation()
    const { t } = useI18n()

    const positions = [
      {
        icon: marioUrlImage,
        text: t('our-services.positions.1')
      },
      {
        icon: gabrielUrlImage,
        text: t('our-services.positions.2')
      },
      {
        icon: edgarUrlImage,
        text: t('our-services.positions.3')
      },
      {
        icon: aideUrlImage,
        text: t('our-services.positions.4')
      }
    ]

    return {
      positions,
      sm,
      animations
    }
  }
})
</script>

<style lang="scss">
.our-services {
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
      }
    }
    &__footer {
      @apply flex justify-center mt-8;
      &__positions {
        @apply flex flex-wrap justify-around w-full;
        &__item {
          @apply flex flex-col items-center w-full lg:w-[225px];
          @apply p-2;
          & span {
            @apply font-bold text-dark text-center mt-4;
          }
        }
      }
    }
  }
}
</style>

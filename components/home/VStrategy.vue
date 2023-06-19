<template>
  <section class="strategy">
    <article
      v-motion
      :="sm ? animations.fadeVisibleOnce : animations.noop"
      class="strategy__content"
    >
      <header class="strategy__content__header">
        <h2
          v-motion
          :="sm ? animations.noop : animations.popVisibleOnce"
          class="strategy__content__header__title"
        >
          {{ $t('strategy.title.1') }}
          <span class="strategy__content__header__title--blue">
            {{ $t('strategy.title.2') }}
          </span>
          {{ $t('strategy.title.3') }}
        </h2>
        <p
          v-motion
          :="sm ? animations.noop : animations.popVisibleOnce"
          class="strategy__content__header__text"
        >
          {{ $t('strategy.text.1') }}
          <span>
            {{ $t('strategy.text.2') }}
          </span>
          {{ $t('strategy.text.3') }}
        </p>
      </header>
      <footer class="strategy__content__footer">
        <v-route-link to="/contact-us" variant="button">
          {{ $t('navigation.contact_us') }}
        </v-route-link>
      </footer>
      <v-arrows-section />
    </article>
  </section>
</template>

<script>
import arrowLeftMobileImageUrl from '@/assets/images/home/arrowLeftMobile.svg'
import arrowLeftImageUrl from '@/assets/images/home/arrow-left.svg'

export default defineComponent({
  setup() {
    const { sm } = useResponsive()
    const { animations } = useMotionAnimation()

    return {
      arrowLeftImageUrl,
      arrowLeftMobileImageUrl,
      sm,
      animations
    }
  }
})
</script>

<style lang="scss">
.strategy {
  @apply py-[85px] xl:py-[132px] relative;
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
      @apply flex justify-center mt-6;
    }
    &__arrow {
      @apply absolute -bottom-[95%] md:translate-y-11 lg:translate-y-12 xl:translate-y-14;
      @apply left-8 xl:left-28;
      @apply max-w-[400px] lg:max-w-[450px] xl:max-w-full;
    }
  }
}
</style>

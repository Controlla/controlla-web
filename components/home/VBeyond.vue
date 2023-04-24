<template>
  <section
    v-motion
    :="sm ? animations.fadeVisibleOnce : animations.noop"
    class="beyond"
  >
    <article class="beyond__content">
      <header class="beyond__content__header">
        <h2
          v-motion
          :="sm ? animations.noop : animations.popVisibleOnce"
          class="beyond__content__header__title"
        >
          {{ $t('beyond.title') }}
          <span>{{ $t('beyond.title_helper') }}</span>
        </h2>
        <p
          v-motion
          :="sm ? animations.noop : animations.popVisibleOnce"
          class="beyond__content__header__text"
        >
          {{ $t('beyond.text') }}
        </p>
        <div
          v-motion
          :="sm ? animations.noop : animations.popVisibleOnce"
          class="beyond__content__header__button"
        >
          <v-route-link to="/friendshore" variant="button">
            {{ $t('buttons.visit_friendshore') }}
          </v-route-link>
        </div>
      </header>
      <footer class="beyond__content__footer">
        <v-image v-slot="slotProps" class="beyond__content__footer__image">
          <img src="~/assets/images/home/desktop/beyond.webp" :="slotProps" />
        </v-image>
      </footer>
    </article>
  </section>
</template>

<script>
import beyondImageUrl from '@/assets/images/home/beyond.webp'

export default defineComponent({
  setup() {
    const { sm } = useResponsive()
    const { animations } = useMotionAnimation()

    return {
      sm,
      beyondImageUrl,
      animations
    }
  }
})
</script>

<style lang="scss">
.beyond {
  @apply py-12 my-6 bg-gradient-blue bg-no-repeat bg-center;
  @apply overflow-x-hidden;
  &__content {
    @apply container-fluid flex flex-col md:flex-row justify-center lg:justify-between items-center;
    &__header {
      @apply flex flex-col items-center lg:items-start;
      &__title {
        @apply text-2xl md:text-4xl xl:text-6xl text-center;
      }
      &__text {
        @apply text-lg md:text-2xl xl:text-4xl text-dark mt-3 text-center lg:text-left;
      }
      &__button {
        @apply w-full mt-10 flex justify-center lg:justify-start;
      }
    }
    &__footer {
      @apply max-w-sm animate-floating mt-6 lg:mt-0;
    }
  }
}
</style>

<template>
  <header class="banner">
    <section
      v-motion
      :="sm ? animations.fadeVisibleOnce : animations.noop"
      class="banner__content"
    >
      <div class="banner__content__heading">
        <h1
          v-motion
          :="sm ? animations.noop : animations.popVisibleOnce"
          class="banner__content__heading__title"
        >
          <slot name="title" />
        </h1>
        <slot name="text" />
      </div>
      <div
        v-motion
        :="sm ? animations.noop : animations.popVisibleOnce"
        class="banner__content__image"
      >
        <slot name="image" />
      </div>
    </section>
  </header>
</template>

<script lang="ts">
export default defineComponent({
  name: 'VBanner',
  setup() {
    const { sm } = useResponsive()
    const { animations } = useMotionAnimation()

    return {
      sm,
      animations
    }
  }
})
</script>

<style lang="scss">
.banner {
  @apply min-h-[75vh] w-full pt-32 lg:py-12;
  @apply bg-banner-rounded-up bg-top bg-cover bg-no-repeat;
  @apply flex items-center;
  &__content {
    @apply container-fluid h-full;
    @apply flex flex-wrap items-center justify-between;
    &__heading {
      @apply w-full lg:w-6/12;
      &__title {
        @apply text-center lg:text-left leading-relaxed;
      }
    }
    &__image {
      @apply w-full lg:w-5/12;
      @apply flex items-center justify-center;
    }
  }
}
</style>

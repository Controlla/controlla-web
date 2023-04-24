<template>
  <section v-motion-pop-visible-once class="about-us">
    <article class="about-us__content">
      <header class="about-us__content__header">
        <h2 class="about-us__content__header__title">
          {{ $t('about-us.title') }}
        </h2>
        <p class="about-us__content__header__text">
          {{ $t('about-us.text') }}
        </p>
      </header>
    </article>
  </section>
</template>

<script lang="ts">
export default defineComponent({
  name: 'VAboutUs',
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
.about-us {
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
  }
}
</style>

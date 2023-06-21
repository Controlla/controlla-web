<template>
  <section class="stories">
    <article class="stories__content">
      <header class="stories__content__header">
        <h2 class="stories__content__header__title">
          {{ $t('stories.title') }}
          <v-image
            :src="rocketImageUrl"
            class="stories__content__header__image"
          />
        </h2>
      </header>
    </article>
    <client-only>
      <v-carrousel-stories />
    </client-only>
  </section>
</template>

<script>
import rocketImageUrl from '@/assets/images/home/rocket.webp'

export default defineComponent({
  name: 'VStories',
  setup() {
    return {
      rocketImageUrl
    }
  }
})
</script>

<style lang="scss">
.stories {
  @apply py-12 bg-gray-100 relative;
  &__content {
    @apply container-fluid;
    &__header {
      &__title {
        @apply text-center font-bold flex w-full justify-center;
        @apply text-2xl md:text-4xl xl:text-[42px] md:leading-[3rem];
      }
      &__image {
        @apply ml-1;
      }
    }
  }
}
</style>

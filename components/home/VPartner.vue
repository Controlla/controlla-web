<template>
  <section class="partner">
    <header class="partner__content">
      <h2 v-motion-fade-visible-once class="partner__content__title">
        {{ $t('partner.text.1') }}
        <span class="partner__content__title--italic">
          {{ $t('partner.text.2') }}
        </span>
        {{ $t('partner.text.3') }}
        <span class="partner__content__title--blue">
          {{ $t('partner.text.4') }}
        </span>
        {{ $t('partner.text.5') }}
      </h2>
    </header>
    <footer class="partner__content partner__content__footer">
      <v-avatar :avatar="luis" position="CEO & Founder" name="Luis R. Torres" />
    </footer>
  </section>
</template>

<script>
import luis from '@/assets/images/team/luis.png'

export default defineComponent({
  setup() {
    return { luis }
  }
})
</script>

<style lang="scss">
.partner {
  @apply min-h-[75vh] w-screen py-12 mt-20;
  @apply flex flex-col items-center justify-center;
  &__content {
    @apply container-fluid flex items-center justify-center;
    @apply h-full;
    &__title {
      @apply text-center text-2xl;
      @apply md:text-[38px] leading-[40px];
      @apply lg:text-[52px] lg:leading-[96px];
      &--italic {
        @apply underline font-light italic;
      }
      &--blue {
        @apply text-primary;
      }
    }
    &__footer {
      @apply mt-12 lg:mt-24;
    }
  }
}
</style>

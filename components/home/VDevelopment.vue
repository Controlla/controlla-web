<template>
  <v-section-heading-image class="development" invert-on-mobile>
    <template #image>
      <v-image v-show="sm" v-slot="slotProps" class="development__image">
        <img src="~/assets/images/home/mobile/development.webp" :="slotProps" />
      </v-image>
      <v-image v-show="!sm" v-slot="slotProps" class="development__image">
        <img
          src="~/assets/images/home/desktop/development.webp"
          :="slotProps"
        />
      </v-image>
    </template>
    <template #helper> Third step </template>
    <template #title>
      {{ $t('development.title') }}
    </template>
    <template #description>
      <p>
        {{ $t('development.text.1') }}
        <span>
          {{ $t('development.text.2') }}
        </span>
        {{ $t('development.text.3') }}
      </p>
      <p class="development__text--spacing">• {{ $t('development.web') }}</p>
      <p>• {{ $t('development.flutter') }}</p>
      <p>• {{ $t('development.jira') }}</p>
      <p>• {{ $t('development.vue') }}</p>
    </template>
  </v-section-heading-image>
</template>

<script>
export default defineComponent({
  name: 'VDevelopment',
  setup() {
    const { sm } = useResponsive()

    return { sm }
  }
})
</script>

<style lang="scss">
.development {
  @apply bg-gradient-blue min-h-screen flex items-center;
  &__image {
    @apply animate-floating max-w-[90%];
    &-square {
      @apply max-w-[125px] animate-floating;
    }
  }
  &__text {
    &--spacing {
      @apply mt-4;
    }
  }
}
</style>

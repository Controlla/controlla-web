<template>
  <v-section-heading-image class="qa-test" :order="{ heading: 1, image: 2 }">
    <template #arrowTop>
      <v-arrows-section side="right" position="top" />
    </template>
    <template #image>
      <v-image v-slot="slotProps" class="development__image">
        <img src="~/assets/images/home/desktop/qa.webp" :="slotProps" />
      </v-image>
    </template>
    <template #helper> Fourth step </template>
    <template #title>
      {{ $t('testing.title') }}
    </template>
    <template #description>
      <p>
        {{ $t('testing.text.1') }}
        <span>
          {{ $t('testing.text.2') }}
        </span>
        {{ $t('testing.text.3') }}
      </p>
      <p class="qa-test__text--spacing">• {{ $t('testing.audit') }}</p>
      <p>• {{ $t('testing.automate') }}</p>
      <p>• {{ $t('testing.test') }}</p>
    </template>
    <template #footer>
      <v-image v-slot="slotProps" class="development__image-square">
        <img src="~/assets/images/home/desktop/selenium.png" :="slotProps" />
      </v-image>
      <v-image v-slot="slotProps" class="development__image-square">
        <img src="~/assets/images/home/desktop/cypress.png" :="slotProps" />
      </v-image>
    </template>
  </v-section-heading-image>
</template>

<script>
export default defineComponent({
  name: 'VQaTest',
  setup() {
    const { sm } = useResponsive()
    return { sm }
  }
})
</script>

<style lang="scss">
.qa-test {
  @apply bg-secondary-light min-h-[85vh] flex items-center;
  &__image {
    @apply animate-floating md:max-w-[90%];
    &-square {
      @apply w-[125px] animate-floating last:animation-delay-500;
    }
  }
  &__text {
    &--spacing {
      @apply mt-4;
    }
  }
}
</style>

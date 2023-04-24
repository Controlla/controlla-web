<template>
  <v-section-heading-image class="ideation-evaluation" invert-on-mobile>
    <template #image>
      <v-image
        v-show="sm"
        v-slot="slotProps"
        class="ideation-evaluation__image"
      >
        <img
          src="~/assets/images/home/mobile/ideation_and_evaluation.webp"
          :="slotProps"
        />
      </v-image>
      <v-image
        v-show="!sm"
        v-slot="slotProps"
        class="ideation-evaluation__image"
      >
        <img
          src="~/assets/images/home/desktop/ideation_and_evaluation.webp"
          :="slotProps"
        />
      </v-image>
    </template>
    <template #helper> First step </template>
    <template #title>
      {{ $t('ideation.title') }}
    </template>
    <template #description>
      <p>
        {{ $t('ideation.text.1') }}
        <span>
          {{ $t('ideation.text.2') }}
        </span>
        {{ $t('ideation.text.3') }}
      </p>
      <p class="product-design__text--spacing">
        • {{ $t('ideation.discovery') }}
      </p>
      <p>• {{ $t('ideation.wireframing') }}</p>
      <p>• {{ $t('ideation.scoping') }}</p>
    </template>
  </v-section-heading-image>
</template>

<script>
export default defineComponent({
  name: 'VIdeationAndEvaluation',
  setup() {
    const { sm } = useResponsive()

    return { sm }
  }
})
</script>

<style lang="scss">
.ideation-evaluation {
  @apply bg-gradient-blue min-h-screen flex items-center;
  &__image {
    @apply animate-floating max-w-[90%];
  }
  &__text {
    &--spacing {
      @apply mt-4;
    }
  }
}
</style>

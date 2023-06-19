<template>
  <v-section-heading-image
    class="product-design"
    :order="{ heading: 1, image: 2 }"
  >
    <template #arrowTop>
      <v-arrows-section side="right" position="top" />
    </template>
    <template #image>
      <v-image v-show="sm" v-slot="slotProps" class="product-design__image">
        <img src="~/assets/images/home/mobile/product.webp" :="slotProps" />
      </v-image>
      <v-image v-show="!sm" v-slot="slotProps" class="product-design__image">
        <img src="~/assets/images/home/desktop/product.webp" :="slotProps" />
      </v-image>
    </template>
    <template #helper> Second step </template>
    <template #title>
      {{ $t('product.title') }}
    </template>
    <template #description>
      <p>
        {{ $t('product.text.1') }}
        <span>
          {{ $t('product.text.2') }}
        </span>
        {{ $t('product.text.3') }}
      </p>
      <p class="product-design__text--spacing">
        • {{ $t('product.architecture') }}
      </p>
      <p>• {{ $t('product.sketching') }}</p>
      <p>• {{ $t('product.design') }}</p>
    </template>
    <template #footer>
      <v-image
        v-show="sm"
        v-slot="slotProps"
        class="product-design__image-square"
      >
        <img src="~/assets/images/home/mobile/miro.png" :="slotProps" />
      </v-image>
      <v-image
        v-show="!sm"
        v-slot="slotProps"
        class="product-design__image-square"
      >
        <img src="~/assets/images/home/desktop/miro.png" :="slotProps" />
      </v-image>

      <v-image
        v-show="sm"
        v-slot="slotProps"
        class="product-design__image-square"
      >
        <img src="~/assets/images/home/mobile/figma.png" :="slotProps" />
      </v-image>
      <v-image
        v-show="!sm"
        v-slot="slotProps"
        class="product-design__image-square"
      >
        <img src="~/assets/images/home/desktop/figma.png" :="slotProps" />
      </v-image>
    </template>
    <v-arrows-section arrow-variant="large" />
  </v-section-heading-image>
</template>

<script>
export default defineComponent({
  name: 'VProductDesign',
  setup() {
    const { sm } = useResponsive()

    return { sm }
  }
})
</script>

<style lang="scss">
.product-design {
  @apply bg-secondary-light min-h-screen flex items-center;
  &__image {
    @apply animate-floating max-w-[90%];
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

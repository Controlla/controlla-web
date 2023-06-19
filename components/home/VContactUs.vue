<template>
  <v-section-heading-image class="contact-us" :order="{ heading: 1, image: 2 }">
    <template #image>
      <v-image v-show="!sm" v-slot="slotProps" class="contact-us__image">
        <img src="~/assets/images/home/desktop/building.png" :="slotProps" />
      </v-image>
      <v-image v-show="sm" v-slot="slotProps" class="contact-us__image">
        <img src="~/assets/images/home/mobile/building.webp" :="slotProps" />
      </v-image>
    </template>
    <template #title>
      {{ $t('contact-us.title.1') }}
      <span class="contact-us__title--blue">
        {{ $t('contact-us.title.2') }}
      </span>
    </template>
    <template #description>
      <p class="contact-us__text">
        {{ $t('contact-us.text') }}
      </p>
    </template>
  </v-section-heading-image>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const { sm } = useResponsive()
    return { sm }
  }
})
</script>

<style lang="scss">
.contact-us {
  &__image {
    @apply max-w-[80%] lg:max-w-sm animate-floating;
  }
  &__title {
    &--blue {
      @apply text-primary;
    }
  }
}
</style>

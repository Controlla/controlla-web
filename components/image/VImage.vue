<template>
  <figure>
    <slot :alt="alt" loading="lazy" />
    <img
      v-if="!$slots.default"
      :src="src"
      :alt="alt"
      loading="lazy"
      :class="{ 'image__height-full': heightFull }"
    />
    <figcaption>{{ alt }}</figcaption>
  </figure>
</template>

<script>
export default defineComponent({
  name: 'VImage',
  props: {
    alt: {
      type: String,
      default: 'Controlla connecting dots'
    },
    src: {
      type: String,
      default: ''
    },
    heightFull: {
      type: Boolean,
      default: false
    }
  },
  emits: ['onClick']
})
</script>

<style lang="scss">
figure {
  & figcaption {
    @apply hidden;
  }
  & .image {
    &__height-full {
      @apply h-full;
    }
  }
}
</style>

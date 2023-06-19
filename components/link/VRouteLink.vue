<template>
  <nuxt-link
    :class="[
      'route-link',
      `route-link--variant-${variant}`,
      `route-link--style-${color}`
    ]"
    :to="to"
    v-bind="$attrs"
  >
    <slot />
  </nuxt-link>
</template>

<script>
import { linkProps } from './config'

export default defineComponent({
  name: 'VRouteLink',
  props: { ...linkProps }
})
</script>

<style lang="scss">
.route-link {
  @apply font-poppins font-light text-base lg:text-lg leading-5;
  &--style {
    &-light {
      @apply after:bg-primary;
    }
  }
  &--active {
    @apply font-bold;
  }
  &--variant {
    &-default {
      @apply no-underline;
    }
    &-underline {
      @apply no-underline relative transition-all duration-300 text-black;
      @apply after:content-[''] after:absolute after:w-full after:h-[2px];
      @apply after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300;
      @apply hover:after:scale-x-100 hover:after:origin-bottom-left;
    }
    &-button {
      @apply py-4 px-10;
      @apply rounded-full;
      @apply font-poppins font-semibold;
      @apply bg-dark text-white text-center;
      @apply transition-all duration-300 ease-in-out;
      &:hover {
        @apply shadow-md shadow-primary;
      }
    }
  }
}
</style>

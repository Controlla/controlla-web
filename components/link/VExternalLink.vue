<template>
  <a
    :class="[
      'route-link',
      `route-link--variant-${variant}`,
      `route-link--style-${color}`
    ]"
    :href="to"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>

<script>
import { linkProps } from './config'

export default defineComponent({
  name: 'VExternalLink',
  props: { ...linkProps }
})
</script>

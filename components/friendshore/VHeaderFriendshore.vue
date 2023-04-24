<template>
  <v-banner>
    <template #title>
      {{ $t('beyond.title') }}
      <span>
        {{ $t('beyond.title_helper') }}
      </span>
    </template>
    <template #text>
      <h2
        v-motion
        :="sm ? animations.noop : animations.popVisibleOnce"
        class="header__text"
      >
        {{ $t('beyond.quality') }}
      </h2>
    </template>
    <template #image>
      <v-image :src="beyondImageUrl" class="header__image" />
    </template>
  </v-banner>
</template>

<script>
import beyondImageUrl from '@/assets/images/home/beyond.webp'

export default defineComponent({
  name: 'VHeaderFriendshore',
  setup() {
    const { sm } = useResponsive()
    const { animations } = useMotionAnimation()
    return {
      beyondImageUrl,
      sm,
      animations
    }
  }
})
</script>

<style lang="scss">
.header {
  &__text {
    @apply mt-6 text-center lg:text-left;
  }
  &__image {
    @apply animate-floating;
  }
}
</style>

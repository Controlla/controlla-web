<template>
  <div :class="['avatar', `avatar--type-${type}`]">
    <v-image
      v-motion
      :="sm ? animations.noop : animations.slideVisibleOnceTop"
      :src="avatar"
      class="avatar__image"
    />
    <div :class="['avatar__information', `avatar__information--type-${type}`]">
      <span
        v-if="Boolean(name.trim())"
        v-motion
        :="sm ? animations.noop : animations.fadeVisibleOnce"
        class="avatar__information__name"
      >
        {{ name }}
      </span>
      <span
        v-motion
        :="sm ? animations.noop : animations.fadeVisibleOnce"
        class="avatar__information__position"
      >
        {{ position }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: null
    },
    position: {
      type: String,
      required: true
    },
    type: {
      type: String as PropType<'vertical' | 'horizontal'>,
      default: 'horizontal'
    }
  },
  setup() {
    const { sm } = useResponsive()
    const { animations } = useMotionAnimation()

    return {
      sm,
      animations
    }
  }
})
</script>

<style lang="scss" scoped>
.avatar {
  @apply flex items-center;
  &--type {
    &-vertical {
      @apply flex-col justify-center;
    }
  }
  &__image {
    @apply max-w-[70px];
  }
  &__information {
    @apply flex flex-col text-dark;
    &--type {
      &-vertical {
        @apply items-center mt-3 text-center;
      }
      &-horizontal {
        @apply items-start ml-4;
      }
    }
    &__name {
      @apply font-bold;
    }
    &__position {
      @apply font-thin;
    }
  }
}
</style>

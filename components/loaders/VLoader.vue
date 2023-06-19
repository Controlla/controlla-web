<template>
  <div class="loader">
    <transition name="slide-to-right">
      <div
        v-if="!store.isDOMloaded && !store.wasDOMloaded"
        class="loader__content loader__content--primary"
      />
    </transition>
    <transition name="slide-to-left">
      <div
        v-if="!store.isDOMloaded && !store.wasDOMloaded"
        class="loader__content loader__content--primary"
      />
    </transition>
    <transition name="slide-to-top">
      <div
        v-if="!store.isDOMloaded && !store.wasDOMloaded"
        class="loader__content loader__content--white"
      >
        <v-image v-slot="slotProps" class="loader__content--blue__logo">
          <img src="~/assets/images/logo/logo.svg" :="slotProps" />
        </v-image>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { useRootStore } from '@/store'

export default defineComponent({
  setup() {
    const store = useRootStore()

    return { store }
  }
})
</script>

<style lang="scss" scoped>
.loader {
  &__content {
    @apply h-screen w-screen;
    @apply fixed top-0 left-0 right-0 z-40;
    @apply transition-all duration-700 ease-[cubic-bezier(1,0.5,0.8,1)] delay-200;
    &--white {
      @apply bg-white flex justify-center items-center;
    }
    &--primary {
      @apply bg-secondary-light delay-300;
    }
  }
}
</style>

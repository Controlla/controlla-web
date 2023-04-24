<template>
  <div class="card">
    <div class="card__wrapper">
      <slot name="icon" />
      <header class="card__wrapper__header">
        <slot name="header" />
      </header>
      <slot name="body" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VCard'
})
</script>

<style lang="scss">
.card {
  @apply w-full h-full;
  @apply rounded-3xl overflow-hidden shadow-xl;
  &__wrapper {
    @apply p-[34px] h-full flex flex-col justify-center;
  }
}
</style>

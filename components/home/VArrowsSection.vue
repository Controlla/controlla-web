<template>
  <div
    :class="[
      'arrow-join',
      `arrow-join--side-${side}-${arrowVariant}`,
      `arrow-join--position-${position}`
    ]"
  >
    <v-image v-show="sm" v-slot="slotProps">
      <img
        src="~/assets/images/home/mobile/arrow_join_sections.svg"
        :="slotProps"
      />
    </v-image>
    <v-image
      v-show="!sm && side === 'left' && arrowVariant === 'default'"
      v-slot="slotProps"
    >
      <img
        src="~/assets/images/home/desktop/arrow_left_join_sections.svg"
        :="slotProps"
      />
    </v-image>
    <v-image v-show="!sm && side === 'right'" v-slot="slotProps">
      <img
        src="~/assets/images/home/desktop/arrow_right_join_sections.svg"
        :="slotProps"
      />
    </v-image>
    <v-image
      v-show="!sm && side === 'left' && arrowVariant === 'large'"
      v-slot="slotProps"
    >
      <img
        src="~/assets/images/home/desktop/arrow_left_join_section_2.svg"
        :="slotProps"
      />
    </v-image>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    side: {
      type: String as PropType<'right' | 'left'>,
      default: 'left'
    },
    position: {
      type: String as PropType<'top' | 'bottom'>,
      default: 'bottom'
    },
    arrowVariant: {
      type: String as PropType<'default' | 'large'>,
      default: 'default'
    }
  },
  setup() {
    const { sm } = useResponsive()

    return { sm }
  }
})
</script>

<style lang="scss" scoped>
.arrow-join {
  @apply absolute z-20;
  &--side {
    &-left {
      &-large {
        @apply left-[10%] xl:left-[17.75rem];
      }
      &-default {
        @apply left-[10%] xl:left-[6.75rem];
      }
    }
    &-right {
      &-large {
        @apply left-[10%] xl:left-[17.75rem];
      }
      &-default {
        @apply left-[10%] xl:left-[6.75rem];
      }
    }
  }
  &--position {
    &-top {
      @apply bottom-full translate-y-1/2 xl:translate-y-0;
    }
    &-bottom {
      @apply top-full translate-y-9;
    }
  }
}
</style>

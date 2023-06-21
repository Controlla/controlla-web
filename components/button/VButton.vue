<template>
  <button
    :class="[
      'nuxt-button',
      `nuxt-button--variant-${variant}`,
      `nuxt-button--rounded-${rounded}`,
      `nuxt-button--padding-${paddingSize}`,
      {
        'nuxt-button--shadow': shadowOnHover,
        'nuxt-button--icon': Boolean(icon),
        'nuxt-button--loading': loading
      }
    ]"
    :disabled="disabled || loading"
    @click="$emit('onClick')"
  >
    <template v-if="$slots.default">
      <span class="nuxt-button__text">
        <slot />
      </span>
    </template>
    <i
      v-if="Boolean(icon)"
      :class="[
        'eva',
        `eva-${icon}`,
        `nuxt-button__icon--size-${iconSize}`,
        `nuxt-button__icon--color-${iconColor}`
      ]"
    />
    <transition name="fade">
      <span v-if="loading" class="nuxt-button__loading">
        <svg
          class="nuxt-button__loading__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"
          />
        </svg>
      </span>
    </transition>
  </button>
</template>

<script>
export default defineComponent({
  name: 'VButton',
  props: {
    variant: {
      type: String,
      default: 'default'
    },
    rounded: {
      type: String,
      default: 'md'
    },
    shadowOnHover: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    iconSize: {
      type: String,
      default: 'md'
    },
    iconColor: {
      type: String,
      default: 'primary'
    },
    paddingSize: {
      type: String,
      default: 'md'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['onClick']
})
</script>

<style lang="scss" scoped>
.nuxt-button {
  @apply flex justify-center relative overflow-hidden;
  &__text {
    @apply font-poppins font-semibold text-center;
  }
  &--padding {
    &-sm {
      @apply py-2 px-4;
    }
    &-md {
      @apply py-2 px-5;
    }
    &-lg {
      @apply py-2 px-6;
    }
    &-xl {
      @apply py-2 px-7;
    }
    &-2xl {
      @apply py-2 px-8;
    }
    &-equals {
      @apply p-2;
    }
    &-unset {
      @apply p-0;
    }
  }
  &--variant {
    &-default {
      @apply bg-primary text-white;
    }
    &-secondary {
      @apply bg-secondary text-white;
    }
    &-transparent {
      @apply bg-transparent;
    }
  }
  &--shadow {
    @apply transition-all duration-300 ease-in-out;
    &:hover {
      @apply shadow-md shadow-primary;
    }
  }
  &--rounded {
    &-sm {
      @apply rounded-sm;
    }
    &-md {
      @apply rounded-md;
    }
    &-lg {
      @apply rounded-lg;
    }
    &-xl {
      @apply rounded-xl;
    }
    &-full {
      @apply rounded-full;
    }
  }
  &__icon {
    & span {
      @apply mr-2;
    }
    &--size {
      &-sm {
        @apply text-[14px];
      }
      &-md {
        @apply text-[16px];
      }
      &-lg {
        @apply text-[18px];
      }
      &-xl {
        @apply text-[24px];
      }
      &-2xl {
        @apply text-[26px];
      }
      &-3xl {
        @apply text-[28px];
      }
      &-4xl {
        @apply text-[30px];
      }
      &-5xl {
        @apply text-[40px];
      }
    }
    &--color {
      &-primary {
        @apply text-primary;
      }
      &-secondary {
        @apply text-secondary;
      }
      &-white {
        @apply text-white;
      }
    }
  }
  &:disabled {
    @apply opacity-50;
    @apply cursor-not-allowed;
  }
  &--loading {
    &:disabled {
      @apply opacity-100;
    }
  }
  &__loading {
    @apply absolute top-0 left-0 w-full h-full;
    @apply flex items-center justify-center bg-secondary;
    &__icon {
      @apply w-6 animate-spin fill-white;
    }
  }
}
</style>

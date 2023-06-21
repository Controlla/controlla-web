<template>
  <section
    v-motion
    :="sm ? animations.fadeVisibleOnce : animations.noop"
    class="heading-image"
  >
    <article
      :class="[
        'heading-image__content',
        {
          'heading-image__content--invert': invertOnMobile
        }
      ]"
    >
      <slot name="arrowTop" />
      <div
        v-if="$slots.image"
        v-motion
        :="sm ? animations.noop : animations.slideVisibleOnceLeft"
        :class="[
          'heading-image__content__image',
          `heading-image__content__image--order-${order.image}`,
          `heading-image__content__image--size-${sizes.image}`
        ]"
      >
        <slot name="image" />
      </div>
      <article
        :class="[
          'heading-image__content__heading',
          `heading-image__content__heading--order-${order.heading}`,
          `heading-image__content__heading--size-${sizes.heading}`
        ]"
      >
        <header
          v-if="$slots.title"
          class="heading-image__content__heading__title"
        >
          <span class="heading-image__content__heading__title--helper">
            <slot name="helper" />
          </span>
          <h2
            v-motion
            :="sm ? animations.noop : animations.slideVisibleOnceRight"
          >
            <slot name="title" />
          </h2>
        </header>
        <div
          v-if="$slots.description"
          v-motion
          :="sm ? animations.noop : animations.slideVisibleOnceRight"
          :class="[
            'heading-image__content__heading__description',
            {
              'heading-image__content__heading__description--spacing':
                $slots.footer
            }
          ]"
        >
          <slot name="description" />
        </div>
        <footer
          v-if="$slots.footer"
          v-motion
          :="sm ? animations.noop : animations.slideVisibleOnceBottom"
          class="heading-image__content__heading__footer"
        >
          <slot name="footer" />
        </footer>
      </article>
      <slot />
    </article>
  </section>
</template>

<script>
export default defineComponent({
  props: {
    invertOnMobile: {
      type: Boolean,
      default: false
    },
    noContainer: {
      type: Boolean,
      default: false
    },
    sizes: {
      type: Object,
      default: () => ({
        image: 6,
        heading: 6
      })
    },
    order: {
      type: Object,
      default: () => ({
        heading: 2,
        image: 1
      })
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

<style lang="scss">
.heading-image {
  @apply py-[60px];
  &__content {
    @apply container-fluid relative;
    @apply flex flex-col md:flex-row justify-around items-center gap-4;
    &--invert {
      @apply flex-col-reverse md:flex-row;
    }
    &__image {
      @apply flex items-center justify-center;
      @apply w-full relative z-10;
      &--size {
        &-4 {
          @apply lg:w-4/12;
        }
        &-6 {
          @apply lg:w-6/12;
        }
      }
      &--order {
        &-1 {
          @apply order-1;
        }
        &-2 {
          @apply order-2;
        }
        &-3 {
          @apply order-3;
        }
      }
    }
    &__heading {
      @apply w-full lg:w-6/12 mb-4 md:mb-0;
      @apply relative;
      &--size {
        &-4 {
          @apply lg:w-4/12;
        }
        &-6 {
          @apply lg:w-6/12;
        }
        &-8 {
          @apply lg:w-8/12;
        }
      }
      &--order {
        &-1 {
          @apply order-1;
        }
        &-2 {
          @apply order-2;
        }
        &-3 {
          @apply order-3;
        }
      }
      &__title {
        @apply mb-4;
        &--helper {
          @apply mb-4 text-lg block text-center md:text-left;
          @apply bg-clip-text bg-bg-gradient-text;
          @apply text-fill-transparent;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        & h2 {
          @apply text-center md:text-left font-bold text-dark;
          @apply text-2xl md:text-4xl xl:text-[42px] md:leading-[3rem];
        }
      }
      &__description {
        &--spacing {
          @apply mb-4 md:mb-10;
        }
        & p {
          @apply text-center md:text-left text-dark text-lg md:text-2xl first:mt-6;
        }
      }
      &__footer {
        @apply flex justify-center md:justify-start;
      }
    }
  }
}
</style>

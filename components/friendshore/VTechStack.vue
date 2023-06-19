<template>
  <section class="tech-stack">
    <div class="tech-stack__image tech-stack__image--php">
      <v-image v-slot="slotProps">
        <img src="~/assets/images/tech/php.png" :="slotProps" />
      </v-image>
    </div>
    <div class="tech-stack__image tech-stack__image--react">
      <v-image v-slot="slotProps">
        <img src="~/assets/images/tech/react.png" :="slotProps" />
      </v-image>
    </div>
    <div class="tech-stack__image tech-stack__image--java">
      <v-image v-slot="slotProps">
        <img src="~/assets/images/tech/java.png" :="slotProps" />
      </v-image>
    </div>
    <div class="tech-stack__image tech-stack__image--phyton">
      <v-image v-slot="slotProps">
        <img src="~/assets/images/tech/phyton.png" :="slotProps" />
      </v-image>
    </div>
    <div class="tech-stack__image tech-stack__image--laravel">
      <v-image v-slot="slotProps">
        <img src="~/assets/images/tech/laravel.png" :="slotProps" />
      </v-image>
    </div>
    <div class="tech-stack__image tech-stack__image--vue">
      <v-image v-slot="slotProps">
        <img src="~/assets/images/tech/vue.png" :="slotProps" />
      </v-image>
    </div>
    <div class="tech-stack__image tech-stack__image--flutter">
      <v-image v-slot="slotProps">
        <img src="~/assets/images/tech/flutter.png" :="slotProps" />
      </v-image>
    </div>
    <article v-motion-fade-visible-once class="tech-stack__content">
      <header class="tech-stack__content__header">
        <h2 class="tech-stack__content__header__title">
          {{ $t('tech-stack.title') }}
        </h2>
        <p class="tech-stack__content__header__text">
          {{ $t('tech-stack.text.1') }}
          <span>
            {{ $t('tech-stack.text.2') }}
          </span>
          {{ $t('tech-stack.text.3') }}
        </p>
      </header>
    </article>
  </section>
</template>

<script>
export default defineComponent({
  name: 'VTechStack',
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
.tech-stack {
  @apply py-12 min-h-[40vh] overflow-hidden;
  @apply flex items-center relative;
  &__content {
    @apply container-fluid;
    &__header {
      @apply relative z-20;
      &__title {
        @apply text-center font-medium;
        @apply text-2xl md:text-4xl xl:text-[42px] md:leading-[3rem];
      }
      &__text {
        @apply text-dark text-lg md:text-2xl text-center mt-6;
        & span {
          @apply text-primary;
        }
      }
    }
  }
  &__image {
    @apply absolute z-[0] max-w-[80px] md:max-w-[100px] lg:max-w-[120px];
    & figure {
      @apply animate-floating;
    }
    &--php {
      @apply top-4 left-0 rotate-45;
    }
    &--react {
      @apply top-0 left-0 translate-x-full translate-y-full -rotate-[35deg];
    }
    &--java {
      @apply top-0 left-0 translate-y-[200%] -rotate-[25deg];
    }
    &--phyton {
      @apply bottom-0 left-0 translate-x-[200%];
    }
    &--laravel {
      @apply right-0 top-0 rotate-45 -translate-x-full;
    }
    &--vue {
      @apply right-0 top-0 -rotate-[35deg] translate-y-full;
    }
    &--flutter {
      @apply right-0 top-0 -rotate-[15deg] translate-y-[200%] -translate-x-full;
    }
  }
}
</style>

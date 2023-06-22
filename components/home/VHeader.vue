<template>
  <header class="main-header">
    <section
      v-motion="sm ? animations.fade : animations.noop"
      class="main-header__content"
    >
      <h1
        v-motion="sm ? animations.noop : animations.slideTop"
        class="main-header__content__title"
      >
        {{ $t('header.title') }}
        <span>
          {{ $t('header.title_helper') }}
        </span>
      </h1>
      <h2
        v-motion="sm ? animations.noop : animations.slideBottom"
        class="main-header__content__subtitle"
      >
        {{ $t('header.description.1') }}
        <span>
          {{ $t('header.description.2') }}
        </span>
        {{ $t('header.description.3') }}
        <span>
          {{ $t('header.description.4') }}
        </span>
        {{ $t('header.description.5') }}
        <span>
          {{ $t('header.description.6') }}
        </span>
      </h2>
      <div
        v-motion="sm ? animations.noop : animations.slideTop"
        class="main-header__content__button"
      >
        <v-button rounded="full" variant="dark" padding-size="3xl" @on-click="onOpen">
          {{ $t('navigation.contact_us') }}
        </v-button>
      </div>
      <footer class="main-header__content__image">
        <v-image
          v-show="sm"
          v-slot="slotProps"
          class="main-header__content__image__view"
        >
          <img src="~/assets/images/header/mobile/view.png" :="slotProps" />
        </v-image>
        <v-image
          v-show="!sm"
          v-slot="slotProps"
          class="main-header__content__image__view"
        >
          <img src="~/assets/images/header/desktop/view.png" :="slotProps" />
        </v-image>
      </footer>
    </section>
  </header>
</template>

<script lang="ts">
export default defineComponent({
  name: 'VHeader',
  setup() {
    const { sm } = useResponsive()
    const { animations } = useMotionAnimation()
    const { onOpen } = useTypeformPopup();

    return {
      animations,
      sm,
      onOpen
    }
  }
})
</script>

<style lang="scss">
.main-header {
  @apply w-screen h-screen;
  @apply bg-header-mobile md:bg-header bg-cover bg-center bg-no-repeat;

  &__content {
    @apply container-fluid h-full w-full flex flex-col items-center justify-center;
    @apply relative;

    &__title {
      @apply flex flex-col justify-center text-center;

      & span {
        @apply mt-2 lg:mt-3 xl:mt-6;
      }
    }

    &__subtitle {
      @apply max-w-[47rem] text-center mt-6;
    }

    &__button {
      @apply flex items-center justify-center mt-6;
    }

    &__image {
      @apply mt-6 md:mt-0 md:absolute md:translate-y-[75%];
      &__view {
        @apply animate-floating w-[250px] md:w-auto md:max-w-screen-md;
      }
    }
  }
}
</style>

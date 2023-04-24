<template>
  <nav :ref="register" :class="['navbar', `navbar--variant-${variant}`]">
    <section v-motion-fade-visible-once class="navbar__content">
      <nuxt-link to="/">
        <v-image
          :src="logo"
          class="navbar__content__logo navbar__content__logo--default"
        />
        <v-image
          :src="logoMobile"
          class="navbar__content__logo navbar__content__logo--mobile"
        />
      </nuxt-link>
      <v-navigation />
      <template v-if="sm">
        <v-button
          class="navbar__content__button"
          padding-size="unset"
          variant="transparent"
          @onClick="store.toggleMenu(true)"
        >
          <v-image :src="menuIcon" />
        </v-button>
      </template>
    </section>
  </nav>
</template>

<script>
import logo from '@/assets/images/logo/logo.svg'
import logoMobile from '@/assets/images/logo/logoMobile.svg'
import menuIcon from '@/assets/images/icons/menu.png'
import { useRootStore } from '@/store'

export default defineComponent({
  name: 'VNavbar',
  setup() {
    const store = useRootStore()
    const { sm } = useResponsive()
    const route = useRoute()

    const { register } = useScroll({
      offset: 100,
      customClass: 'navbar--scrolling',
      direction: true
    })

    const variant = computed(() =>
      route.name === 'index' ? 'default' : 'transparent'
    )

    return {
      sm,
      logo,
      logoMobile,
      register,
      variant,
      menuIcon,
      store
    }
  }
})
</script>

<style lang="scss">
.navbar {
  @apply fixed top-0 left-0 z-30 w-full translate-y-0 transition-all duration-500;
  @apply bg-transparent w-full py-3 md:py-6 lg:py-8;
  &--variant {
    &-default {
      @apply bg-base;
    }
    &-transparent {
      @apply bg-transparent;
    }
  }
  &__content {
    @apply container-fluid;
    @apply flex items-center justify-between;
    &__logo {
      @apply md:w-[200px] xl:w-[250px];
      &--default {
        @apply hidden md:block;
      }
      &--mobile {
        @apply md:hidden;
      }
    }
    &__button {
      @apply md:hidden;
    }
  }
}

[data-scroll-direction='down'] {
  & .navbar {
    @apply md:translate-y-[-100%] shadow-lg bg-base;
  }
}
[data-scroll-direction='up'] {
  & .navbar {
    @apply shadow-lg bg-base;
  }
}
</style>

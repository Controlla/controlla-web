<template>
  <aside class="slide-menu">
    <transition name="fade">
      <div
        v-if="store.isMenuOpen && sm"
        class="slide-menu__overlay"
        @click="store.toggleMenu(false)"
      />
    </transition>
    <transition name="slide-from-left">
      <div v-if="store.isMenuOpen && sm" class="slide-menu__content">
        <header class="slide-menu__content__header">
          <v-button
            padding-size="unset"
            variant="transparent"
            @onClick="store.toggleMenu(false)"
          >
            <v-image :src="closeIcon" />
          </v-button>
        </header>
        <ul class="slide-menu__content__navigation" role="list">
          <li
            class="slide-menu__content__navigation__item"
            @click="store.toggleMenu(false)"
          >
            <nuxt-link to="/">
              <v-image :src="logo" class="slide-menu__content__logo" />
            </nuxt-link>
          </li>
          <li
            v-for="link in globalNavigation"
            :key="link.id"
            class="slide-menu__content__navigation__item"
            role="listitem"
            @click="store.toggleMenu(false)"
          >
            <v-route-link
              :to="link.url"
              :variant="link.type === 'link' ? 'underline' : 'button'"
            >
              {{ link.name }}
            </v-route-link>
          </li>
        </ul>
      </div>
    </transition>
  </aside>
</template>

<script>
import { useRootStore } from '@/store'
import closeIcon from '@/assets/images/icons/close.png'
import logo from '@/assets/images/logo/logo.svg'

export default defineComponent({
  name: 'VAsideMenu',
  setup() {
    const { globalNavigation } = useNavigationMenu()
    const store = useRootStore()
    const { sm } = useResponsive()

    return {
      sm,
      store,
      closeIcon,
      logo,
      globalNavigation
    }
  }
})
</script>

<style lang="scss" scoped>
.slide-menu {
  &__overlay {
    @apply bg-black bg-opacity-75;
    @apply fixed top-0 right-0 h-full w-full z-[109];
  }
  &__content {
    @apply p-6;
    @apply bg-base text-dark;
    @apply fixed top-0 right-0 bottom-0 z-[110];
    @apply transition-all duration-500 ease-in-out w-full md:w-3/4 md:max-w-sm;
    &__header {
      @apply flex justify-end;
    }
    &__navigation {
      @apply flex flex-col items-end py-12 relative;
      &__item {
        @apply w-full flex justify-end py-4;
        @apply last:absolute last:-bottom-1/2 last:-translate-y-full;
        & a {
          @apply text-lg;
        }
      }
    }
  }
}
</style>

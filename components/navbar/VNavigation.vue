<template>
  <ul class="navigation" role="list">
    <li
      v-for="link in globalNavigation"
      :key="link.id"
      class="navigation__item"
      role="listitem"
    >
      <v-route-link
        v-if="link.type === 'link'"
        :to="link.url"
        :variant="link.type === 'link' ? 'underline' : 'button'"
      >
        {{ link.name }}
      </v-route-link>
      <v-button v-else rounded="full" variant="dark" padding-size="3xl" @on-click="onOpen">
        {{ link.name }}
      </v-button>
    </li>
  </ul>
</template>

<script>
export default defineComponent({
  name: 'VNavigation',
  setup() {
    const { globalNavigation } = useNavigationMenu()
    const { onOpen } = useTypeformPopup();

    return { globalNavigation, onOpen }
  }
})
</script>

<style lang="scss" scoped>
.navigation {
  @apply hidden md:flex items-center;
  &__item {
    @apply mr-10 last:mr-0;
  }
}
</style>

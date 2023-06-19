<template>
  <ul class="navigation" role="list">
    <li
      v-for="link in globalNavigation"
      :key="link.id"
      class="navigation__item"
      role="listitem"
    >
      <v-route-link
        :to="link.url"
        :variant="link.type === 'link' ? 'underline' : 'button'"
      >
        {{ link.name }}
      </v-route-link>
    </li>
  </ul>
</template>

<script>
export default defineComponent({
  name: 'VNavigation',
  setup() {
    const { globalNavigation } = useNavigationMenu()

    return { globalNavigation }
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

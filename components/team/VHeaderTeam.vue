<template>
  <v-banner>
    <template #title>
      {{ $t('team.title.1') }}
      <span>
        {{ $t('team.title.2') }}
      </span>
    </template>
    <template #image>
      <v-image :src="teamUrlImage" class="header-team__image" />
    </template>
  </v-banner>
</template>

<script>
import teamUrlImage from '@/assets/images/team/team.webp'

export default defineComponent({
  name: 'VHeaderTeam',
  setup() {
    return {
      teamUrlImage
    }
  }
})
</script>

<style lang="scss">
.header-team {
  &__image {
    @apply animate-floating;
  }
}
</style>

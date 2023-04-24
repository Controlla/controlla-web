<template>
  <v-main-container>
    <v-header-team />
    <v-team-grid />
    <v-team-carrousel />
    <v-about-us />
    <v-counter />
    <v-trusted-partners />
  </v-main-container>
</template>

<script lang="ts">
import { overwriteSEO } from '~~/seo'

export default defineComponent({
  name: 'VTeam',
  setup() {
    useDOMcontentLoader()
    useHead({
      ...overwriteSEO({
        title: 'Meet the team of problem solvers',
        description:
          'We are a mexican based Software development company. Helping companies solve problems with end to end technology and design.',
        url: '/team'
      })
    })
    return {}
  }
})
</script>

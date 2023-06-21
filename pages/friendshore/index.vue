<template>
  <v-main-container>
    <v-header-friendshore />
    <v-our-services />
    <v-why-work />
    <v-tech-stack />
  </v-main-container>
</template>

<script lang="ts">
import { overwriteSEO } from '~~/seo'

export default defineComponent({
  name: 'VFriendshore',
  setup() {
    useDOMcontentLoader()
    useHead({
      ...overwriteSEO({
        title: 'We go Beyond borders',
        description:
          'Timely delivery of projects is at our very core, we implement sprint management and continuous feedback, following a SCRUM methodology.',
        url: '/friendshore'
      })
    })
    return {}
  }
})
</script>

<script setup lang="ts">
import type Link from '~/interfaces/Link'

const { t } = useI18n();
const links: Array<Link> = useLinks(t)

defineProps<{
    isVisible: boolean
}>()
</script>

<template lang="pug">
div(v-if="isVisible" class=`
    md:hidden
    flex
    flex-col
    items-center
`)
    NuxtLink(
        v-for="link in links"
        @click='$emit("closeMenu")' 
        :to='link.to' 
        class=`
        my-2
    `) {{ link.text }}
    ContactButton(is-mobile)
</template>

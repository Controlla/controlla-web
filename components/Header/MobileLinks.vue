<script setup lang="ts">
import type Link from '~/interfaces/Link'

const { t } = useI18n();
const links: Array<Link> = useLinks(t)

defineProps<{
    isVisible: boolean
}>()
</script>

<template lang="pug">
nav(v-if="isVisible" class=`
    md:hidden
    absolute
    bg-white
    bottom-[-17rem]
    w-[100%]
    flex
    flex-col
    items-center
    pb-10
`)
    NuxtLink(
        v-for="link in links"
        @click='$emit("closeMenu")' 
        :to='link.to' 
        class=`
        my-5
    `) {{ link.text }}
    ContactButton(is-mobile)
</template>

<script setup lang="ts">
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
    NuxtLink(to='/' class=`
        my-2
    `) {{ $t('home') }}
    NuxtLink(to='/team' class=`
        my-2 
    `) {{ $t('team') }}
    NuxtLink(to='/friendshore' class=`
        my-2 
    `) {{ $t('friendshore') }}
    ContactButton(is-mobile)
</template>

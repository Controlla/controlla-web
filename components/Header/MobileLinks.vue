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
    `) {{ $t(&quot;home&quot;) }}
    NuxtLink(to='/team' class=`
        my-2 
    `) {{ $t(&quot;team&quot;) }}
    NuxtLink(to='/friendshore' class=`
        my-2 
    `) {{ $t(&quot;friendshore&quot;) }}
    ContactButton(is-mobile)
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const areMobileLinksVisible: Ref<boolean> = ref(false)

function toogleMenu(): void {
  areMobileLinksVisible.value = !areMobileLinksVisible.value
}
</script>

<template lang="pug">
header(class=`
  w-screen
  bg-white
  h-24
  flex
  justify-between
  fixed
  z-40
`)
  NuxtLink(
    to="/"
    class=`
      flex
      flex-row
    `
  )
    NuxtImg(
      loading="lazy"
      src='/img/logo.svg' 
      alt='logo controlla' 
      class=`
        w-[12rem]
        ml-6
      `
    )
  HeaderDesktopLinks
  HeaderHamburgerButton(@menuToogled="toogleMenu")
  HeaderMobileLinks(@closeMenu="toogleMenu" :is-visible="areMobileLinksVisible")
</template>

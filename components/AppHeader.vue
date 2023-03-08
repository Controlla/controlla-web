<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

const areMobileLinksVisible: Ref<boolean> = ref(false);

/* eslint-disable */
function toogleMenu(): void {
  areMobileLinksVisible.value = !areMobileLinksVisible.value;
}
/* eslint-enable */
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
    img(
      src='@/assets/img/logo.webp' 
      alt='logo controlla' 
      class=`
        w-[12rem]
        ml-6
        h-10
        my-auto
      `
    ) 
  HeaderDesktopLinks
  HeaderHamburgerButton(@menuToogled="toogleMenu")
  HeaderMobileLinks(@closeMenu="toogleMenu" :is-visible="areMobileLinksVisible")
</template>

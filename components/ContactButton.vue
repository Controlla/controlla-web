<script setup lang="ts">
import { createPopup } from "@typeform/embed";
import type { EmbedPopup } from "@typeform/embed/types/base";

import "@typeform/embed/build/css/popup.css";

const { toggle } : EmbedPopup = createPopup("BYWHV4");

function contact(): void {
  toggle();
}

defineProps<{
    isMobile?: boolean
}>()
</script>

<template lang="pug">
div(class=`
  flex 
  flex-col 
  justify-center 
  items-center
`)
  button(@click='contact' class=`
    bg-black
    text-white
    rounded-full
    px-7
    font-semibold
    text-lg
    max-h-[50px]
    max-w-[200px]
    p-3
  `
  :class={
  }
  ) {{ $t(&quot;contact_us&quot;) }}
</template>

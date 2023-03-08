<script setup lang="ts">
import type Link from "~/interfaces/Link";

const { t } = useI18n();
const links: Array<Link> = useLinks(t);
</script>

<template lang="pug">
nav(class=`
  hidden
  md:flex 
  md:justify-end 
  md:mr-5
`)
  NuxtLink(
    v-for="link in links"
    :to="link.to"
    class=`
    mx-6 
    my-auto
  `) {{ link.text }}
  ContactButton(is-header)
</template>

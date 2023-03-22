<template lang="pug">
section(class=`
  w-screen
  md:py-24
`)
  div(class=`
    flex
    justify-center
  `)
  TeamCarrousel
  h2(class=`
    text-3xl
    font-bold
    text-center
    my-6
  `) {{ $t('about_us') }}
  h1(class=`
    w-[90%]
    md:w-[70%]
    text-center
    m-auto
    text-lg
  `)  {{ $t('we_are_a') }}
    |  {{ $t('helping_companies') }}
</template>

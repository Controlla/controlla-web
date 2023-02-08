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
    text-center
    m-auto
  `)  {{ $t('we_are_a') }} 
    br
    |  {{ $t('helping_companies') }}
</template> 
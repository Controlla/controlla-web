<template lang="pug">
section(class=`
  pt-[12%] 
  px-[20%] 
  lg:px-[25%] 
  bg-white
  w-screen
  overflow-hidden
  mb-20
  md:mt-10
  max-w-screen-xl
`)
  h2(class=`
    lg:text-4xl 
    md:text-3xl 
    sm:text-2xl 
    lg:leading-relaxed 
    w-full
    text-center
    text-xl
    font-medium
    overflow-hidden
    leading-loose
  `)
    | {{ $t('we_partner_up') }} 
    span(class=`
      italic
      underline 
    `) {{ $t('high_end_tech') }}
    br
    |  {{ $t('we_ensure') }} 
    span(class=`
      font-semibold
      text-sky-500
    `) {{ $t('your_vision_achieves') }}
    |  {{ $t('on_your_business') }}
  div(class=`
    w-100%
    mt-[5rem] 
    flex
    justify-center
  `)
    NuxtImg(
      format="webp"
      src='/img/Luis.png' 
      alt='Luis' 
      class=`
        w-20
        h-20
    `)
    h3(class=`
      mt-4
      ml-6
    `)
      strong Luis R. Torres
      br
      span {{ $t('ceo_and') }}
</template>

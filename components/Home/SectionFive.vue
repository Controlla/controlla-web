<template lang="pug">
section(class=`
  bg-cyan-50
  w-screen
  relative
  justify-center
  overflow-hidden
  md:flex pt-[12%] 
  pb-20
`)
  div(class=`
    w-[25rem] 
    h-[25rem] 
    left-[6%] 
    top-[15%] 
    blur-[11rem] 
    rounded-full
    bg-violet-200
    absolute
    z-0
  `)
  div(class=`
    w-[25rem] 
    h-[25rem]
    left-[40%]
    top-[45%]
    blur-[11rem] 
    rounded-full
    bg-violet-100
    absolute
    z-0
  `)
  div(class=`
    w-[25rem] 
    h-[25rem]
    left-[75%] 
    top-[8%]
    blur-[11rem] 
    rounded-full
    bg-violet-200
    absolute
    z-0
  `)
  div(class=`
    px-[5%] 
    z-10
    relative
    md:px-0 
    md:w-[41vw] 
  `)
    span(class=`
      my-6
      text-sky-500
      text-xs
      md:text-xl 
    `) {{ $t('second') }}
    h2(class=`
      my-6
      text-2xl
      font-semibold
      overflow-y-hidden
      md:text-4xl 
    `) {{ $t('product_design') }}
    h2(class=`
      my-6
      text-base
      md:text-2xl 
    `) {{ $t('our_products') }}
      strong {{ $t('aesthetically_pleasing') }} 
      | {{ $t('we_believe') }}
    span(class=`
      text-base
      md:text-2xl 
    `) {{ $t('architecture') }} 
      br
      |  {{ $t('sketching') }}
      br
      |  {{ $t('design') }}
  NuxtImg(
    format="webp"
    loading="lazy"
    src='/img/second_step.png' 
    alt='second step' 
    class=`
      w-[90%] 
      z-10
      relative
      md:w-[41vw] 
      md:h-[30vw] 
  `)
</template>

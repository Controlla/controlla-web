<template lang="pug">
section(class=`
  flex
  flex-col
  flex-col-reverse
  md:flex-row
  md:justify-center 
  pt-[12%] 
  bg-white
  w-screen
  relative
  overflow-hidden
  pb-20
`)
  div(class=`
    w-[25rem] 
    h-[25rem] 
    left-[12%] 
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
    top-[50%] 
    blur-[11rem] 
    rounded-full
    bg-blue-100
    absolute
    z-0 
  `)
  div(class=`
    w-[25rem] 
    h-[25rem] 
    left-[70%] 
    top-[15%] 
    blur-[11rem] 
    rounded-full
    bg-violet-200
    absolute
    z-0
  `)
  NuxtImg(
    src='/img/first_step.png' 
    format="webp"
    loading="lazy"
    alt='first step' 
    class=`
      mt-10
      md:mt-0
      z-10
      relative
      md:w-[36vw] 
      md:h-[25vw] 
  `)
  div(class=`
    px-[5%] 
    md:px-0 
    md:w-[36vw] 
    z-10
    relative
  `)
    span(class=`
      my-6
      text-sky-500
      text-xs
      md:text-xl 
    `) {{ $t('first') }}
    h2(class=`
      my-6
      text-2xl
      font-semibold
      overflow-hidden
      md:text-4xl 
    `) {{ $t('ideation_and_evaluation') }}
    h2(class=`
      my-6
      text-base
      md:text-2xl 
    `) {{ $t('first_we') }} 
      |
      strong {{ $t('research_ideate') }} 
      |         {{ $t('your_product_features') }}
    span(class=`
      text-base
      md:text-2xl 
      marker:text-sky-400
    `) {{ $t('discovery') }} 
      br
      |         {{ $t('wireframe') }} 
      br
      |         {{ $t('scoping') }}
</template>

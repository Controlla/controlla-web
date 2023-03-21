<template lang="pug">
section(class=`
  flex
  flex-col
  md:flex-row
  md:justify-center 
  pt-[12rem] 
  md:pt-[10rem]
  bg-white
  w-screen
  relative
  pb-20
  text-base
  lg:text-xl
  2xl:text-2xl
  bg-[url('@/assets/img/frienshore_home_background.webp')]
  bg-cover
  bg-no-repeat
`)
  img(
    src='@/assets/img/first_step.webp' 
    alt='first step' 
    class=`
      hidden
      mt-10
      md:mt-0
      z-10
      relative
      md:inline
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
      text-sky-500
      text-xs
      md:text-sm 
      min-[480px]:px-4
      sm:px-0
    `) {{ $t('first') }}
    h2(class=`
      my-6
      text-2xl
      font-semibold
      overflow-hidden
      md:text-3xl 
    `) {{ $t('ideation_and_evaluation') }}
    h2(class=`
      my-6
    `) {{ $t('first_we') }} 
      |
      strong {{ $t('research_ideate') }} 
      |         {{ $t('your_product_features') }}
    span(class=`
      marker:text-sky-400
    `) {{ $t('discovery') }} 
      br
      |         {{ $t('wireframe') }} 
      br
      |         {{ $t('scoping') }}
  img(
    src='@/assets/img/first_step.webp' 
    alt='first step' 
    class=`
      w-[90%]
      z-10
      relative
      md:w-[41vw]
      md:h-[30vw]
      md:hidden
      sm:pt-10
  `)
  img(
    src="@/assets/img/line2_mobile.webp" 
    alt='arrow' 
    class=`
    absolute
    z-30
    bottom-[-8rem]
    left-[10%]
    sm:hidden
    min-[480px]:left-20
    min-[560px]:left-28
  `)
  img(
    src="@/assets/img/line2.webp" 
    alt='arrow' 
    class=`
    hidden 
    w-[20rem] 
    absolute 
    right-[30%]
    bottom-[-3rem]
    z-30 
    md:inline 
    md:w-[35rem] 
    md:bottom-[-8rem]
    md:right-[14%]
    lg:right-[23%]
    lg:bottom-[-10rem]
    xl:w-[44rem] 
    xl:bottom-[-15rem]
    xl:right-[32%]
  `)
</template>

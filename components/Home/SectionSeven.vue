<template lang="pug">
section(class=`
  pt-[12%] 
  bg-cyan-50
  w-screen
  relative
  justify-center
  overflow-hidden
  md:flex 
  pb-20
`)
  NuxtImg(
    src="/img/line3_mobile.svg" 
    alt='arrow' 
    class=`
      md:hidden
      absolute 
      right-[49.5%] 
      top-[-6rem] 
      z-30
  `)
  NuxtImg(
    src="/img/line2.svg" 
    alt='arrow' 
    class=`
    hidden 
    w-[25rem] 
    absolute 
    right-[40%] 
    top-[-7rem] 
    z-30 
    md:inline
    lg:w-[35rem]
    lg:top-[-10rem]
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
    relative
    z-10
    md:px-0
    md:w-[25vw] 
  `)
    span(class=`
      md:text-xl 
      my-6
      text-sky-500
      text-xs
    `) {{ $t('fourth') }}
    h2(class=`
      md:text-4xl 
      my-6
      text-2xl
      font-semibold
      overflow-y-hidden
    `) {{ $t('qa_test_and_launch') }}
    h2(class=`
      md:text-2xl 
      my-6
      text-base
    `) {{ $t('quality_stands') }} 
      strong {{ $t('preventing_error') }} 
      |  {{ $t('delivering_secure') }}
    span(class=`
      md:text-2xl
      text-base
    `) {{ $t('audit') }} 
      br
      |         {{ $t('automate') }} 
      br
      |         {{ $t('test') }}
  div(class=`
    flex
    justify-center
  `)
    NuxtImg(
      src='/img/fourth_step.png' 
      alt='fourth step' 
      class=`
      w-[60%] 
      md:w-[25vw] 
      md:h-[35vw] 
      relative
      z-10
    `)
</template>

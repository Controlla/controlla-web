<template lang="pug">
section(class=`
  pt-[12%] 
  bg-white
  w-screen
  relative
  justify-center
  overflow-hidden
  md:flex 
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
    top-[50%] 
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
  NuxtImg(
    src='/img/third_step.png' 
    alt='third step' 
    class=`
    w-[42vw] 
    h-[28vw] 
    hidden
    z-10
    md:inline 
  `)
  div(class=`
    px-[5%] 
    md:px-0 
    md:w-[42vw] 
    z-10
    relative
  `)
    span(class=`
      my-6
      text-sky-500
      text-xs
      md:text-xl 
    `) {{ $t('third') }}
    h2(class=`
      my-6
      text-2xl
      font-semibold
      overflow-y-hidden
      md:text-4xl 
    `) {{ $t('development') }}
    h2(class=`
      my-6
      text-base
      md:text-2xl 
    `) {{ $t('your_tailormade') }}
      strong {{ $t('deep_end') }}
      |  {{ $t('and_different_communication') }}
    span(class=`
      md:text-2xl
      text-base
    `) &bull; {{ $t('web_and_mobile') }} 
      br
      |  {{ $t('flutter') }}
      br
      |  {{ $t('jira') }} 
      br
      |  {{ $t('vue') }}
  NuxtImg(
    format="webp"
    loading="lazy"
    src='/img/third_step.png' 
    alt='third step' 
    class=`
    w-[90%] 
    px-[5%] 
    z-10
    relative
    md:hidden 
  `)
</template>

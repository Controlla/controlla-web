<template lang="pug">
section(class=`
  bg-teal-50
  min-h-screen
  absolute
  left-0
  overflow-hidden
  md:w-[200%] 
  md:left-[-50%]
  md:overflow-x-hidden
  md:rounded-t-[100%]
  md:min-h-[20vw]
  md:right-[-10%]
`)
  div(class=`
    w-[25rem]
    h-[25rem]
    left-[26%]
    top-[15%]
    blur-[11rem] 
    rounded-full
    bg-violet-300
    absolute
  `)
  div(class=`
    w-[25rem]
    h-[25rem]
    left-[45%]
    top-[-10%]
    blur-[11rem]
    rounded-full
    bg-blue-300
    absolute
  `)
  div(class=`
    w-[25rem]
    h-[25rem]
    left-[65%]
    top-[15%]
    blur-[11rem] 
    rounded-full
    bg-violet-300
    absolute
  `)
  div(class=`
    sm:mt-[4%]
    md:h-[60%]
    md:flex
    md:justify-center
    md:ml-[28%]
    mt-[20%] 
    block
    w-screen
    relative
  `)
    div(class=`
      px-[10%]
      md:px-[0]
      md:py-6 
      py-12
      flex
      justify-center
    `)
      NuxtImg(
        src='/img/logo.svg' 
        alt='logo controlla' 
        class=`
        w-[80%]
        md:w-[100%]
        max-w-[20rem]
      `)
    div(class=`
      mx-[5%]
    `)
      h3(class=`
        text-2xl
        mb-6
        text-center
      `) {{ $t('lets_work') }} 
        strong {{ $t('together') }}
      ContactButton
    div(class=`
      mx-[5%]
    `)
      h3(class=`
        pt-8
        md:pt-0
        text-xl
        leading-8
        text-center
        md:text-left 
      `) {{ $t('services') }} 
        br
        |  {{ $t('success') }} 
        br
        |  {{ $t('portfolio') }}
    div(class=`
      mx-[5%]
      md:mr-[6%]
    `)
      h3(class=`
        md:text-left 
        text-xl
        leading-8
        text-center
      `) {{ $t('Us') }} 
        br
        |  {{ $t('terms') }} 
        br
        |  {{ $t('privacy') }}
  div(class=`
    h-[25%] 
    w-screen
    relative
    md:ml-[25%]
    pt-10
  `)
    div(class=`
      flex
      justify-center
      mb-6
    `)
      NuxtLink(to='https://www.facebook.com/controlla.cuu')
        NuxtImg(
          src='/img/facebook.svg' 
          alt='logo facebook' 
          class=`
          mx-6
        `)
      NuxtLink(to='https://www.instagram.com/controlla_technologies/')
        NuxtImg(
          src='/img/instagram.svg' 
          alt='logo instagram' 
          class=`
          mx-6
        `)
      NuxtLink(to='https://www.linkedin.com/company/controlla/')
        NuxtImg(
          src='/img/linkedin.svg' 
          alt='logo linkedin' 
          class=`
          mx-6
        `)
    h3(class=`
      text-center
      text-xs
    `) {{ $t('copyright') }}
</template>

<template lang="pug">
section(class=`
  pb-10
  bg-white
  absolute
  left-0
  overflow-x-hidden
  md:w-[200%] 
  md:left-[-50%]
  md:overflow-x-hidden
  md:rounded-t-[100%]
  md:min-h-[20vw]
  md:right-[-10%]
  bg-[url('@/assets/img/frienshore_home_background.webp')]
  bg-cover
  bg-no-repeat
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
      img(
        src='@/assets/img/logo.webp' 
        alt='logo controlla' 
        class=`
        md:h-10
        md:w-[100%]
        max-w-[20rem]
      `)
    div(class=`
      mx-[5%]
    `)
      h3(class=`
        md:text-left 
        text-2xl
        my-6
        text-center
      `) {{ $t('lets_work') }} 
        strong {{ $t('together') }}
      ContactButton
    div(class=`
      mx-[5%]
      my-6
    `)
      h3(class=`
        text-xl
        leading-8
        text-center
        md:text-left 
      `) {{ $t('services') }} 
        br
        |  {{ $t('success') }} 
        br
        |  {{ $t('portfolio') }}
    .my-6(class=`
      mx-[5%]
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
    md:ml-[28%]
  `)
    div(class=`
      flex
      justify-center
      mb-6
    `)
      NuxtLink(to='https://www.facebook.com/controlla.cuu')
        img(
          src='@/assets/img/facebook.webp' 
          alt='logo facebook' 
          class=`
          mx-6
        `)
      NuxtLink(to='https://www.instagram.com/controlla_technologies/')
        img(
          src='@/assets/img/instagram.webp' 
          alt='logo instagram' 
          class=`
          mx-6
        `)
      NuxtLink(to='https://www.linkedin.com/company/controlla/')
        img(
          src='@/assets/img/linkedin.webp' 
          alt='logo linkedin' 
          class=`
          mx-6
        `)
    h3(class=`
      text-center
      text-xs
    `) {{ $t('copyright') }}
</template>

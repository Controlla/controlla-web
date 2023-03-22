<template lang="pug">
section(class=`
  pt-[25%] 
  md:pt-[20%] 
  bg-cyan-50
  w-screen
  relative
  justify-center
  overflow-hidden
  md:flex 
  pb-10
  text-base
  md:pt-[12%]
  lg:text-xl
  2xl:text-2xl
`)
  div(class=`
    px-[5%] 
    relative
    z-10
    md:px-0
    md:w-[25vw] 
  `)
    span(class=`
      md:text-sm 
      my-6
      text-sky-500
      text-xs
    `) {{ $t('fourth') }}
    h2(class=`
      md:text-3xl 
      my-6
      text-xl
      font-semibold
    `) {{ $t('qa_test_and_launch') }}
    h2(class=` 
      my-6
    `) {{ $t('quality_stands') }} 
      strong {{ $t('preventing_error') }} 
      |  {{ $t('delivering_secure') }}
    span {{ $t('audit') }} 
      br
      |         {{ $t('automate') }} 
      br
      |         {{ $t('test') }}
    div(
      class=`
      w-20
      md:w-40
      mt-5
      flex
      `
    )
      img(
        src='@/assets/img/cypress.webp' 
      )
      img(
        src='@/assets/img/selenium.webp' 
      )
  div(class=`
    flex
    justify-center
  `)
    img(
      src='@/assets/img/fourth_step.webp' 
      alt='fourth step' 
      class=`
      w-[60%] 
      md:w-[25vw] 
      md:h-[35vw] 
      relative
      z-10
    `)
</template>

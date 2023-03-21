<template lang="pug">
section(class=`
  bg-cyan-50
  w-screen
  relative
  justify-center
  md:flex 
  pt-[8rem]
  md:pt-[15rem]
  pb-20
  text-base
  lg:text-xl
  2xl:text-2xl
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
      md:text-sm 
    `) {{ $t('second') }}
    h2(class=`
      my-6
      text-2xl
      font-semibold
      lg:text-3xl 
    `) {{ $t('product_design') }}
    h2(class=`
      my-6 
    `) {{ $t('our_products') }}
      strong {{ $t('aesthetically_pleasing') }} 
      | {{ $t('we_believe') }}
    span {{ $t('architecture') }} 
      br
      |  {{ $t('sketching') }}
      br
      |  {{ $t('design') }}
    div(
      class=`
      w-20
      md:w-40
      mt-5
      flex
      `
    )
      img(
        src='@/assets/img/figma.webp' 
      )
      img(
        src='@/assets/img/miro.webp' 
      )
  img(
    src='@/assets/img/second_step.webp' 
    alt='second step' 
    class=`
      w-[90%] 
      z-10
      relative
      md:w-[41vw] 
      md:h-[30vw] 
  `)
  img(
    src="@/assets/img/line3_mobile.webp" 
    alt='arrow' 
    class=`
    absolute
    bottom-[-4.5rem] 
    left-5
    sm:hidden
    z-30
  `)
  img(
    src="@/assets/img/line3.webp" 
    alt='arrow' 
    class=`
    hidden 
    w-[18rem] 
    absolute 
    right-[50%] 
    bottom-[-14rem]
    sm:inline
    sm:w-[60%]
    sm:bottom-[-17%]
    sm:pb-2
    sm:right-[28%]
    md:right-[14%]
    md:bottom-[-19%]
    lg:w-[30rem]
    lg:right-[23%]
    lg:bottom-[-12rem]
    xl:w-[35rem]
    xl:right-[32%]
    xl:bottom-[-15rem]
    z-30
  `)  
</template>

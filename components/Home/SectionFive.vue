<template lang="pug">
section(class=`
  bg-cyan-50
  w-screen
  relative
  justify-center
  overflow-hidden
  md:flex pt-[12%] 
  pb-20
  text-base
  lg:text-xl
  2xl:text-2xl
`)
  //- img(
  //-   src="@/assets/img/line2.webp" 
  //-   alt='arrow' 
  //-   class=`
  //-   hidden 
  //-   w-[20rem] 
  //-   absolute 
  //-   right-[30%] 
  //-   top-[-6rem] 
  //-   z-30 
  //-   md:inline 
  //-   md:w-[35rem] 
  //-   md:top-[-13rem]
  //-   md:right-[15%]
  //-   lg:right-[25%]
  //-   xl:w-[40rem] 
  //-   xl:top-[-15rem]
  //-   xl:right-[38%]
  //- `)
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
  //- img(
  //-   src="@/assets/img/line3_mobile.webp" 
  //-   alt='arrow' 
  //-   class=`
  //-   absolute
  //-   right-[49.5%]
  //-   bottom-[-4.5rem] 
  //-   sm:hidden
  //- `)
  //- img(
  //-   src="@/assets/img/line3.webp" 
  //-   alt='arrow' 
  //-   class=`
  //-   hidden 
  //-   w-[18rem] 
  //-   absolute 
  //-   right-[50%] 
  //-   bottom-[-14rem]
  //-   sm:inline
  //-   sm:w-[30rem]
  //-   sm:right-[20%]
  //-   lg:w-[40rem]
  //-   lg:right-[25%]
  //-   lg:bottom-[-20rem]
  //- `)  
</template>

<template lang="pug">
section(class=`
  max-w-screen-xl
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
  text-base
  lg:text-xl
  2xl:text-2xl
`)
  //- img(
  //-   src="@/assets/img/line1_mobile.webp" 
  //-   alt='arrow' 
  //-   class=`
  //-     sm:hidden 
  //-     absolute 
  //-     right-[49.5%] 
  //-     top-[-14rem] 
  //-     z-30
  //- `)
  //- img(
  //-   src="@/assets/img/line1.webp" 
  //-   alt='arrow' 
  //-   class=`
  //-   hidden 
  //-   w-[18rem] 
  //-   absolute 
  //-   right-[49.5%] 
  //-   top-[-6rem] 
  //-   z-30 
  //-   sm:inline 
  //-   xl:w-[30rem] 
  //-   xl:top-[-10rem]
  //- `)
  //- div(class=`
  //-   w-[25rem] 
  //-   h-[25rem] 
  //-   left-[12%] 
  //-   top-[15%] 
  //-   blur-[11rem] 
  //-   rounded-full
  //-   bg-violet-200
  //-   absolute
  //-   z-0
  //- `)
  //- div(class=`
  //-   w-[25rem] 
  //-   h-[25rem] 
  //-   left-[40%] 
  //-   top-[50%] 
  //-   blur-[11rem] 
  //-   rounded-full
  //-   bg-blue-100
  //-   absolute
  //-   z-0 
  //- `)
  //- div(class=`
  //-   w-[25rem] 
  //-   h-[25rem] 
  //-   left-[70%] 
  //-   top-[15%] 
  //-   blur-[11rem] 
  //-   rounded-full
  //-   bg-violet-200
  //-   absolute
  //-   z-0
  //- `)
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
      2xl:w-[34vw]
      2xl:h-[23vw]
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
      md:text-sm 
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
  `)
  //- img(
  //-   src="@/assets/img/line2.webp" 
  //-   alt='arrow' 
  //-   class=`
  //-   hidden 
  //-   w-[20rem] 
  //-   absolute 
  //-   right-[30%]
  //-   bottom-[-3rem]
  //-   z-30 
  //-   md:inline 
  //-   md:w-[35rem] 
  //-   md:bottom-[-8rem]
  //-   md:right-[15%]
  //-   lg:right-[25%]
  //-   lg:bottom-[-10rem]
  //-   xl:w-[40rem] 
  //-   xl:bottom-[-15rem]
  //-   xl:right-[38%]
  //- `)    
</template>

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
  text-base
  lg:text-xl
  2xl:text-2xl
`)
  img(
    src="@/assets/img/line3_mobile.webp" 
    alt='arrow' 
    class=`
      sm:hidden
      absolute 
      right-[49.5%] 
      top-[-6rem] 
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
    top-[-6rem] 
    z-30 
    sm:inline 
    sm:w-[30rem] 
    sm:right-[20%]
    sm:top-[-15rem]
    lg:w-[40rem]
    lg:right-[25%]
    lg:top-[-18rem]    
  `)
  //- div(class=`
  //-   w-[25rem] 
  //-   h-[25rem] 
  //-   left-[6%] 
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
  //-   bg-violet-200
  //-   absolute
  //-   z-0
  //- `)
  //- div(class=`
  //-   w-[25rem] 
  //-   h-[25rem] 
  //-   left-[75%] 
  //-   top-[8%] 
  //-   blur-[11rem] 
  //-   rounded-full
  //-   bg-violet-200
  //-   absolute
  //-   z-0
  //- `)
  img(
    src='@/assets/img/third_step.webp' 
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
      md:text-sm 
    `) {{ $t('third') }}
    h2(class=`
      my-6
      text-2xl
      font-semibold
      lg:text-3xl 
    `) {{ $t('development') }}
    h2(class=`
      my-6
    `) {{ $t('your_tailormade') }}
      strong {{ $t('deep_end') }}
      |  {{ $t('and_different_communication') }}
    span &bull; {{ $t('web_and_mobile') }} 
      br
      |  {{ $t('flutter') }}
      br
      |  {{ $t('jira') }} 
      br
      |  {{ $t('vue') }}
  img(
    format="webp"
    src='@/assets/img/third_step.webp' 
    alt='third step' 
    class=`
    w-[90%] 
    px-[5%] 
    z-10
    relative
    md:hidden 
  `)
  img(
    src="@/assets/img/line3_mobile.webp" 
    alt='arrow' 
    class=`
    absolute
    right-[49.5%]
    bottom-[-4.5rem] 
    md:hidden
  `)  
  img(
    src="@/assets/img/line2.webp" 
    alt='arrow' 
    class=`
    hidden 
    w-[25rem] 
    absolute 
    right-[40%]
    bottom-[-3rem]
    z-30 
    md:inline
    lg:w-[35rem]
    lg:bottom-[-10rem]
    xl:bottom-[-13rem]
  `)    
</template>

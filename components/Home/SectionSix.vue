<template lang="pug">
section(class=`
  pt-[25%] 
  md:pt-[20%] 
  bg-white
  w-screen
  relative
  justify-center
  md:flex 
  pb-20
  text-base
  lg:text-xl
  2xl:text-2xl
  bg-[url('@/assets/img/frienshore_home_background.webp')]
  bg-cover
  bg-no-repeat
  xl:px-[5%]
  max-w-screen-xl
`)
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
    left-10
    sm:left-24
    sm:w-[13rem]
    bottom-[-4.5rem] 
    md:hidden
    z-30
  `)
  img(
    src="@/assets/img/line2.webp" 
    alt='arrow' 
    class=`
    hidden 
    w-[30rem] 
    absolute 
    right-[40%]
    bottom-[-3rem]
    z-30 
    md:inline
    md:left-[25%]
    md:bottom-[-9rem]
    lg:w-[30rem]
    lg:right-[23%]
    lg:bottom-[-10rem]
    xl:w-[40rem]
    xl:right-[26%]
    xl:bottom-[-15rem]
  `)
</template>

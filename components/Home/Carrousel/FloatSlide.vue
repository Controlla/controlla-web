<template lang="pug">
section(class=`
  px-[5%] 
  md:px-[15%]
  lg:px-[5%]
  lg:flex
  md:text-lg 
  h-[90%]
  lg:h-[100%]
  lg:pt-16
`)
  NuxtImg(
    format='webp' 
    src='/img/float.png' 
    alt='' 
    class=`
      hidden
      lg:inline
      w-[20vw]
      h-[25vw]
    `
  )
  div
    h1(class=`
      text-3xl
      font-semibold
      overflow-y-hidden
      mx-4
      text-left
    `) {{ $t('float_title') }}
    h3(class=`
      text-left
      my-6
      mx-4
    `) {{ $t('float_subtitle') }}
    div(class=`
      md:flex 
      my-6
      min-h-40
    `)
      div(class=`
        md:w-48 
        shadow-lg
        shadow-gray-300
        mx-4
        px-6
        py-12
        h-36
        rounded-2xl
        overflow-y-hidden
        mb-6
        lg:mb-0
      `)
        h4(class=`
          text-2xl
          font-bold
          overflow-y-hidden
        `) 1,500+
        h4 {{ $t('downloads') }}
      div(class=`
        md:w-48 
        shadow-lg
        shadow-gray-300
        mx-4
        px-6
        py-12
        h-36
        rounded-2xl
        overflow-y-hidden
        mb-6
        lg:mb-0
      `)
        h4(class=`
          text-2xl
          font-bold
          overflow-y-hidden
        `) 2
        h4 {{ $t('countries') }}
      div(class=`
        md:w-48 
        shadow-lg
        shadow-gray-300
        mx-4
        px-6
        py-12
        h-36
        rounded-2xl
        overflow-y-hidden
        mb-6
        lg:mb-0
      `)
        h4(class=`
          text-2xl
          font-bold
          overflow-y-hidden
        `) 2 {{ $t('months') }}
        h3(class=`
          font-bold
        `) /123 hrs
        h4 {{ $t('duration') }}
    button(class=`
      mx-4
      bg-black
      text-white
      rounded-full
      p-3
      px-7
      font-semibold
      text-lg
    `) {{ $t('webpage') }} &nearr;
  div(class=`
    flex
    justify-center
  `)
    NuxtImg(
      format='webp'
      src='/img/float.png'
      alt=''
      class=`
        lg:hidden
        w-[70%]
        p-[5%]
      `)


</template>

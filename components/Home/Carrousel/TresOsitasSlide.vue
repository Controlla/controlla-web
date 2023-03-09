<template lang="pug">
div(class=`
  px-[5%] 
  md:px-[15%]
  lg:px-0
  lg:flex
  md:text-lg 
  h-[90%]
  lg:h-[100%]
  lg:pt-16
`)
  img(
    src='@/assets/img/tres_ositas.webp'
    alt=''
    class=`
      hidden
      lg:inline
      w-[25vw]
      h-[16vw]
    `)
  div
    h1(class=`
      text-3xl
      font-semibold
      mx-4
      text-left
    `) {{ $t('tres_ositas_title') }}
    h3(class=`
      my-6
      mx-4
      text-left
    `) {{ $t('tres_ositas_subtitle') }} 
      br
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
        mb-6
        lg:mb-0
      `)
        h4(class=`
          text-2xl
          font-bold
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
        mb-6
        lg:mb-0
      `)
        h4(class=`
          text-2xl
          font-bold
        `)  2
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
        mb-6
        lg:mb-0
      `)
        h4(class=`
          text-2xl
          font-bold
        `)  6 {{ $t('months') }}
        h3(class=`
          font-bold
        `)  /960 hrs
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
    img(
      src='@/assets/img/tres_ositas.webp' 
      alt='' 
      class=`
        lg:hidden 
        w-[80%] 
        p-[5%]
        mx-[10%]
      `)
</template>

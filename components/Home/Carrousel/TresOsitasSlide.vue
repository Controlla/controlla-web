<template lang="pug">
div(class=`
  px-[5%] 
  md:px-[10%]
  lg:px-10
  lg:flex
  md:text-lg 
  overflow-hidden
  h-[90%]
  lg:pt-[3%]
`)
  img(
    format='webp' 
    loading='lazy' 
    src='@/assets/img/tres_ositas.webp'
    alt=''
    class=`
      hidden
      lg:inline
      w-[30vw]
      xl:w-[25vw]
      xl:h-[15vw]
      h-[20vw]
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
    img(
      src='@/assets/img/tres_ositas.webp' 
      alt='' 
      class=`
        lg:hidden 
        w-[90%] 
        p-[5%]
        mx-auto
      `)
    div(class=`
      lg:flex 
      my-6
      min-h-40
    `)
      div(class=`
        lg:w-48 
        shadow-lg
        shadow-gray-300
        mx-4
        px-6
        py-12
        h-36
        rounded-2xl
        mb-8
        lg:mb-0
      `)
        h4(class=`
          text-2xl
          font-bold
        `) 1,500+
        h4 {{ $t('downloads') }}
      div(class=`
        lg:w-48 
        shadow-lg
        shadow-gray-300
        mx-4
        px-6
        py-12
        h-36
        rounded-2xl
        mb-8
        lg:mb-0
      `)
        h4(class=`
          text-2xl
          font-bold
        `)  {{$t('agriculture')}}
        h4 {{ $t('industry') }}
      div(class=`
        lg:w-48 
        shadow-lg
        shadow-gray-300
        mx-4
        px-6
        py-12
        h-36
        rounded-2xl
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
</template>

<template lang="pug">
div(class=`
  px-[5%]
  md:px-[10%]
  lg:px-0
  lg:flex 
  md:text-lg
  h-[90%]
  lg:pt-[3%]
`)
  img(
    format='webp' 
    loading='lazy' 
    src='@/assets/img/second_step.webp'
    alt=''
    class=`
      hidden
      w-[30vw]
      h-[20vw]
      xl:w-[28vw]
      xl:h-[17vw]
      lg:inline 
    `)
  div
    h1(class=`
      text-3xl
      font-semibold
      mx-4
      text-left
    `) {{ $t('sercom') }}
    h3(class=`
      my-6
      mx-4
      text-left
    `) {{ $t('custom_software') }} 
    img(
      src='@/assets/img/second_step.webp' 
      alt='' 
      class=`
        lg:hidden 
        w-[90%] 
        p-[5%]
        mx-auto
        md:w-[70%]
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
        `) 20+
        h4 {{ $t('final_users') }}
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
        `) 12 {{ $t('months') }}
        h3(class=`
          font-bold
        `) 1920 hrs
        h4 {{ $t('duration') }}
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
        `) Web
        h4 {{ $t('technologies') }}
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
</template>

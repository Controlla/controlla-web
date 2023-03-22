<template lang="pug">
section(class=`
  px-[5%] 
  md:px-[10%]
  lg:px-0
  lg:flex
  md:text-lg
  h-[90%]
  lg:pt-[3%]
`)
  img(
    src='@/assets/img/leanfit.webp' 
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
      mx-4
      text-left
    `) {{ $t('leanfit') }} 
    h3(class=`
      text-left
      my-6
      mx-4
    `) {{ $t('personalized_diet') }}
    img(
      src='@/assets/img/leanfit.webp'
      alt=''
      class=`
        lg:hidden
        w-[90%]
        p-[5%]
        md:w-[70%]
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
        `) 15,200+
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
        `) 35+
        h4 {{ $t('countries') }}
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
        `) {{$t('app')}}/{{$t('web')}}
        h4 {{ $t('technologies') }}
        h4(
          class=`
          font-light`
        ) {{ $t('flutter') }}
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

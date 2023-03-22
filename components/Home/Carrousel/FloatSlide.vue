<template lang="pug">
section(class=`
  px-[5%] 
  md:px-[10%]
  md:flex
  md:text-lg 
  bg-white
`)
  img(
    src='@/assets/img/float.webp' 
    alt='' 
    class=`
      hidden
      md:inline
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
    `) {{ $t('float_title') }}
    h3(class=`
      text-left
      my-6
      mx-4
    `) {{ $t('float_subtitle') }}
    img(
      src='@/assets/img/float.webp'
      alt=''
      class=`
        md:hidden
        w-[90%]
        p-[5%]
      `)
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
      `)
        h4(class=`
          text-2xl
          font-bold
        `) US
        h4 {{ $t('customer') }}
      div(class=`
        md:w-48 
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
        `) {{ $t('kotlin')}}/{{$t('swift')}}
        h4 {{ $t('techonologies') }}
      div(class=`
        md:w-48 
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


</template>

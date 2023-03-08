<template lang="pug">
div(class=`
  md:flex 
  md:text-lg
`)
  nuxt-img.hidden(
    format='webp' 
    loading='lazy' 
    src='@/assets/img/second_step.webp'
    alt=''
    class=`
      hidden
      w-[30vw]
      h-[20vw]
      md:inline 
    `)
  div
    h1(class=`
      text-3xl
      font-semibold
      overflow-y-hidden
      mx-4
      text-left
    `) {{ $t('sercom') }}
    h3(class=`
      my-6
      mx-4
      text-left
    `) {{ $t('custom_software') }} 
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
        overflow-y-hidden
      `)
        h4(class=`
          text-2xl
          font-bold
          overflow-y-hidden
        `) 20+
        h4 {{ $t('final_users') }}
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
      `)
        h4(class=`
          text-2xl
          font-bold
          overflow-y-hidden
        `) 12 {{ $t('months') }}
        h3(class=`
          font-bold
        `) 1920 hrs
        h4 {{ $t('duration') }}
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
      `)
        h4(class=`
          text-2xl
          font-bold
          overflow-y-hidden 
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
  div(class=`
    flex
    justify-center
  `)
    img(
      src='@/assets/img/second_step.webp' 
      alt='' 
      class=`
        md:hidden 
        w-[90%] 
        p-[5%]
      `)

</template>

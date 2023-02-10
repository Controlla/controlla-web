<template lang="pug">
section(class=`
  w-screen
  overflow-y-hidden
`)
  div(class=`
    min-h-[50%]
  `)
    TeamSuccessCounters
  div(class=`
    min-h-[50%] 
    md:pt-12 
    w-screen
    overflow-y-hidden
    mb-10
  `)
    h1(class=`
      text-center
      text-3xl
      font-bold
    `) {{ $t(&quot;trusted_partners&quot;) }}
    h2(class=`
      w-[90%] 
      text-center
      m-auto
    `) {{ $t(&quot;some_of_the&quot;) }}
    div(class=`
      my-12 
      flex
      justify-center
    `)
      NuxtImg(
        format='webp' 
        loading='lazy' 
        src='/img/trusted_partners_desktop.svg' 
        alt='trusted partners' 
        class=`
          w-[90%] 
          md:w-[80%] 
          max-w-[70rem] 
          hidden
          md:inline 
      `)
      NuxtImg(
        format='webp' 
        loading='lazy' 
        src='/img/trusted_partners.svg' 
        alt='trusted partners' 
        class=`
          w-[90%] 
          md:w-[80%] 
          md:hidden
          lg:w-[20%] 
        `)
</template>

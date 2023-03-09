<template lang="pug">
section(class=`
  w-screen
`)
  div(class=`
    min-h-[50%]
  `)
    TeamSuccessCounters
  div(class=`
    min-h-[50%]
    md:pt-12
    w-screen
    mb-10
    max-w-screen-xl
  `)
    h1(class=`
      text-center
      text-3xl
      font-bold
    `) {{ $t('trusted_partners') }}
    h2(class=`
      w-[90%]
      text-center
      text-lg
      m-auto
      py-5
    `) {{ $t('some_of_the') }}
    div(class=`
      my-12
      flex
      justify-center
    `)
      img(
        src='@/assets/img/trusted_partners_desktop.webp'
        alt='trusted partners'
        class=`
          w-[90%]
          md:w-[80%]
          max-w-[70rem]
          hidden
          md:inline
      `)
      img(
        src='@/assets/img/trusted_partners.webp'
        alt='trusted partners'
        class=`
          w-[90%]
          md:w-[80%]
          md:hidden
          lg:w-[20%]
        `)
</template>

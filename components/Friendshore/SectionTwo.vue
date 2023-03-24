<template lang="pug">
section(class=`
  px-[5vw]
  md:px-[20vw]
  2xl:px-[14vw]
  bg-white
  w-screen
  pb-24
  text-lg
  max-w-screen-xl
`)
  h3(class=`
    text-3xl
    text-center
  `) {{ $t('why') }}
    strong(class=`
      text-sky-500
    `)  {{ $t('work') }}
    |  {{ $t('with_us') }}
  div(class=`
    lg:flex
    lg:justify-center
    my-6
    min-h-80
    py-6
  `)
    div(class=`
      shadow-lg
      shadow-gray-300
      mx-4
      px-6
      py-6
      w-[90%]
      lg:w-[30%]
      min-h-72
      rounded-2xl
      mb-12
      lg:mb-0
    `)
      img(
        src='@/assets/img/hourglass.webp'
        alt='hourglass'
        class=`
        w-12
        my-6
      `)
      h3(class=`
      text-xl
      font-bold
    `) {{ $t('fast_projects') }}
      h3 {{ $t('thanks_to') }}
    div(class=`
      shadow-lg
      shadow-gray-300
      mx-4
      px-6
      py-6
      w-[90%]
      lg:w-[30%]
      min-h-72
      rounded-2xl
      mb-12
      lg:mb-0
    `)
      img(
        src='@/assets/img/calendar.webp'
        alt='hug'
        class=`
        w-12
        my-6
      `)
      h3(class=`
      text-xl
      font-bold
    `)  {{ $t('agile_methodology') }}
      h3 {{ $t('timely_delivery') }}
    div(class=`
      shadow-lg
      shadow-gray-300
      mx-4
      px-6
      py-6
      w-[90%]
      lg:w-[30%]
      min-h-72
      rounded-2xl
    `)
      img(
        src='@/assets/img/plane.webp'
        alt='hug'
        class=`
        w-12
        my-6
      `)
      h3(class=`
      text-xl
      font-bold
    `)  {{ $t('privileged_location') }}
      h3 {{ $t('just_miles') }}
        br
        |  {{ $t('timezone') }}
</template>

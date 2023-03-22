<template lang="pug">
section(class=`
  bg-white
  w-screen
  px-6
  pt-24
  overflow-hidden
  md:px-[20vw]
  xl:px-[15vw]
  text-lg
  max-w-screen-xl
`)
  h3(class=`
    text-3xl
    text-center
  `) {{ $t('why') }}
    strong.text-sky-500  {{ $t('choose') }}
    |  {{ $t('us') }}
  h3(class=`
    text-center
    my-6
    lg:text-xl
  `) {{ $t('by_now_you') }}
  div(class=`
    lg:flex
    lg:justify-around
    my-6
    py-6
    min-h-80
  `)
    div(class=`
      shadow-lg
      shadow-gray-300
      mx-4
      px-6
      py-6
      lg:w-[30%]
      min-h-72
      rounded-2xl
      mb-12
      lg:mb-0
    `)
      img(
        src='@/assets/img/hug.webp'
        alt='hug'
        class=`
        w-12
        my-6
      `)
      h3(class=`
      font-bold
      text-xl
       `) {{ $t('we_care_for') }}
      h3 {{ $t('we_are_all') }}
        strong  {{ $t('culture_needs') }}
        |           {{ $t('we_cherish') }}
    div(class=`
      shadow-lg
      shadow-gray-300
      mx-4
      px-6
      py-6
      lg:w-[30%]
      min-h-72
      rounded-2xl
      mb-12
      lg:mb-0
    `)
      img(
        src='@/assets/img/plane.webp'
        alt='hug'
        class=`
        w-12
        my-6
      `)
      h3(class=`
      font-bold
      text-xl
       `) {{ $t('miles_from_us') }}
      h3 {{ $t('we_are_just') }}
        strong  {{ $t('distance_and_language') }}
    div(class=`
      shadow-lg
      shadow-gray-300
      mx-4
      px-6
      py-6
      lg:w-[30%]
      min-h-72
      rounded-2xl
      mb-12
      lg:mb-0
    `)
      img(
        src='@/assets/img/board.webp'
        alt='board'
        class=`
        w-12
        my-6
      `)
      h3(class=`
      font-bold
      text-xl
       `) {{ $t('proven_results') }}
      h3 {{ $t('our_partners_have') }}
</template>

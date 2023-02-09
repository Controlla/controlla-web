<template lang="pug">
section(class=`
  bg-white
  w-screen
  px-6
  py-24
  overflow-hidden
  md:px-[20vw] 
`)
  h3(class=`
    text-3xl
    text-center
    overflow-y-hidden
  `) {{ $t('why') }} 
    strong.text-sky-500  {{ $t('choose') }}
    |  {{ $t('us') }}
  h3(class=`
    text-center
    my-6
  `) {{ $t('by_now_you') }}
  div(class=`
    md:flex
    md:justify-around
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
      w-[30%]
    `)
      NuxtImg(
        format="webp"
        loading="lazy"
        src='/img/hug.png' 
        alt='hug' 
        class=`
        w-12
        my-6
      `)
      h3 {{ $t('we_care_for') }}
      h3 {{ $t('we_are_all') }} 
        br
        strong  {{ $t('culture_needs') }}
        br
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
      w-[30%]
    `)
      NuxtImg(
        src='/img/plane.png' 
        alt='hug' 
        class=`
        w-12
        my-6
      `)
      h3 {{ $t('miles_from_us') }}
      h3 {{ $t('we_are_just') }}
        br
        |  {{ $t('or_a_single') }}
        strong  {{ $t('distance_and_language') }}
        br
    div(class=`
      shadow-lg
      shadow-gray-300
      mx-4
      px-6
      py-6
      lg:w-[30%]
      min-h-72
      rounded-2xl
      w-[30%]
    `)
      NuxtImg(
        format="webp"
        loading="lazy"
        src='/img/board.png' 
        alt='board' 
        class=`
        w-12
        my-6
      `)
      h3 {{ $t('proven_results') }}
      h3 {{ $t('our_partners_have') }} 
</template>

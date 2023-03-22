<template lang="pug">
section(class=`
  w-screen
  overflow-hidden
  py-32
  relative
  bg-[url('@/assets/img/top_home_bg.webp')]
  bg-cover
  bg-no-repeat
  bg-center
  max-w-screen-xl
`)
  div(class=`
    w-screen
    relative
    z-10
    px-20
    max-w-screen-xl
  `)
    h1(class=`
      block
      text-center
      my-1
      text-3xl
      sm:h-[3rem]
      md:text-4xl
      md:h-[3rem]
      lg:text-4xl
      lg:h-[3rem]
      xl:text-4xl
      xl:h-[3rem]
      2xl:text-5xl
      2xl:h-[4rem]
    `) {{ $t('transform_your_company') }}
    h1(class=`
      block
      text-center
      text-3xl
      text-sky-500
      font-semibold
      my-1
      sm:h-[3rem]
      md:text-4xl
      md:h-[3rem]
      lg:text-4xl
      lg:h-[3rem]
      xl:text-4xl
      xl:h-[3rem]
      2xl:h-[4rem]
      2xl:text-5xl
    `)  {{ $t('with_world_class') }}
    h2(class=`
      block
      text-center
      text-lg
      lg:text-xl
      my-5
    `)
      | {{ $t('we_design_and_develop') }}
      strong {{ $t('high_quality') }}
      |  {{ $t('digital_solutions') }}
      br
      |      {{ $t('methodic') }}
      strong {{ $t('strategy') }}
      |  {{ $t('through_trusted') }}
      strong {{ $t('alliances') }}
    ContactButton
  div(class=`
    mt-[1%]
    relative
    w-screen
    flex
    justify-center
    max-w-screen-xl
  `)
    img(src='@/assets/img/home_background.webp' alt='home background' class=`
      w-[90%]
      md:w-[70%]
      lg:w-[65%]
      xl:w-[40%]
    `)
</template>

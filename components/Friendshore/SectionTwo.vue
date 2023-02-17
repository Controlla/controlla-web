<template lang="pug">
section(class=`
  px-[20vw] 
  bg-white
  w-screen
  py-24
`)
  h3(class=`
    text-3xl
    text-center
    overflow-y-hidden
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
    overflow-y-hidden
    py-6
  `)
    div(class=`
      shadow-lg
      shadow-gray-300
      mx-4
      px-6
      py-6
      min-h-72
      rounded-2xl
    `)
      NuxtImg(
        format='webp' 
        loading='lazy' 
        src='/img/hourglass.svg' 
        alt='hourglass' 
        class=`
        w-12
        my-6
      `)
      h3 {{ $t('fast_projects') }}
      h3 {{ $t('thanks_to') }} 
        br
        |  {{ $t('tech_tools') }}
    div(class=`
      shadow-lg
      shadow-gray-300
      mx-4
      px-6
      py-6
      min-h-72
      rounded-2xl
    `)
      NuxtImg(
        format='webp' 
        loading='lazy' 
        src='/img/calendar.svg' 
        alt='hug' 
        class=`
        w-12
        my-6
      `)
      h3 {{ $t('agile_methodology') }}
      h3 {{ $t('timely_delivery') }} 
        br
        |  {{ $t('at_our_core') }} 
        br
        |  {{ $t('continuous_feedback') }} 
        br
        |  {{ $t('following_scrum') }}
    div(class=`
      shadow-lg
      shadow-gray-300
      mx-4
      px-6
      py-6
      min-h-72
      rounded-2xl
    `)
      NuxtImg(
        format='webp' 
        loading='lazy' 
        src='/img/plane.png' 
        alt='hug' 
        class=`
        w-12
        my-6
      `)
      h3 {{ $t('privileged_location') }}
      h3 {{ $t('just_miles') }} 
        br
        |  {{ $t('flight') }} 
        br
        |  {{ $t('timezone') }} 
        br
</template>

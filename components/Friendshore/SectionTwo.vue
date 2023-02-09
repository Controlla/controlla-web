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
  `) {{ $t(&quot;why&quot;) }} 
    strong(class=`
      text-sky-500
    `)  {{ $t(&quot;work&quot;) }}
    |  {{ $t(&quot;with_us&quot;) }}
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
      h3 {{ $t(&quot;fast_projects&quot;) }}
      h3 {{ $t(&quot;thanks_to&quot;) }} 
        br
        |  {{ $t(&quot;tech_tools&quot;) }}
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
      h3 {{ $t(&quot;agile_methodology&quot;) }}
      h3 {{ $t(&quot;timely_delivery&quot;) }} 
        br
        |  {{ $t(&quot;at_our_core&quot;) }} 
        br
        |  {{ $t(&quot;continuous_feedback&quot;) }} 
        br
        |  {{ $t(&quot;following_scrum&quot;) }}
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
      h3 {{ $t(&quot;privileged_location&quot;) }}
      h3 {{ $t(&quot;just_miles&quot;) }} 
        br
        |  {{ $t(&quot;flight&quot;) }} 
        br
        |  {{ $t(&quot;timezone&quot;) }} 
        br
</template>

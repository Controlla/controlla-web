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
  `) {{ $t(&quot;why&quot;) }} 
    strong.text-sky-500  {{ $t(&quot;choose&quot;) }}
    |  {{ $t(&quot;us&quot;) }}
  h3(class=`
    text-center
    my-6
  `) {{ $t(&quot;by_now_you&quot;) }}
  div(class=`
    md:flex
    md:justify-center
    my-6
    min-h-80
    overflow-y-hidden
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
      img(src='hug.png' alt='hug' class=`
        w-12
        my-6
      `)
      h3 {{ $t(&quot;we_care_for&quot;) }}
      h3 {{ $t(&quot;we_are_all&quot;) }} 
        br
        strong  {{ $t(&quot;culture_needs&quot;) }}
        br
        |           {{ $t(&quot;we_cherish&quot;) }}
    div(class=`
      shadow-lg
      shadow-gray-300
      mx-4
      px-6
      py-6
      min-h-72
      rounded-2xl
    `)
      img(src='plane.png' alt='hug' class=`
        w-12
        my-6
      `)
      h3 {{ $t(&quot;miles_from_us&quot;) }}
      h3 {{ $t(&quot;we_are_just&quot;) }}
        br
        |  {{ $t(&quot;or_a_single&quot;) }}
        strong  {{ $t(&quot;distance_and_language&quot;) }}
        br
    div(class=`
      shadow-lg
      shadow-gray-300
      mx-4
      px-6
      py-6
      min-h-72
      rounded-2xl
    `)
      img(src='board.png' alt='hug' class=`
        w-12
        my-6
      `)
      h3 {{ $t(&quot;proven_results&quot;) }}
      h3 {{ $t(&quot;our_partners_have&quot;) }} 
</template>

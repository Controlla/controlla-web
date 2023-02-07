<template lang="pug">
section(class=`
  bg-cyan-50
  w-screen
  relative
  justify-center
  overflow-hidden
  md:flex pt-[12%] 
  pb-20
`)
  div(class=`
    w-[25rem] 
    h-[25rem] 
    left-[6%] 
    top-[15%] 
    blur-[11rem] 
    rounded-full
    bg-violet-200
    absolute
    z-0
  `)
  div(class=`
    w-[25rem] 
    h-[25rem]
    left-[40%]
    top-[45%]
    blur-[11rem] 
    rounded-full
    bg-violet-100
    absolute
    z-0
  `)
  div(class=`
    w-[25rem] 
    h-[25rem]
    left-[75%] 
    top-[8%]
    blur-[11rem] 
    rounded-full
    bg-violet-200
    absolute
    z-0
  `)
  div(class=`
    px-[5%] 
    z-10
    relative
    md:px-0 
    md:w-[41vw] 
  `)
    span(class=`
      my-6
      text-sky-500
      text-xs
      md:text-xl 
    `) {{ $t(&quot;second&quot;) }}
    h2(class=`
      my-6
      text-2xl
      font-semibold
      overflow-y-hidden
      md:text-4xl 
    `) {{ $t(&quot;product_design&quot;) }}
    h2(class=`
      my-6
      text-base
      md:text-2xl 
    `) {{ $t(&quot;our_products&quot;) }}
      strong {{ $t(&quot;aesthetically_pleasing&quot;) }} 
      | {{ $t(&quot;we_believe&quot;) }}
    span(class=`
      text-base
      md:text-2xl 
    `) {{ $t(&quot;architecture&quot;) }} 
      br
      |  {{ $t(&quot;sketching&quot;) }}
      br
      |  {{ $t(&quot;design&quot;) }}
  img(src='second_step.png' alt='first step' class=`
    w-[90%] 
    z-10
    relative
    md:w-[41vw] 
    md:h-[30vw] 
  `)
</template>

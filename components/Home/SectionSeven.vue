<template lang="pug">
section(class=`
  pt-[12%] 
  bg-cyan-50
  w-screen
  relative
  justify-center
  overflow-hidden
  md:flex 
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
    relative
    z-10
    md:px-0
    md:w-[25vw] 
  `)
    span(class=`
      md:text-xl 
      my-6
      text-sky-500
      text-xs
    `) {{ $t(&quot;fourth&quot;) }}
    h2(class=`
      md:text-4xl 
      my-6
      text-2xl
      font-semibold
      overflow-y-hidden
    `) {{ $t(&quot;qa_test_and_launch&quot;) }}
    h2(class=`
      md:text-2xl 
      my-6
      text-base
    `) {{ $t(&quot;quality_stands&quot;) }} 
      strong {{ $t(&quot;preventing_error&quot;) }} 
      |  {{ $t(&quot;delivering_secure&quot;) }}
    span(class=`
      text-base
    `) {{ $t(&quot;audit&quot;) }} 
      br
      |         {{ $t(&quot;automate&quot;) }} 
      br
      |         {{ $t(&quot;test&quot;) }}
  div(class=`
    flex
    justify-center
  `)
    img(src='fourth_step.png' alt='first step' class=`
      w-[60%] 
      md:w-[25vw] 
      md:h-[35vw] 
      relative
      z-10
    `)
</template>

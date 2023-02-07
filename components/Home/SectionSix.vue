<template lang="pug">
section(class=`
  pt-[12%] 
  bg-white
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
    left-[40%] 
    top-[50%] 
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
  img(src='third_step.png' alt='first step' class=`
    w-[42vw] 
    h-[28vw] 
    hidden
    z-10
    md:inline 
  `)
  div(class=`
    px-[5%] 
    md:px-0 
    md:w-[42vw] 
    z-10
    relative
  `)
    span(class=`
      my-6
      text-sky-500
      text-xs
      md:text-xl 
    `) {{ $t(&quot;third&quot;) }}
    h2(class=`
      my-6
      text-2xl
      font-semibold
      overflow-y-hidden
      md:text-4xl 
    `) {{ $t(&quot;development&quot;) }}
    h2(class=`
      my-6
      text-base
      md:text-2xl 
    `) {{ $t(&quot;your_tailormade&quot;) }}
      strong {{ $t(&quot;deep_end&quot;) }}
      |  {{ $t(&quot;and_different_communication&quot;) }}
    span(class=`
      md:text-2xl
      text-base
    `) &bull; {{ $t(&quot;web_and_mobile&quot;) }} 
      br
      |  {{ $t(&quot;flutter&quot;) }}
      br
      |  {{ $t(&quot;jira&quot;) }} 
      br
      |  {{ $t(&quot;vue&quot;) }}
  img(src='third_step.png' alt='first step' class=`
    w-[90%] 
    px-[5%] 
    z-10
    relative
    md:hidden 
  `)
</template>

<template lang="pug">
section(class=`
  md:flex 
  md:justify-center 
  pt-[12%] 
  bg-white
  w-screen
  relative
  overflow-hidden
  pb-20
`)
  div(class=`
    w-[25rem] 
    h-[25rem] 
    left-[12%] 
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
    bg-blue-100
    absolute
    z-0 
  `)
  div(class=`
    w-[25rem] 
    h-[25rem] 
    left-[70%] 
    top-[15%] 
    blur-[11rem] 
    rounded-full
    bg-violet-200
    absolute
    z-0
  `)
  img(src='first_step.png' alt='first step' class=`
    hidden
    z-10
    relative
    md:inline 
    md:w-[36vw] 
    md:h-[25vw] 
  `)
  div(class=`
    px-[5%] 
    md:px-0 
    md:w-[36vw] 
    z-10
    relative
  `)
    span(class=`
      my-6
      text-sky-500
      text-xs
      md:text-xl 
    `) {{ $t(&quot;first&quot;) }}
    h2(class=`
      my-6
      text-2xl
      font-semibold
      overflow-hidden
      md:text-4xl 
    `) {{ $t(&quot;ideation_and_evaluation&quot;) }}
    h2(class=`
      my-6
      text-base
      md:text-2xl 
    `) {{ $t(&quot;first_we&quot;) }} 
      |
      strong {{ $t(&quot;research_ideate&quot;) }} 
      |         {{ $t(&quot;your_product_features&quot;) }}
    span(class=`
      text-base
      md:text-2xl 
      marker:text-sky-400
    `) {{ $t(&quot;discovery&quot;) }} 
      br
      |         {{ $t(&quot;wireframe&quot;) }} 
      br
      |         {{ $t(&quot;scoping&quot;) }}
</template>

<template lang="pug">
section(class=`
  bg-white
  w-screen
  relative
  overflow-hidden
`)
  div(class=`
    h-[50%] 
    px-[5%] 
    w-screen
    relative
    overflow-hidden
    py-6
    justify-center
    sm:flex 
    lg:px-[10%] 
    lg:py-24 
  `)
    div(class=`
      w-[25rem] 
      h-[25rem] 
      left-[6%] 
      top-[15%] 
      blur-[11rem] 
      rounded-full
      bg-violet-300
      absolute
      z-0
    `)
    div(class=`
      w-[25rem] 
      h-[25rem] 
      left-[40%] 
      top-[-10%] 
      blur-[11rem] 
      rounded-full
      bg-blue-300
      absolute
      z-0
    `)
    div(class=`
      w-[25rem] 
      h-[25rem] 
      left-[75%] 
      top-[15%] 
      blur-[11rem] 
      rounded-full
      bg-violet-300
      absolute
      z-0
    `)
    div(class=`
      mr-[10%] 
      z-10
      overflow-y-hidden
      relative
    `)
      h2(class=`
        leading-[3rem] 
        lg:my-6 
        text-2xl
        leading-normal
        overflow-y-hidden
        lg:text-4xl 
      `)
        | {{ $t(&quot;we_go_beyond&quot;) }} 
        strong {{ $t(&quot;borders&quot;) }}
      h2(class=`
        text-xs
        overflow-y-hidden
        lg:text-2xl 
        lg:my-6 
      `) {{ $t(&quot;discover_why&quot;) }}
      NuxtLink(to='/friendshore' class=`
        inline-block
        lg:text-lg 
        my-6
        bg-black
        text-white
        rounded-full
        p-3
        px-7
        font-semibold
        text-sm
      `) {{ $t(&quot;visit_friendshore&quot;) }}
    img(src='rocket.png' alt='rocket' class=`
      w-[90%] 
      mt-[1%] 
      z-10
      relative
      sm:w-[50%] 
    `)
  div(class=`
    w-[90%] 
    mx-auto
    lg:py-24 
    my-20
  `)
    h1(class=`
      lg:text-3xl 
      text-2xl
      text-center
      my-1
      font-semibold
      overflow-y-hidden
    `)
      | {{ $t(&quot;the_key_to&quot;) }} 
      br
      span(class=`
        text-sky-500
      `) {{ $t(&quot;strategy&quot;) }}
      |  {{ $t(&quot;behind&quot;) }}
    h2(class=`
      text-lge
      text-center
      my-6
    `)
      | {{ $t(&quot;more_than&quot;) }} 
      strong {{ $t(&quot;development_and_strategic&quot;) }}
      br
      |  {{ $t(&quot;with_necessary_expertise&quot;) }}
    ContactButton
</template>
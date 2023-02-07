<template lang="pug">
section(class=`
  pt-[12%] 
  px-[20%] 
  lg:px-[25%] 
  bg-white
  w-screen
  overflow-hidden
  mb-20
  md:mt-10
`)
  h2(class=`
    lg:text-4xl 
    md:text-3xl 
    sm:text-2xl 
    lg:leading-relaxed 
    w-full.
    text-center
    text-xl
    font-medium
    overflow-hidden
    leading-loose
  `)
    | {{ $t(&quot;we_partner_up&quot;) }} 
    span(class=`
      italic
      underline 
    `) {{ $t(&quot;high_end_tech&quot;) }}
    br
    |  {{ $t(&quot;we_ensure&quot;) }} 
    span(class=`
      font-semibold
      text-sky-500
    `) {{ $t(&quot;your_vision_achieves&quot;) }}
    |  {{ $t(&quot;on_your_business&quot;) }}
  div(class=`
    w-100%
    mt-[5rem] 
    flex
    justify-center
  `)
    img(src='Luis.png' alt='Luis' class=`
      w-20
      h-20
    `)
    h3(class=`
      mt-4
      ml-6
    `)
      strong Luis R. Torres
      br
      span {{ $t(&quot;ceo_and&quot;) }}
</template>
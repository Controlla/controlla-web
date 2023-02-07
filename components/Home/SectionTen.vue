<template lang="pug">
section(class=`
  md:flex 
  w-screen
  bg-white
  justify-center
  my-20
`)
  div(class=`
    md:mt-[25vh]
  `)
    h3(class=`
      md:text-start 
      text-3xl
      font-semibold
      overflow-y-hidden
      my-6
      text-center
    `) {{ $t(&quot;you_can_find&quot;) }} 
      strong(class=`
        text-sky-500  
      `) {{ $t(&quot;here&quot;) }}
    h3(class=`
      md:text-start 
      my-6
      text-center
    `) {{ $t(&quot;tell_us_your&quot;) }}
      br
      |         {{ $t(&quot;or_fill_out&quot;) }} 
      br
      |         {{ $t(&quot;we_will_contact&quot;) }}
    ContactButton
  div(class=`
    flex
    justify-center
  `)
    img(src='building.png' alt='building' class=`
      w-[75%] 
      my-[5%]
      md:my-0
      md:w-[17vw]
      md:h-[30vw] 
      pl-6
    `)
</template>

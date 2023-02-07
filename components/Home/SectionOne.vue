<!-- <script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
} -->
<!-- </script> -->

<template lang="pug">
section(class=`
  w-screen
  overflow-x-hidden
  overflow-y-hidden
  bg-gradient-to-b
  from-white
  via-blue-200
  to-blue-200
  py-32
`)
  div(class=`
    w-screen
    relative
    z-10
  `)
    h1(class=`
      block
      text-center
      my-1
      text-2xl
      sm:text-3xl 
      sm:h-[3rem] 
      md:text-4xl 
      md:h-[3rem] 
      lg:text-4xl 
      lg:h-[3rem] 
      xl:text-4xl 
      xl:h-[3rem] 
      2xl:text-5xl 
      2xl:h-[4rem] 
    `) {{ $t(&quot;transform_your_company&quot;) }}
    h1(class=`
      block
      text-center
      text-2xl
      text-sky-500
      font-semibold
      my-1
      sm:h-[3rem] 
      sm:text-3xl 
      md:text-4xl 
      md:h-[3rem] 
      lg:text-4xl 
      lg:h-[3rem] 
      xl:text-4xl 
      xl:h-[3rem] 
      2xl:h-[4rem] 
      2xl:text-5xl 
    `)  {{ $t(&quot;with_world_class&quot;) }}
    h2(class=`
      block
      text-center
      text-lge
      my-5 
    `)
      | {{ $t(&quot;we_design_and_develop&quot;) }} 
      strong {{ $t(&quot;high_quality&quot;) }}
      |  {{ $t(&quot;digital_solutions&quot;) }} 
      br
      |       {{ $t(&quot;methodic&quot;) }} 
      strong {{ $t(&quot;strategy&quot;) }}
      |  {{ $t(&quot;through_trusted&quot;) }}
      strong {{ $t(&quot;alliances&quot;) }}
    ContactButton
  div(class=`
    sm:visible 
    w-[100vw] 
    h-[50%] 
    bottom-[-15%] 
    md:bottom-[-20%] 
    bg-white
    absolute
    overflow-x-hidden
    rounded-tl-[100%]
    rounded-tr-[100%]
  `)
  div(class=`
    mt-[1%] 
    relative
    w-screen
    flex
    justify-center
  `)
    img(src='home_background.png' alt='home background' class=`
      w-[90%] 
      md:w-[70%] 
      lg:w-[65%] 
      xl:w-[40%]
    `)
//- homesectiontwo
//-   homesectionthree
//-     homesectionfour
//-       homesectionfive
//-         homesectionsix
//-           homesectionseven
//-             homesectioneight
//-               carousel.carousel(:items-to-show='1')
//-                 slide.slide(key='1')
//-                   homesectionnine
//-                 slide(key='2')
//-                   homesectionninetwo
//-                 slide(key='3')
//-                   homesectionninethree
//-                 template(#addons='')
//-                   navigation
//-                     pagination
//-               homesectionten
//-                 //
//-                   <img src="section_three_lines.svg" alt="" class="absolute top-[300%] w-[25%] left-[25%] overflow-y-hidden">
//-                   <img src="section_four_lines.svg" alt="" class="absolute top-[380%] w-[40%] left-[25%] overflow-y-hidden">
//-                   <img src="section_five_lines.svg" alt="" class="absolute top-[490%] w-[30%] left-[30%] overflow-y-hidden">
//-                   <img src="section_six_lines.svg" alt="" class="absolute top-[590%] w-[30%] left-[30%] overflow-y-hidden">
</template>

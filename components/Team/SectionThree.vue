<template lang="pug">
section.w-screen(class='md:py-24')
  .flex.justify-center
  TeamCarrousel
  h2.text-3xl.font-bold.text-center.my-6 {{ $t(&quot;about_us&quot;) }}
  h1.text-center.m-auto(class='w-[90%]')
    | {{ $t(&quot;we_are_a&quot;) }} 
    br
    |       {{ $t(&quot;helping_companies&quot;) }}

</template> 
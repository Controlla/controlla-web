<template lang="pug">
section.w-screen(class='md:py-24')
  .flex.justify-center
  TeamCarrousel
  h2.text-3xl.font-bold.text-center.my-6 {{ $t('about_us') }}
  h1.text-center.m-auto(class='w-[90%]')
    |  {{ $t('we_are_a') }} 
    br
    |  {{ $t('helping_companies') }}

</template> 
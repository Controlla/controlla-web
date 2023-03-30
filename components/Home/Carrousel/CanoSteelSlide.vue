<template lang="pug">
section(class=`
  px-[5%]
  md:px-[10%]
  lg:px-10
  lg:flex
  md:text-lg
  min-[641px]:pt-[13%]
  md:pt-[10%]
  lg:pt-16
`)
  img(
    src='@/assets/img/cano_steel.webp'
    alt=''
    class=`
      hidden
      lg:inline
      w-[20vw]
      h-[25vw]
    `)
  div
    h1(class=`
      text-3xl
      font-semibold
      mx-4
      text-left
    `) {{ $t('cano_steel') }}
    h3(class=`
      text-left
      my-6
      mx-4
    `) {{ $t('custom_app') }}
    img(
      src='@/assets/img/cano_steel.webp' 
      alt='' 
      class=`
        lg:hidden
        w-[90%]
        p-[5%]
        md:w-[70%]
        mx-auto
      `)
    div(class=`
      text-left
      mx-12
    `)
      p(class=`
        font-bold
      `) {{ $t('insights') }}
      ul(class=`
        list-disc
        lg:grid
        grid-cols-2
      `)
        li {{ $t('project_overview') }}
        li {{ $t('finances') }}
        li {{ $t('fabrications') }}
        li {{ $t('rfi') }}
        li {{ $t('dashboards') }}
        li {{ $t('submittals') }}
    div(class=`
      lg:flex 
      my-6
      min-h-40
    `)
      div(class=`
        lg:w-48 
        shadow-lg
        shadow-gray-300
        mx-4
        px-6
        py-12
        h-36
        rounded-2xl
        mb-8
        lg:mb-0
      `)
        h4(class=`
          text-2xl
          font-bold
        `) 1500+
        h4 {{ $t('downloads') }}
      div(class=`
        lg:w-48 
        shadow-lg
        shadow-gray-300
        mx-4
        px-6
        py-12
        h-36
        rounded-2xl
        mb-8
        lg:mb-0
      `)
        h4(class=`
          text-2xl
          font-bold
        `) {{ $t('construction')}}
        h4 {{ $t('industry') }}
      div(class=`
        lg:w-48 
        shadow-lg
        shadow-gray-300
        mx-4
        px-6
        py-12
        h-36
        rounded-2xl
      `)
        h4(class=`
          text-2xl
          font-bold
        `) 6 {{ $t('months') }}
        h3(class=`
          font-bold
        `) 960 hrs
        h4 {{ $t('duration') }}
    button(class=`
      mx-4
      bg-black
      text-white
      rounded-full
      p-3
      px-7
      font-semibold
      text-lg
    `) {{ $t('webpage') }} &nearr;
  div(class=`
    flex
    justify-center
  `)
</template>

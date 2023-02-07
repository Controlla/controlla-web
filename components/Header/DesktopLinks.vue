<template lang="pug">
div(class=`
  hidden
  md:flex 
  md:justify-end 
  md:mr-5
`)
  NuxtLink(to='/' class=`
    mx-6 
    my-auto
  `) {{ $t('home') }}
  NuxtLink(to='/team' class=`
    mx-6
    my-auto
  `) {{ $t('team') }}
  NuxtLink(to='friendshore' class=`
    mx-6
    my-auto
  `) {{ $t('friendshore') }}
  ContactButton(is-header)
</template>

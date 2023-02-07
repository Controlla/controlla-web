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
  `) {{ $t(&quot;home&quot;) }}
  NuxtLink(to='/team' class=`
    mx-6
    my-auto
  `) {{ $t(&quot;team&quot;) }}
  NuxtLink(to='friendshore' class=`
    mx-6
    my-auto
  `) {{ $t(&quot;friendshore&quot;) }}
  ContactButton(is-header)
</template>

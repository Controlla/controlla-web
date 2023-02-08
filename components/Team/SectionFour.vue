<template lang="pug">
section(class=`
    w-screen
    overflow-y-hidden
`)
    div(class=`
        min-h-[50%] 
        w-screen
        overflow-y-hidden
        pt-6
    `)
        TeamSuccessCounters
    div(class=`
        min-h-[50%] 
        md:pt-12 
        w-screen
        overflow-y-hidden
        mb-10
    `)
        h1(class=`
            text-center
            text-3xl
            font-bold
        `)  {{ $t('trusted_partners') }}
        h2(class=`
            w-[90%] 
            text-center
            m-auto
        `)  {{ $t('some_of_the') }}
        div(class=`
            flex
            justify-center
            my-6
        `)
            nuxt-img(
                format='webp' 
                loading='lazy'
                src='/img/trusted_partners.svg'
                alt='trusted partners'
                class=`
                    w-[90%] 
                    md:w-[80%] 
                    lg:w-[20%]
        `)

</template>
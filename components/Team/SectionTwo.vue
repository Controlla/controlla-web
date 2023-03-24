<template lang="pug">
section(class=`
    w-screen
    bg-[#F9FAFB]
    z-40
    max-w-screen-xl
`)
    h3(class=`
        text-4xl
        font-bold
        text-center
        md:block
    `) {{ $t('our_team') }}
    div(class=`
        flex
        justify-center
        my-6
    `)
        img(
            src='@/assets/img/mobile_team.webp'
            alt='team'
            class=`
                w-[90%]
                sm:w-[60%]
                md:hidden
        `)
        img(
            src='@/assets/img/team.webp'
            alt='home background'
            class=`
                hidden
                mt-[10vh]
                md:w-[60vw]
                md:mx-[20vw]
                md:inline
        `)
</template>

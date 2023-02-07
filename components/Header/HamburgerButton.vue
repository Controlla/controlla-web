<template lang="pug">
div(class=`
    w-[100%]
    flex 
    flex-col 
    justify-center 
    items-end
    md:hidden
`)
    img(@click='$emit("menuToogled")' src='headbutton.png' alt='hamburger' class=`
        w-[2rem] 
        h-[2rem] 
        mr-6
    `)
</template>
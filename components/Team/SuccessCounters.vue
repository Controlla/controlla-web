<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Ref } from 'vue'

interface Counter {
    value: Ref<number>,
    max: number,
    text: string,
}

const counters: Array<Counter> = [
    {
        value: ref(0),
        max: 40,
        text: 'Members'
    },
    {
        value: ref(0),
        max: 125,
        text: 'Delivered Projects'
    },
    {
        value: ref(0),
        max: 5,
        text: 'Years'
    },
    
]

onMounted(() => {
    let options = {
        root: null,
        rootMargin: '0px 0px -25% 0px',
    }
      
    async function increment(counter) {
        for (let index = 0; index < counter.max; index++) {
            await  new Promise(resolve => setTimeout(resolve, 10));
            counter.value.value++
        }
    }

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting === true) counters.forEach(counter => {
            if(counter.value.value !== counter.max) increment(counter)
        })
    }, options);
    const target = document.querySelector("#success")
    observer.observe(target)
})

</script>

  
<template lang="pug">
div#success(
    class=`
    md:flex 
    md:w-[80%]
    md:m-auto
    md:justify-around
    w-screen
`)
    div(
        v-for="counter in counters"
        class=`
            w-[30%]
            flex
            flex-col
            text-3xl
    `)
        h2(class=`
            text-7xl
            text-sky-500
            text-3xl
            text-center
            mt-[2rem]
            md:mt-0
            md:text-center
        `) {{ counter.value }}+
        span(
            class=`
                text-center
            `
        ) {{ counter.text }}
</template>
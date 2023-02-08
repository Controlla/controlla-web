<template>
    <section class="w-screen overflow-y-hidden">
        <div class="w-screen min-h-[50%] overflow-y-hidden pt-6">
            <div class="md:flex justify-center w-screen">
                <h2 class="text-3xl md:mr-6 lg:mr-12 overflow-y-hidden mt-[2rem] md:mt-0 text-center md:text-left"><strong class="text-7xl text-sky-500">40+</strong> <br><br> Team members</h2>
                <h2 class="text-3xl md:mr-6 lg:mr-12 overflow-y-hidden mt-[2rem] md:mt-0 text-center md:text-left"><strong class="text-7xl text-sky-500">125+</strong><br><br> Delivered projects</h2>
                <h2 class="text-3xl md:mr-6 lg:mr-12 overflow-y-hidden mt-[2rem] md:mt-0 text-center md:text-left"><strong class="text-7xl text-sky-500">5+</strong><br><br> Years</h2>
            </div>
        </div>
        <div class="w-screen min-h-[50%] md:pt-12 overflow-y-hidden mb-10">
            <h1 class="text-center text-3xl font-bold"> {{ $t("trusted_partners") }}</h1>
            <h2 class="text-center w-[90%] m-auto"> {{ $t("some_of_the") }}</h2>
            <div class="flex justify-center my-6">
                <img format="webp" loading="lazy" src="/img/trusted_partners.svg" alt="trusted partners" class="w-[90%] md:w-[80%] lg:w-[20%]"/>
            </div>  
        </div>
    </section>
</template>
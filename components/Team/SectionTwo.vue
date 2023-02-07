<template>
<section class="w-screen bg-white py-24">
    <h3 class="text-4xl font-bold text-center">{{ $t("our_team") }}</h3>
    <div class="flex justify-center my-6 md:hidden">
        <nuxt-img format="webp" loading="lazy" src="/img/mobile_team.svg" alt="team" class="w-[90%]"/>
    </div>
    <nuxt-img format="webp" loading="lazy" src="/img/team.svg" alt="home background" class="hidden md:inline w-[90%] mx-[5%] md:w-[50vw] md:mx-[25vw] mt-[10vh]"/>
</section>
</template>
<template>
<section class="w-screen md:flex justify-center min-h-screen bg-white relative py-24 px-6 md:px-0 overflow-y-hidden">
    <div class="rounded-full bg-violet-300 w-[25rem] h-[25rem] absolute left-[12%] top-[15%] blur-[11rem] z-0"></div>
    <div class="rounded-full bg-blue-300 w-[25rem] h-[25rem] absolute left-[40%] top-[25%] blur-[11rem] z-0"></div>
    <div class="rounded-full bg-violet-300 w-[25rem] h-[25rem] absolute left-[70%] top-[15%] blur-[11rem] z-0"></div>
    <div class="md:mt-[15%] lg:mt-[8%]">
        <h3 class="text-5xl md:text-4xl lg:text-5xl my-6 overflow-y-hidden relative">{{ $t("meet_the_team") }}</h3>
        <h1 class="text-sky-500 my-6 text-5xl md:text-4xl lg:text-5xl font-bold overflow-y-hidden relative">{{ $t("problem_solvers") }}</h1>        
    </div>
    <!-- <div class="bg-white w-[120vw] h-[25vw] absolute right-[-10%] top-[40vh] overflow-x-hidden" style="border-radius: 100% 100% 0 0"></div>    -->
    <img src="us_lines.svg" alt="home background" class="relative w-[90%] md:w-[45vw] z-0">
</section>
<UsSectionTwo/>
<UsSectionThree/>
<UsSectionFour/>
<UsSectionFive/>
</template> 
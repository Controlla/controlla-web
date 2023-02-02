<template>
<section class="w-screen min-h-screen bg-white relative py-20 px-[5%] overflow-y-hidden">
    <div class="rounded-full bg-violet-300 w-[25rem] h-[25rem] absolute left-[12%] top-[15%] blur-[11rem] z-0"></div>
    <div class="rounded-full bg-blue-300 w-[25rem] h-[25rem] absolute left-[40%] top-[25%] blur-[11rem] z-0"></div>
    <div class="rounded-full bg-violet-300 w-[25rem] h-[25rem] absolute left-[70%] top-[15%] blur-[11rem] z-0"></div>
    <div class="md:flex justify-center">
        <div>
            <h3 class="relative text-6xl overflow-y-hidden leading-relaxed lg:leading-loose z-10">{{ $t("we_go_beyond") }} <span class="text-sky-500 font-bold"> {{ $t("borders") }}</span></h3>
            <h1 class="relative my-6 text-3xl overflow-y-hidden z-10">{{ $t("get_the_best") }}</h1>
        </div>
        <div class="flex justify-center"><img src="rocket.svg" alt="home background" class="relative w-[90%] md:w-[28vw] z-0"></div>
    </div>
    <!-- <div class="bg-white w-[120vw] h-[35vw] absolute right-[-10%] top-[40vh] overflow-x-hidden overflow-y-hidden" style="border-radius: 100% 100% 0 0">
        <div class="ml-[8%] w-screen mt-[5%] overflow-y-hidden">
            <h1 class="text-center"><strong class="text-3xl">Our Services</strong> <br> Mobile and web development</h1>
            <div class="flex justify-center mt-6"><img src="our_services.svg" alt="our_services"></div>
        </div>
    </div>    -->
    <div class="w-[100%] mt-[10%] overflow-y-hidden relative">
        <h1 class="text-center"><strong class="text-3xl">{{ $t("") }}</strong> <br> {{ $t("web_and_mobile") }}</h1>
        <div class="justify-center mt-6 hidden md:flex"><img src="our_services.svg" alt="our_services"></div>
        <div class="flex justify-center mt-6 md:hidden"><img src="mobile_our_services.svg" alt="our_services"></div>
    </div>    
</section>
<FriendshoreSectionTwo/>
<FriendshoreSectionThree/>
</template>
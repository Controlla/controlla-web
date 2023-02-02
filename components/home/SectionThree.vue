<template>
<section class="bg-white w-screen min-h-screen relative overflow-hidden">
  <div class="w-screen h-[50%] relative sm:flex overflow-hidden px-[5%] py-6 lg:px-[10%] lg:py-24 justify-center">
    <div class="rounded-full bg-violet-300 w-[25rem] h-[25rem] absolute left-[6%] top-[15%] blur-[11rem] z-0"></div>
    <div class="rounded-full bg-blue-300 w-[25rem] h-[25rem] absolute left-[40%] top-[-10%] blur-[11rem] z-0"></div>
    <div class="rounded-full bg-violet-300 w-[25rem] h-[25rem] absolute left-[75%] top-[15%] blur-[11rem] z-0"></div>
    <div class="z-10 mr-[10%] overflow-y-hidden relative">
      <h2 class="text-2xl leading-normal lg:text-4xl leading-[3rem] lg:my-6 overflow-y-hidden">{{ $t("we_go_beyond") }} <strong>{{ $t("borders") }}</strong></h2>
      <h2 class="text-xs lg:text-2xl overflow-y-hidden lg:my-6">{{ $t("discover_why") }}</h2>
      <button class="my-6 bg-black text-white rounded-full p-3 px-7 font-semibold text-sm lg:text-lg">{{ $t("visit_friendshore") }}</button>
    </div>
    <img src="rocket.png" alt="" class="w-[90%] mt-[1%] sm:w-[50%] z-10 relative">
  </div>
  <div class=" py-6 lg:py-24 w-[90%] m-auto">
    <h1 class="text-2xl lg:text-3xl text-center my-1 font-semibold overflow-y-hidden">{{ $t("the_key_to") }} <br> <span class="text-sky-500">{{ $t("strategy") }}</span> {{ $t("behind") }}</h1>
    <h2 class="text-lge text-center my-6"> {{ $t("more_than") }} <strong>{{ $t("development_and_strategic") }}</strong> <br> {{ $t("with_necessary_expertise") }} </h2>
    <div class="flex justify-center"><button class="bg-black text-white rounded-full p-3 px-7 font-semibold text-lg">{{ $t("contact_us") }}</button></div>    
  </div>
</section>  
</template>
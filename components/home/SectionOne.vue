<template>
<section class="w-screen min-h-screen overflow-x-hidden overflow-y-hidden bg-gradient-to-b from-white via-blue-200 to-blue-200 py-32">
  <div class="w-screen">
    <h1 class="block text-center 2xl:text-5xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl 2xl:h-[4rem] xl:h-[3rem] lg:h-[3rem] md:h-[3rem] sm:h-[3rem] my-1">{{ $t("transform_your_company") }}</h1>
    <h1 class="block text-center 2xl:text-5xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl  text-2xl 2xl:h-[4rem] xl:h-[3rem] lg:h-[3rem] md:h-[3rem] sm:h-[3rem] text-sky-500 font-semibold my-1"> {{ $t("with_world_class") }}</h1>
    <h2 class="block text-center text-lge my-5">
      {{ $t("we_design_and_develop") }} <strong>{{ $t("high_quality") }}</strong> {{ $t("digital_solutions") }} <br />
      {{ $t("methodic") }} <strong>{{ $t("strategy") }}</strong> {{ $t("through_trusted") }}
      <strong>{{ $t("alliances") }}</strong>
    </h2>
    <div class="flex justify-center">
      <button class="bg-black text-white rounded-full p-3 px-7 font-semibold text-lg">{{ $t("contact_us") }}</button>
    </div>
  </div>
  <!-- <div
    class="invisible sm:visible bg-white w-[120vw] h-[50%] absolute right-[-10%] bottom-[-20%] overflow-x-hidden"
    style="border-radius: 100% 100% 0 0"
  ></div> -->
  <div class="relative w-screen flex justify-center mt-[1%]">
      <img src="home_background.png" alt="home background" class="w-[90%] md:w-[70%] lg:w-[65%] xl:w-[40%]"/>
  </div>
</section>
<HomeSectionTwo/>
<HomeSectionThree/>
<HomeSectionFour/>
<HomeSectionFive/>  
<HomeSectionSix/>
<HomeSectionSeven/>
<HomeSectionEight/>
<HomeSectionNine/>
<HomeSectionNineTwo/>
<HomeSectionNineThree/>
<HomeSectionTen/> 
<!-- <img src="section_three_lines.svg" alt="" class="absolute top-[300%] w-[25%] left-[25%] overflow-y-hidden"> 
<img src="section_four_lines.svg" alt="" class="absolute top-[380%] w-[40%] left-[25%] overflow-y-hidden"> 
<img src="section_five_lines.svg" alt="" class="absolute top-[490%] w-[30%] left-[30%] overflow-y-hidden"> 
<img src="section_six_lines.svg" alt="" class="absolute top-[590%] w-[30%] left-[30%] overflow-y-hidden">  -->
</template>
<style>
</style>
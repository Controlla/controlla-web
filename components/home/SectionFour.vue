<template>
  <section class="bg-white w-screen min-h-screen md:flex md:justify-center relative pt-[12%] overflow-y-hidden">
    <div
      class="rounded-full bg-violet-200 w-[25rem] h-[25rem] absolute left-[12%] top-[15%] blur-[11rem] z-0"
    ></div>
    <div
      class="rounded-full bg-blue-100 w-[25rem] h-[25rem] absolute left-[40%] top-[50%] blur-[11rem] z-0"
    ></div>
    <div
      class="rounded-full bg-violet-200 w-[25rem] h-[25rem] absolute left-[70%] top-[15%] blur-[11rem] z-0"
    ></div>
    <img src="first_step.png" alt="first step" class="hidden md:inline md:w-[36vw] md:h-[25vw] z-10 relative" />
    <div class="z-10 px-[5%] md:px-0 md:w-[36vw] relative">
      <span class="my-6 text-sky-500 text-xs md:text-xl">{{ $t("first") }}</span>
      <h2 class="my-6 text-2xl md:text-4xl font-semibold overflow-y-hidden">
        {{ $t("ideation_and_evaluation") }}
      </h2>
      <h2 class="my-6 text-base md:text-2xl">
        {{ $t("first_we") }} <strong>{{ $t("research_ideate") }} </strong>
        {{ $t("your_product_features") }}
      </h2>
      <span class="text-base md:text-2xl marker:text-sky-400">
        {{ $t("discovery") }} <br />
        {{ $t("wireframe") }} <br />
        {{ $t("scoping") }}
      </span>
    </div>
    <img src="first_step.png" alt="first step" class=" w-[90%] h-[90%] md:hidden z-10 relative p-[5%]" />
  </section>
</template>

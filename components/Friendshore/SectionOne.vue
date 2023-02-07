<template>
  <section
    class="w-screen min-h-screen bg-white relative py-20 sm:px-[5%] overflow-hidden text-center md:text-left"
  >
    <div
      class="rounded-full bg-violet-300 w-[25rem] h-[25rem] absolute left-[12%] top-[15%] blur-[11rem] z-0"
    ></div>
    <div
      class="rounded-full bg-blue-300 w-[25rem] h-[25rem] absolute left-[40%] top-[25%] blur-[11rem] z-0"
    ></div>
    <div
      class="rounded-full bg-violet-300 w-[25rem] h-[25rem] absolute left-[70%] top-[15%] blur-[11rem] z-0"
    ></div>
    <div class="md:flex justify-center relative w-[90%] m-auto">
      <div>
        <h3
          class="relative text-6xl overflow-y-hidden leading-relaxed lg:leading-loose z-10"
        >
          {{ $t("we_go_beyond") }}
          <span class="text-sky-500 font-bold"> {{ $t("borders") }}</span>
        </h3>
        <h1 class="relative my-6 text-3xl overflow-y-hidden z-10">
          {{ $t("get_the_best") }}
        </h1>
      </div>
      <div class="flex justify-center">
        <img
          src="rocket.svg"
          alt="home background"
          class="relative w-[90%] md:w-[28vw] z-0"
          style="z-index: 1"
        />
      </div>
      <div
        class="sm:visible bg-white w-[100vw] h-[50%] absolute bottom-[-20%] overflow-x-hidden left-[-20px] md:left-auto"
        style="border-radius: 100% 100% 0 0"
      ></div>
    </div>
    <div class="w-[100%] mt-[10%] overflow-y-hidden relative">
      <h1 class="text-center">
        <strong class="text-3xl">{{ $t("web_and_mobile") }}</strong>
      </h1>
      <div class="justify-center mt-6 hidden md:flex">
        <img src="our_services.svg" alt="our_services" />
      </div>
      <div class="flex justify-center mt-6 md:hidden">
        <img src="mobile_our_services.svg" alt="our_services" />
      </div>
    </div>
  </section>
</template>

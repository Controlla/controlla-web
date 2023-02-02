<template>
  <section class="bg-cyan-50 w-screen min-h-screen relative md:flex justify-center pt-[12%] overflow-hidden">
    <div
      class="rounded-full bg-violet-200 w-[25rem] h-[25rem] absolute left-[6%] top-[15%] blur-[11rem] z-0"
    ></div>
    <div
      class="rounded-full bg-violet-100 w-[25rem] h-[25rem] absolute left-[40%] top-[45%] blur-[11rem] z-0"
    ></div>
    <div
      class="rounded-full bg-violet-200 w-[25rem] h-[25rem] absolute left-[75%] top-[8%] blur-[11rem] z-0"
    ></div>
    <div class="z-10 px-[5%] md:px-0 md:w-[41vw] relative">
      <span class="my-6 text-sky-500 text-xs md:text-xl">{{ $t("second") }}</span>
      <h2 class="my-6 text-2xl md:text-4xl font-semibold overflow-y-hidden">
        {{ $t("product_design") }}
      </h2>
      <h2 class="my-6 text-base md:text-2xl">
        {{ $t("our_products") }}
        <strong>{{ $t("aesthetically_pleasing") }} </strong>{{ $t("we_believe") }}
      </h2>
      <span class="text-base md:text-2xl">
        {{ $t("architecture") }} <br />
        {{ $t("sketching") }}<br />
        {{ $t("design") }}
      </span>
    </div>
    <img
      src="second_step.png"
      alt="first step"
      class="w-[90%] md:w-[41vw] md:h-[30vw] z-10 relative"
    />
  </section>
</template>

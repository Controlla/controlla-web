<template>
  <section class="bg-cyan-50 w-screen relative min-h-screen md:flex justify-center pt-[12%] overflow-hidden">
    <div
      class="rounded-full bg-violet-200 w-[25rem] h-[25rem] absolute left-[6%] top-[15%] blur-[11rem] z-0"
    ></div>
    <div
      class="rounded-full bg-violet-200 w-[25rem] h-[25rem] absolute left-[75%] top-[8%] blur-[11rem] z-0"
    ></div>
    <div class="px-[5%] md:px-0 md:w-[25vw] relative z-10">
      <span class="my-6 text-sky-500 text-xs md:text-xl">{{ $t("fourth") }}</span>
      <h2 class="my-6 text-2xl md:text-4xl font-semibold overflow-y-hidden">
        {{ $t("qa_test_and_launch") }}
      </h2>
      <h2 class="my-6 text-base md:text-2xl">
        {{ $t("quality_stands") }} 
        <strong>{{ $t("preventing_error") }} </strong>
        {{ $t("delivering_secure") }} 
      </h2>
      <span class="text-base md:text-2xl">
        {{ $t("audit") }} <br />
        {{ $t("automate") }} <br />
        {{ $t("test") }}
      </span>
    </div>
    <div class="flex justify-center"><img src="fourth_step.png" alt="first step" class="w-[60%] relative md:w-[25vw] md:h-[35vw] z-10" /></div>
  </section>
</template>

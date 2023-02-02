<template>
  <section class="bg-white w-screen min-h-screen relative md:flex justify-center pt-[12%] overflow-y-hidden">
    <div
      class="rounded-full bg-violet-200 w-[25rem] h-[25rem] absolute left-[6%] top-[15%] blur-[11rem] z-0"
    ></div>
    <div
      class="rounded-full bg-violet-200 w-[25rem] h-[25rem] absolute left-[40%] top-[50%] blur-[11rem] z-0"
    ></div>
    <div
      class="rounded-full bg-violet-200 w-[25rem] h-[25rem] absolute left-[75%] top-[8%] blur-[11rem] z-0"
    ></div>
    <img src="third_step.png" alt="first step" class="hidden md:inline w-[42vw] h-[28vw] z-10" />
    <div class="z-10 px-[5%] md:px-0 md:w-[42vw] relative">
      <span class="my-6 text-sky-500 text-xs md:text-xl">{{ $t("third") }}</span>
      <h2 class="my-6 text-2xl md:text-4xl font-semibold overflow-y-hidden">{{ $t("development") }}</h2>
      <h2 class="my-6 text-base md:text-2xl">
        {{ $t("your_tailormade") }}
        <strong
          >{{ $t("deep_end") }}</strong
        >
        {{ $t("and_different_communication") }}
      </h2>
      <span class="text-base md:text-2xl"
        >• {{ $t("web_and_mobile") }} <br />
        {{ $t("flutter") }}<br />
        {{ $t("jira") }} <br />
        {{ $t("vue") }}
      </span>
    </div>
    <img src="third_step.png" alt="first step" class="md:hidden w-[90%] px-[5%] z-10 relative" />    
  </section>
</template>

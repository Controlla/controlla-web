<template>
    <img src="second_step.png" alt="" class="hidden md:inline w-[30vw] h-[20vw]" />
    <div>
      <h1 class="text-3xl font-semibold overflow-y-hidden mx-4">{{ $t("sercom") }}</h1>
      <h3 class="my-6 mx-4">
        {{ $t("custom_software") }} <br />
      </h3>
      <div class="md:flex my-6 min-h-40">
        <div
          class="md:w-48 shadow-lg shadow-gray-300 mx-4 px-6 py-12 h-36 rounded-2xl overflow-y-hidden"
        >
          <h4 class="text-2xl font-bold overflow-y-hidden">20+</h4>
          <h4>{{ $t("final_users") }}</h4>
        </div>
        <div
          class="md:w-48 shadow-lg shadow-gray-300 mx-4 px-6 py-12 h-36 rounded-2xl overflow-y-hidden"
        >
          <h4 class="text-2xl font-bold overflow-y-hidden">12 months</h4>
          <h3 class="font-bold">/1920 hrs</h3>
          <h4>{{ $t("duration") }}</h4>
        </div>
        <div
          class="md:w-48 shadow-lg shadow-gray-300 mx-4 px-6 py-12 h-36 rounded-2xl overflow-y-hidden"
        >
          <h4 class="text-2xl font-bold overflow-y-hidden">Web</h4>
          <h4>{{ $t("technologies") }}</h4>
        </div>
      </div>
      <button
        class="mx-4 bg-black text-white rounded-full p-3 px-7 font-semibold text-lg"
      >
        {{ $t("webpage") }} ↗
      </button>
    </div>
    <div class="flex justify-center"><img src="second_step.png" alt="" class="md:hidden w-[90%] p-[5%]" /></div>
</template>
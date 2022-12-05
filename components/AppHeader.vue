<template>
  <div class="grid grid-cols-12 py-14 text-base md:text-xl lg:text-2xl">
    <div
      class="col-start-2 max-[400px]:col-start-1 col-span-2 pl-30 w-32 md:w-44 max-[400px]:w-20"
    >
      <nuxt-img src="/logocontrolla.svg" />
    </div>
    <div
      class="col-start-7 max-[400px]:col-start-5 sm:col-start-8 lg:grid gap-x-0 w-0"
    >
      <button>Home</button>
    </div>
    <div class="max-[400px]:pl-7 lg:grid gap-x-0 w-0 px-4 sm:pl-2 md:pl-0">
      <button>{{ $t("team") }}</button>
    </div>
    <div
      class="col-start-10 max-[400px]:col-start-9 grid gap-x-0 w-24 sm:w-28 md:w-32 lg:w-40 lg:py-3 lg:px-5 bg-gray-900 text-white rounded-full font-bold justify-center"
    >
      <button>{{ $t("contact") }}</button>
    </div>
  </div>
</template>

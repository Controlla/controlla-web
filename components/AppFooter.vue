<template>
  <div
    class="grid grid-cols-12 grid-rows-2 pt-10 text-sm sm: text-base md:text-xl lg:text-2xl"
  >
    <div
      class="col-start-2 max-[390px]:col-start-1 w-20 min-[500px]:w-28 sm:w-36 md:w-44 lg:w-max"
    >
      <nuxt-img src="/logocontrolla.svg" />
    </div>
    <div class="max-[390px]:col-start-4 col-start-5 px-2 col-span-3">
      <div class="text-base min-[600px]:text-2xl md:text-3xl pb-16 sm:pb-5">
        <p>
          {{ $t("work") }}<strong> {{ $t("together") }}</strong>
        </p>
      </div>
      <div
        class="justify-center row-start-2 grid gap-x-0 w-32 md:w-44 h-14 sm:h-12 md:h-20 pt-4"
      >
        <button class="bg-gray-900 text-white rounded-full font-bold px-4">
          {{ $t("contact") }}
        </button>
      </div>
    </div>
    <div class="col-start-8 col-span-2 md:col-span-3 cursor-pointer">
      <div class="row-start-1 hover:underline">{{ $t("services") }}</div>
      <div class="row-start-2 hover:underline">{{ $t("success") }}</div>
      <div class="row-start-3 hover:underline">{{ $t("portfolio") }}</div>
    </div>
    <div class="col-start-10 px-5 sm:col-start-11 col-span-2 cursor-pointer">
      <div class="row-start-1 hover:underline">{{ $t("us") }}</div>
      <div class="row-start-2 hover:underline">{{ $t("terms") }}</div>
      <div class="row-start-3 hover:underline">{{ $t("privacy") }}</div>
    </div>
    <div class="col-start-5 sm:col-start-6 col-span-3 row-start-3">
      <div
        class="grid grid-cols-6 inline w-max gap-x-1 md:gap-x-4.5 lg:gap-x-5 2xl:gap-x-10 sm:px-1"
      >
        <div class="col-start-1">
          <a href="https://www.facebook.com/controlla.cuu?mibextid=LQQJ4d"
            ><nuxt-img src="/facebook.svg"
          /></a>
        </div>
        <div class="col-start-3">
          <a
            href="https://instagram.com/controlla_technologies?igshid=NTdlMDg3MTY="
            ><nuxt-img src="/instagram.svg"
          /></a>
        </div>
        <div class="col-start-5">
          <a href="https://www.linkedin.com/company/controlla/"
            ><nuxt-img src="/linkedin.svg"
          /></a>
        </div>
      </div>
    </div>
    <div
      class="col-start-4 col-span-6 row-start-3 sm:row-start-4 pt-10 pb-1 px-2 text-base sm:text-lg lg:text-xl text-center"
    >
      {{ $t("copyright") }}
    </div>
  </div>
</template>

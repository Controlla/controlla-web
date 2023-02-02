<template>
  <section class="max-w-screen-xl m-auto">
    <div class="grid grid-cols-12 grid-rows-auto pt-10 text-xl text-center">
      <div
        class="col-start-1 col-span-12 lg:col-start-2 lg:col-span-1 place-self-center lg:place-self-start pb-10 lg:pt-0 w-max"
      >
        <nuxt-img src="/logocontrolla.svg" />
      </div>
      <div
        class="col-start-1 col-span-12 lg:col-span-3 row-start-2 lg:row-start-1 lg:col-start-5 lg:px-2"
      >
        <div class="text-3xl lg:pb-5 lg:text-left">
          <p>
            {{ $t("work") }}<strong> {{ $t("together") }}</strong>
          </p>
        </div>
        <div class="justify-center lg:w-44 h-max pt-8 lg:pt-4">
          <button
            class="bg-gray-900 hover:bg-gray-800 hover:cursor-pointer text-lg text-white rounded-full font-bold py-5 px-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            @click="contact"
          >
            {{ $t("contact") }}
          </button>
        </div>
      </div>
      <div
        class="col-start-5 lg:col-start-8 row-start-4 pt-10 lg:pt-0 lg:row-start-1 col-span-4 lg:col-span-2 lg:text-left"
      >
        <div class="row-start-1 pt-5 hover:animate-pulse lg:w-1">
          <a href="">{{ $t("services") }}</a>
        </div>
        <div class="row-start-2 lg:w-3/4 hover:animate-pulse">
          <a href="">{{ $t("success") }}</a>
        </div>
        <div class="row-start-3 lg:w-1 hover:animate-pulse">
          <a href="">{{ $t("portfolio") }}</a>
        </div>
      </div>
      <div
        class="col-start-4 lg:col-start-10 row-start-5 lg:row-start-1 col-span-6 lg:col-span-2 lg:text-left"
      >
        <div class="row-start-1 hover:animate-pulse lg:w-1">
          <a href="">{{ $t("us") }}</a>
        </div>
        <div class="row-start-2 hover:animate-pulse lg:w-1">
          <a href="">{{ $t("terms") }}</a>
        </div>
        <div class="row-start-3 hover:animate-pulse">
          <a href="">{{ $t("privacy") }}</a>
        </div>
      </div>
      <div
        class="col-start-7 place-self-center lg:col-start-6 lg:justify-self-start row-start-6 pt-48 lg:pt-12 hover:-translate-y-1 hover:scale-100 duration-300"
      >
        <div
          class="grid grid-cols-6 lg:grid-cols-10 inline w-max gap-x-1 lg:gap-x-0 min-[450px]:pr-2 sm:pr-8 md:pr-12"
        >
          <div
            class="col-start-1 lg:col-start-2 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <a href="https://www.facebook.com/controlla.cuu?mibextid=LQQJ4d"
              ><nuxt-img src="/facebook.svg"
            /></a>
          </div>
          <div
            class="col-start-3 lg:col-start-5 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <a
              href="https://instagram.com/controlla_technologies?igshid=NTdlMDg3MTY="
              ><nuxt-img src="/instagram.svg"
            /></a>
          </div>
          <div
            class="col-start-5 lg:col-start-8 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <a href="https://www.linkedin.com/company/controlla/"
              ><nuxt-img src="/linkedin.svg"
            /></a>
          </div>
        </div>
      </div>
      <div
        class="col-start-1 lg:col-start-4 col-span-12 lg:col-span-6 row-start-7 pt-8 pb-1 text-xs lg:text-sm pb-5"
      >
        {{ $t("copyright") }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { createPopup } from "@typeform/embed";
import "@typeform/embed/build/css/popup.css";
const { toggle } = createPopup("BYWHV4");

function contact() {
  toggle();
}
</script>

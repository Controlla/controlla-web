<template>
  <section
    class="bg-white w-[100vw] md:w-[100vw] min-h-screen md:h-[20vw] md:min-h-[20vw] absolute left-0 md:right-[-10%] overflow-x-hidden overflow-y-hidden  md:rounded-tl-[100%] md:rounded-tr-[100%]"
  >
    <div
      class="rounded-full bg-violet-300 w-[25rem] h-[25rem] absolute left-[6%] top-[15%] blur-[11rem]"
    ></div>
    <div
      class="rounded-full bg-blue-300 w-[25rem] h-[25rem] absolute left-[40%] top-[-10%] blur-[11rem]"
    ></div>
    <div
      class="rounded-full bg-violet-300 w-[25rem] h-[25rem] absolute left-[75%] top-[15%] blur-[11rem]"
    ></div>
    <div
      class="block w-screen md:h-[60%] relative sm:mt-[4%] md:flex md:justify-center mt-[20%]"
    >
      <div class="py-12 px-[10%] md:px-[0] md:py-6 flex justify-center">
        <img
          src="logocontrolla.svg"
          alt="logo controlla"
          class="w-[80%] md:w-[100%] max-w-[20rem]"
        />        
      </div>
      <div class="mx-[5%]">
        <h3 class="text-2xl my-6 text-center md:text-left">{{ $t("lets_work") }} <strong>{{ $t("together") }}</strong></h3>
        <div class="flex justify-center md:justify-start">
          <button
          @click="contact"
            class="bg-black text-white rounded-full p-3 px-7 font-semibold text-lg"
          >
            {{ $t("contact_us") }}
          </button>          
        </div>
      </div>
      <div class="my-6 mx-[5%]">
        <h3 class="text-xl leading-8 text-center md:text-left">
          {{ $t("services") }} <br />
          {{ $t("success") }} <br />
          {{ $t("portfolio") }}
        </h3>
      </div>
      <div class="my-6 mx-[5%]">
        <h3 class="text-xl leading-8 text-center md:text-left">
          {{ $t("Us") }} <br />
          {{ $t("terms") }} <br />
          {{ $t("privacy") }}
        </h3>
      </div>
    </div>
    <div class="w-screen md:ml-[15%] md:ml-[0] h-[25%] relative">
      <div class="flex justify-center mb-6">
        <img src="facebook.svg" alt="logo facebook" class="mx-6" />
        <img src="instagram.svg" alt="logo instagram" class="mx-6" />
        <img src="linkedin.svg" alt="logo linkedin" class="mx-6" />
      </div>
      <h3 class="text-center text-xs">
        {{ $t("copyright") }}
      </h3>
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
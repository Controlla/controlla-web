<template>
  <section class="w-screen min-h-screen bg-white md:flex justify-center">
    <div class="md:mt-[25vh]">
      <h3 class="text-3xl font-semibold overflow-y-hidden my-6 text-center md:text-start">
        {{ $t("you_can_find") }} <strong class="text-sky-500"> {{ $t("here") }}</strong>
      </h3>
      <h3 class="my-6 text-center md:text-start">
        {{ $t("tell_us_your") }}
        <br />
        {{ $t("or_fill_out") }} <br/>
        {{ $t("we_will_contact") }}
      </h3>
      <div class="flex justify-center md:justify-start">
        <button
        @click="contact"
          class="bg-black text-white rounded-full p-3 px-7 font-semibold text-lg"
        >
          {{ $t("contact_us") }}
        </button>        
      </div>
    </div>
    <div class="flex justify-center"><img src="building.png" alt="" class="pl-6 w-[75%] my-[5%] md:my-0 md:w-[17vw] md:h-[30vw]" /></div>
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
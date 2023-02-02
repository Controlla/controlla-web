<template>
  <section class="bg-white w-screen min-h-screen px-6 md:px-[20vw] py-24 overflow-hidden">
    <h3 class="text-3xl text-center overflow-y-hidden">
      {{ $t("why") }} <strong class="text-sky-500"> {{ $t("choose") }}</strong> {{ $t("us") }}
    </h3>
    <h3 class="text-center my-6">
      {{ $t("by_now_you") }}
    </h3>
    <div class="md:flex md:justify-center my-6 min-h-80 overflow-y-hidden">
      <div class="shadow-lg shadow-gray-300 mx-4 px-6 py-6 min-h-72 rounded-2xl">
        <img class="w-12 my-6" src="hug.png" alt="hug" />
        <h3>{{ $t("we_care_for") }}</h3>
        <h3>
          {{ $t("we_are_all") }} <br />
          <strong> {{ $t("culture_needs") }}</strong> <br />
          {{ $t("we_cherish") }}
        </h3>
      </div>
      <div class="shadow-lg shadow-gray-300 mx-4 px-6 py-6 min-h-72 rounded-2xl">
        <img class="w-12 my-6" src="plane.png" alt="hug" />
        <h3>{{ $t("miles_from_us") }}</h3>
        <h3>
          {{ $t("we_are_just") }}<br />
          {{ $t("or_a_single") }}
          <strong> {{ $t("distance_and_language") }}</strong> <br />
        </h3>
      </div>
      <div class="shadow-lg shadow-gray-300 mx-4 px-6 py-6 min-h-72 rounded-2xl">
        <img class="w-12 my-6" src="board.png" alt="hug" />
        <h3>{{ $t("proven_results") }}</h3>
        <h3>
          {{ $t("our_partners_have") }} <br />
        </h3>
      </div>
    </div>
  </section>
</template>

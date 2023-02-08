<template>
  <section class="bg-white w-screen px-[20vw] py-24">
    <h3 class="text-3xl text-center overflow-y-hidden">
      {{ $t("why") }} <strong class="text-sky-500"> {{ $t("work") }}</strong> {{ $t("with_us") }}
    </h3>
    <div class="md:flex md:justify-center my-6 min-h-80 overflow-y-hidden">
      <div class="shadow-lg shadow-gray-300 mx-4 px-6 py-6 min-h-72 rounded-2xl">
        <img format="webp" loading="lazy" class="w-12 my-6" src="/img/hourglass.svg" alt="hourglass" />
        <h3>{{ $t("fast_projects") }}</h3>
        <h3>
          {{ $t("thanks_to") }} <br />
          {{ $t("tech_tools") }}
        </h3>
      </div>
      <div class="shadow-lg shadow-gray-300 mx-4 px-6 py-6 min-h-72 rounded-2xl">
        <img format="webp" loading="lazy" class="w-12 my-6" src="/img/calendar.svg" alt="hug" />
        <h3>{{ $t("agile_methodology") }}</h3>
        <h3>
          {{ $t("timely_delivery") }} <br />
          {{ $t("at_our_core") }} <br />
          {{ $t("continuous_feedback") }} <br />
          {{ $t("following_scrum") }}
        </h3>
      </div>
      <div class="shadow-lg shadow-gray-300 mx-4 px-6 py-6 min-h-72 rounded-2xl">
        <img format="webp" loading="lazy" class="w-12 my-6" src="/img/plane.png" alt="hug" />
        <h3>{{ $t("privileged_location") }}</h3>
        <h3>
          {{ $t("just_miles") }} <br />
          {{ $t("flight") }} <br />
          {{ $t("timezone") }} <br />
        </h3>
      </div>
    </div>
  </section>
</template>

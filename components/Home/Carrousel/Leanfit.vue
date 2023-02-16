<template>
  <section
    class="bg-white px-[5%] md:px-[10%] md:flex overflow-y-hidden md:text-lg"
  >
    <nuxt-img
      format="webp"
      loading="lazy"
      src="/img/leanfit.png"
      alt=""
      class="hidden md:inline w-[20vw] h-[25vw]"
    />
    <div>
      <h1 class="text-3xl font-semibold overflow-y-hidden mx-4 text-left">
        {{ $t("leanfit") }}
      </h1>
      <h3 class="text-left my-6 mx-4">
        {{ $t("personalized_diet") }}
      </h3>
      <div class="md:flex my-6 min-h-40">
        <div
          class="md:-48 shadow-lg shadow-gray-300 mx-4 px-6 py-12 h-36 rounded-2xl overflow-y-hidden"
        >
          <h4 class="text-2xl font-bold overflow-y-hidden">15,200+</h4>
          <h4>{{ $t("downloads") }}</h4>
        </div>
        <div
          class="md:w-48 shadow-lg shadow-gray-300 mx-4 px-6 py-12 h-36 rounded-2xl overflow-y-hidden"
        >
          <h4 class="text-2xl font-bold overflow-y-hidden">35+</h4>
          <h4>{{ $t("countries") }}</h4>
        </div>
        <div
          class="md:w-48 shadow-lg shadow-gray-300 mx-4 px-6 py-12 h-36 rounded-2xl overflow-y-hidden"
        >
          <h4 class="text-2xl font-bold overflow-y-hidden">$50,578</h4>
          <h4>{{ $t("in_subscriptions") }}</h4>
        </div>
      </div>
      <button
        class="mx-4 bg-black text-white rounded-full p-3 px-7 font-semibold text-lg"
      >
        {{ $t("webpage") }} ↗
      </button>
    </div>
    <div class="flex justify-center">
      <nuxt-img
        format="webp"
        loading="lazy"
        src="/img/leanfit.png"
        alt=""
        class="md:hidden w-[90%] p-[5%]"
      />
    </div>
  </section>
</template>

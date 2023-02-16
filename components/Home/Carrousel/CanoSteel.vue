<template>
  <section
    class="bg-white px-[5%] md:px-[10%] md:flex overflow-y-hidden md:text-lg"
  >
    <nuxt-img
      format="webp"
      loading="lazy"
      src="/img/cano_steel.png"
      alt=""
      class="hidden md:inline w-[20vw] h-[25vw]"
    />
    <div>
      <h1 class="text-3xl font-semibold overflow-y-hidden mx-4 text-left">
        {{ $t("cano_steel") }}
      </h1>
      <h3 class="text-left my-6 mx-4">
        {{ $t("custom_app") }}
      </h3>
      <div class="text-left mx-12">
        <p class="font-bold">{{ $t("insights") }}</p>
        <ul class="list-disc grid grid-cols-2">
          <li>{{ $t("project_overview") }}</li>
          <li>{{ $t("finances") }}</li>
          <li>{{ $t("fabrications") }}</li>
          <li>{{ $t("rfi") }}</li>
          <li>{{ $t("dashboards") }}</li>
          <li>{{ $t("submittals") }}</li>
        </ul>
      </div>
      <div class="md:flex my-6 min-h-40">
        <div
          class="min-w-48 shadow-lg shadow-gray-300 mx-4 px-6 py-12 h-36 rounded-2xl overflow-y-hidden"
        >
          <h4 class="text-2xl font-bold overflow-y-hidden">1500+</h4>
          <h4>{{ $t("downloads") }}</h4>
        </div>
        <div
          class="min-w-48 shadow-lg shadow-gray-300 mx-4 px-6 py-12 h-36 rounded-2xl overflow-y-hidden"
        >
          <h4 class="text-2xl font-bold overflow-y-hidden">2</h4>
          <h4>{{ $t("countries") }}</h4>
        </div>
        <div
          class="md:w-48 shadow-lg shadow-gray-300 mx-4 px-6 py-12 h-36 rounded-2xl overflow-y-hidden"
        >
          <h4 class="text-2xl font-bold overflow-y-hidden">
            6 {{ $t("months") }}
          </h4>
          <h3 class="font-bold">/960 hrs</h3>
          <h4>{{ $t("duration") }}</h4>
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
        src="/img/cano_steel.png"
        alt=""
        class="md:hidden w-[90%] p-[5%]"
      />
    </div>
  </section>
</template>

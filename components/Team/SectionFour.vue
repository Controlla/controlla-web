<template>
  <section class="w-screen overflow-y-hidden">
    <div class="w-screen min-h-[50%] overflow-y-hidden pt-6">
      <team-success-counters/>
    </div>
    <div class="w-screen min-h-[50%] md:pt-12 overflow-y-hidden mb-10">
      <h1 class="text-center text-3xl font-bold">
        {{ $t("trusted_partners") }}
      </h1>
      <h2 class="text-center w-[90%] m-auto">{{ $t("some_of_the") }}</h2>
      <div class="flex justify-center my-6 md:my-12">
        <nuxt-img
          format="webp"
          loading="lazy"
          src="/img/trusted_partners_desktop.svg"
          alt="trusted partners"
          class="w-[90%] md:w-[80%] max-w-[70rem] hidden md:inline"
        />
        <nuxt-img
          format="webp"
          loading="lazy"
          src="/img/trusted_partners.svg"
          alt="trusted partners"
          class="w-[90%] md:w-[80%] lg:w-[20%] md:hidden"
        />
      </div>
    </div>
  </section>
</template>

<template>
  <section class="bg-white w-screen pt-20 flex justify-center">
      <div class="w-[30%]">
          <div class="flex justify-left rotate-6"><img format="webp" loading="lazy" src="/img/php.svg" alt="" class="w-[5rem] md:w-[8rem]"/></div>
          <div class="flex justify-center rotate-[-17deg]"><img format="webp" loading="lazy" src="/img/java.svg" alt="" class="w-[5rem] md:w-[8rem]"/></div>
          <div class="flex- justify-left rotate-6"><img format="webp" loading="lazy" src="/img/phyton.svg" alt="" class="w-[5rem] md:w-[8rem]"/></div>
      </div>
      <div class="w-[30%]">
        <h3 class="text-center my-6 text-3xl md:text-4xl font-semi-bold">{{ $t("still_not_convinced") }}</h3>      
        <h3 class="text-center">{{ $t("maybe_our") }} <span class="text-sky-500">{{ $t("tech_stack") }}</span> {{ $t("will_help") }}</h3>          
      </div>
      <div class="w-[30%] pl-[10%]">
          <div class="flex justify-left rotate-6"><img format="webp" loading="lazy" src="/img/laravel.svg" alt="" class="w-[5rem] md:w-[8rem]"/></div>
          <div class="flex justify-center rotate-[-17deg]"><img format="webp" loading="lazy" src="/img/vue.svg" alt="" class="w-[5rem] md:w-[8rem]"/></div>
          <div class="flex- justify-left rotate-6"><img format="webp" loading="lazy" src="/img/flutter.svg" alt="" class="w-[5rem] md:w-[8rem]"/></div>
      </div>
  </section>
</template>
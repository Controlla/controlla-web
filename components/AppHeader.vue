<template>
  <section class="max-w-screen-xl my-10 mx-auto">
    <div class="grid grid-cols-12 text-base md:text-xl">
      <div class="col-start-2 w-44">
        <div>
          <nuxt-img class="hidden lg:block lg:w-44" src="/logocontrolla.svg" />
          <nuxt-img class="lg:hidden w-9" src="c.svg"></nuxt-img>
        </div>
      </div>
      <div class="col-start-11 lg:hidden py-1 place-self-center">
        <button class="cursor-pointer" @click="drawer">
          <nuxt-img src="headbutton.png"></nuxt-img>
        </button>
      </div>
      <div class="hidden lg:block col-start-8 lg:grid gap-x-0 w-0">
        <button>Home</button>
      </div>
      <div class="hidden lg:visible px-4 pl-2 lg:grid gap-x-0 w-0">
        <button>{{ $t("team") }}</button>
      </div>
      <div
        class="hidden lg:block text-center col-start-10 grid gap-x-0 w-24 lg:w-40 lg:py-3 lg:px-5 bg-gray-900 hover:bg-gray-800 hover:cursor-pointer text-white rounded-full font-bold justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <button>{{ $t("contact") }}</button>
      </div>
    </div>
    <div
      class="p-5 transform top-0 left-0 w-screen bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="grid grid-cols-5">
        <button
          class="col-start-6 sm:col-start-5 px-4 sm:place-self-center pt-7"
          @click="isOpen = false"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <ul class="divide-y text-center pt-32 text-lg">
        <li>
          <a href="#" class="my-4 inline-block" @click="isOpen = false">Home</a>
        </li>
        <li>
          <a href="#" class="my-4 inline-block" @click="isOpen = false">{{
            $t("team")
          }}</a>
        </li>
        <li>
          <a href="#" class="my-4 inline-block" @click="isOpen = false">{{
            $t("contact")
          }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

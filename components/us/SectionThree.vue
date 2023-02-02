<template>
<section class="w-screen md:py-24">
    <div class="flex justify-center"> 
      <UsCarousel/>
    </div>
    <h2 class="text-3xl font-bold text-center my-6">{{ $t("about_us") }}</h2>
    <h1 class="text-center w-[90%] m-auto">{{ $t("we_are_a") }} <br />
      {{ $t("helping_companies") }}
    </h1>
</section>
</template> 
<script>
const UsCarousel = () => import('~~/components/us/Carousel.vue')
export default {
  components: {
    UsCarousel
  }
};
</script>
<template>
<section class="w-screen min-h-screen md:py-24">
    <div class="flex justify-center"> 
      <UsCarousel/>
    </div>
    <h2 class="text-3xl font-bold text-center my-6">About us</h2>
    <h1 class="text-center">We are a mexican based app and software development <br> company. Helping companies solve problems with end to end <br> technology and design.</h1>
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
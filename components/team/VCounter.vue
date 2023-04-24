<template>
  <section class="counter">
    <article class="counter__content">
      <header class="counter__content__header">
        <ul class="counter__content__header__numbers">
          <li class="counter__content__header__numbers__number">
            <h2>{{ memebers }}+</h2>
            <p>{{ $t('counter.team_members') }}</p>
          </li>
          <li class="counter__content__header__numbers__number">
            <h2>{{ projects }}+</h2>
            <p>{{ $t('counter.projects') }}</p>
          </li>
          <li class="counter__content__header__numbers__number">
            <h2>{{ years }}+</h2>
            <p>{{ $t('counter.years') }}</p>
          </li>
        </ul>
      </header>
    </article>
  </section>
</template>

<script>
export default defineComponent({
  setup() {
    const { number: memebers } = useCounter(40)
    const { number: projects } = useCounter(125)
    const { number: years } = useCounter(5)

    return {
      memebers,
      projects,
      years
    }
  }
})
</script>

<style lang="scss">
.counter {
  @apply py-12 lg:py-16;
  &__content {
    @apply container-fluid;
    &__header {
      @apply w-full;
      &__numbers {
        @apply flex flex-wrap items-center justify-center;
        &__number {
          @apply w-full md:w-6/12 lg:w-4/12;
          @apply flex flex-col items-center justify-center;
          & h2 {
            @apply text-[72px] md:text-[84px] lg:text-[100px] xl:text-[120px] leading-[1.1] text-center;
            @apply font-bold bg-clip-text bg-bg-gradient-text;
            @apply text-fill-transparent;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          & p {
            @apply text-dark text-lg md:text-2xl text-center;
          }
        }
      }
    }
  }
}
</style>

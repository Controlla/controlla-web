<template>
  <section class="team">
    <article class="team__content">
      <header class="team__content__header">
        <h2 class="team__content__header__title">
          {{ $t('team.our_team') }}
        </h2>
      </header>
      <footer class="team__content__footer">
        <ul class="team__content__footer__positions" role="list">
          <li
            v-for="position in team"
            :key="position.name"
            class="team__content__footer__positions__item"
            role="listitem"
          >
            <v-avatar
              :avatar="images[position.image]"
              :position="position.position"
              :name="position.name"
              type="vertical"
            />
          </li>
        </ul>
      </footer>
    </article>
  </section>
</template>

<script>
import { team } from '@/mocks'
import adrian from '@/assets/images/team/adrian.png'
import aide from '@/assets/images/team/aide.png'
import alejandro from '@/assets/images/team/alejandro.png'
import alexis from '@/assets/images/team/alexis.png'
import angelica from '@/assets/images/team/angelica.png'
import cas from '@/assets/images/team/cas.png'
import clau from '@/assets/images/team/clau.png'
import daniel from '@/assets/images/team/daniel.png'
import edgar from '@/assets/images/team/edgar.png'
import edwin from '@/assets/images/team/edwin.png'
import gabriel from '@/assets/images/team/gabriel.png'
import gustavo from '@/assets/images/team/gustavo.png'
import ivan from '@/assets/images/team/ivan.png'
import luis from '@/assets/images/team/luis.png'
import mario from '@/assets/images/team/mario.png'
import pau from '@/assets/images/team/pau.png'
import rafa from '@/assets/images/team/rafa.png'
import yessi from '@/assets/images/team/yessi.png'

export default defineComponent({
  setup() {
    const images = {
      gabriel,
      mario,
      edgar,
      aide,
      luis,
      adrian,
      alejandro,
      alexis,
      angelica,
      cas,
      clau,
      daniel,
      edwin,
      gustavo,
      ivan,
      pau,
      rafa,
      yessi
    }

    return {
      team,
      images
    }
  }
})
</script>

<style lang="scss">
.team {
  @apply py-12;
  &__content {
    @apply container-fluid;
    &__header {
      @apply flex flex-col items-center mb-10;
      &__title {
        @apply text-center font-bold;
        @apply text-2xl md:text-4xl xl:text-[42px] md:leading-[3rem];
      }
    }
    &__footer {
      @apply w-full;
      &__positions {
        @apply flex flex-wrap justify-center;
        &__item {
          @apply w-6/12 lg:w-4/12 xl:w-3/12 2xl:w-1/5;
          @apply p-2 mb-10;
        }
      }
    }
  }
}
</style>

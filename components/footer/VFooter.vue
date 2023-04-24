<template>
  <footer class="main-footer">
    <div class="main-footer__content">
      <div class="main-footer__content__logo">
        <nuxt-link to="/">
          <v-image :src="logo" class="navbar__content__logo" />
        </nuxt-link>
      </div>
      <div class="main-footer__content__contact-us">
        <h3 class="main-footer__content__contact-us__title">
          {{ $t('footer.title.1') }}
          <span>
            {{ $t('footer.title.2') }}
          </span>
        </h3>
        <v-route-link to="/contact-us" variant="button">
          {{ $t('navigation.contact_us') }}
        </v-route-link>
      </div>
      <ul class="main-footer__content__navigation" role="list">
        <li
          v-for="link in navigation"
          :key="link.url"
          class="main-footer__content__navigation__item"
          role="listitem"
        >
          <v-route-link :to="link.url" variant="underline">
            {{ link.text }}
          </v-route-link>
        </li>
      </ul>
      <ul class="main-footer__content__social-media" role="list">
        <li class="main-footer__content__social-media__item" role="listitem">
          <v-external-link
            to="https://www.facebook.com/controlla.cuu"
            target="_blank"
          >
            <v-image :src="facebookUrlImage" />
          </v-external-link>
        </li>
        <li class="main-footer__content__social-media__item" role="listitem">
          <v-external-link
            to="https://www.instagram.com/controlla_technologies/"
            target="_blank"
          >
            <v-image :src="instargamUrlImage" />
          </v-external-link>
        </li>
        <li class="main-footer__content__social-media__item" role="listitem">
          <v-external-link
            to="https://www.linkedin.com/company/controlla/"
            target="_blank"
          >
            <v-image :src="linkedinUrlImage" />
          </v-external-link>
        </li>
      </ul>
      <div class="main-footer__content__rights-reserved">
        <p>{{ $t('footer.rights_reserved') }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
import logo from '@/assets/images/logo/logo.svg'
import facebookUrlImage from '@/assets/images/social-media/fb.webp'
import instargamUrlImage from '@/assets/images/social-media/in.webp'
import linkedinUrlImage from '@/assets/images/social-media/link.webp'

export default defineComponent({
  name: 'VFooter',
  setup() {
    const { t } = useI18n()

    const navigation = [
      {
        url: '/contact-us',
        text: t('navigation.services')
      },
      {
        url: '/contact-us',
        text: t('navigation.us')
      },
      {
        url: '/contact-us',
        text: t('navigation.success_stories')
      },
      {
        url: '/contact-us',
        text: t('navigation.terms')
      },
      {
        url: '/contact-us',
        text: t('navigation.portfolio')
      },
      {
        url: '/contact-us',
        text: t('navigation.privacy_policy')
      }
    ]

    return {
      logo,
      navigation,
      facebookUrlImage,
      instargamUrlImage,
      linkedinUrlImage
    }
  }
})
</script>
<style lang="scss">
.main-footer {
  @apply py-12 lg:pt-24 bg-top bg-no-repeat bg-cover;
  @apply bg-footer-mobile md:bg-footer;
  &__content {
    @apply container-fluid flex flex-wrap justify-center xl:justify-between;
    &__logo {
      @apply w-full lg:w-6/12 xl:w-3/12 mb-9 xl:mb-0;
      @apply flex justify-center items-center;
    }
    &__contact-us {
      @apply w-full lg:w-6/12 xl:w-3/12 mb-9 xl:mb-0;
      @apply flex flex-col justify-center items-center;
      &__title {
        @apply text-dark text-lg md:text-2xl font-medium;
        @apply mb-6;
        & span {
          @apply font-semibold;
        }
      }
    }
    &__navigation {
      @apply w-full lg:w-6/12 xl:w-4/12;
      @apply flex flex-wrap justify-center items-center;
      &__item {
        @apply w-full lg:w-6/12 mb-3 lg:mb-0;
        @apply flex justify-center xl:justify-start;
      }
    }
    &__social-media {
      @apply w-full py-4 mt-8;
      @apply flex justify-center;
      &__item {
        @apply px-6;
      }
    }
    &__rights-reserved {
      @apply w-full flex justify-center mt-8;
      & p {
        @apply text-center text-dark text-lg;
      }
    }
  }
}
</style>

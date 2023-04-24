<template>
  <NuxtLayout>
    <VLoader />
    <VNavbar />
    <VAsideMenu />
    <NuxtPage
      :transition="{
        name: 'fade',
        mode: 'out-in'
      }"
    />
    <VFooter />
  </NuxtLayout>
</template>

<style lang="scss">
html {
  @apply box-border w-full;
  @apply font-poppins text-base antialiased scroll-smooth scrollbar-hide;
  body {
    @apply w-full overflow-x-hidden bg-base;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-poppins text-base;
}

h1 {
  @apply text-3xl lg:text-[2rem] xl:text-[3rem] font-medium text-dark;
  & span {
    @apply text-primary font-extrabold;
  }
}

h2 {
  @apply text-base lg:text-xl xl:text-2xl text-dark font-poppins;
  & span {
    @apply text-dark font-semibold;
  }
}

p {
  & span {
    @apply font-semibold;
  }
}
.fade {
  &-enter {
    &-from {
      @apply opacity-0 blur-lg;
    }
    &-active {
      @apply transition-all duration-500;
    }
  }
  &-leave {
    &-to {
      @apply opacity-0 blur-lg;
    }
    &-active {
      @apply transition-all duration-500;
    }
  }
}

.slide-from-left {
  &-enter {
    &-from {
      @apply translate-x-[100vw];
    }
    &-to {
      @apply translate-x-0;
    }
  }
  &-leave {
    &-to {
      @apply translate-x-[100vw];
    }
  }
}

.slide-to {
  &-top {
    &-enter {
      @apply translate-y-0;
    }
    &-leave {
      @apply translate-y-0;
      &-to {
        @apply translate-y-[-100vh];
      }
    }
  }
  &-left {
    &-enter {
      @apply translate-x-0;
    }
    &-leave {
      @apply translate-x-0;
      &-to {
        @apply -translate-x-[100vw];
      }
    }
  }
  &-right {
    &-enter {
      @apply translate-x-0;
    }
    &-leave {
      @apply translate-x-0;
      &-to {
        @apply translate-x-[100vw];
      }
    }
  }
}
</style>

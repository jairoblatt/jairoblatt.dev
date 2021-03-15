<template>
  <header class="header" :class="{ 'header--scroll': !onTop }">
    <div class="header__container">
      <!-- Avatar -->
      <TheHeaderAvatar />

      <!-- Center Navigation -->
      <nav class="header__nav">
        <ul class="header__nav-items">
          <NuxtLink
            v-for="link in links"
            :key="`${link.name}-navbar`"
            :to="link.route"
            class="header__nav-item"
            exact-active-class="header__nav-item--active"
          >
            {{ link.name }}
          </NuxtLink>
        </ul>
      </nav>
      <DarkModeSwitch />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
    DarkModeSwitch: () => import('./DarkModeSwitch.vue'),
    TheHeaderAvatar: () => import('./TheHeaderAvatar.vue'),
  },

  data: () => ({
    onTop: true,
    links: [
      {
        name: 'Olá',
        route: '/',
      },
      {
        name: 'Blog',
        route: '/blog',
      },
      {
        name: 'Projetos',
        route: '/projects',
      },
    ],
  }),

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.onTop = window.pageYOffset < 60;
    },
  },
});
</script>

<style lang="postcss" scoped>
.header {
  @apply bg-white md:px-10 lg:px-20 xl:px-80 sticky top-0 left-0 right-0 z-30 px-2;
}

.header--scroll {
  box-shadow: 10px 10px 40px #e3e3e379;
}

.header__container {
  @apply container relative mx-auto px-4 flex items-center py-6 h-full;
}

.header__nav {
  @apply lg:flex lg:pt-1 xl:pt-0 mx-auto w-3/6 lg:w-max;
}

.header__nav-items {
  @apply flex text-center justify-between mr-4;
}

.header__nav-item {
  @apply xl:px-4 lg:py-0 lg:px-2 py-2 md:text-lg text-sm cursor-pointer hover:text-nuxt-lightgreen transition-colors font-semibold;
}

.header__nav-item--active {
  @apply text-nuxt-lightgreen;
}
</style>

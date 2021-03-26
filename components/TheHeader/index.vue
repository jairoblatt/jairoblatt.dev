<template>
  <header class="header" :class="{ 'header--scroll': !onTop }">
    <div class="header__container">
      <TheHeaderAvatar />
      <nav class="header__nav">
        <ul class="nav__items">
          <NuxtLink
            v-for="link in links"
            :key="`${link.name}-navbar`"
            :to="link.route"
            class="nav__item"
            tag="li"
            :class="{
              'nav__item--active': isBlogArticle(link.name),
            }"
            exact-active-class="nav__item--active"
          >
            {{ $t('theHeader.' + link.name) }}
          </NuxtLink>
        </ul>
      </nav>
      <div class="header__settings">
        <Settings />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
    TheHeaderAvatar: () => import('@/components/TheHeaderAvatar/index.vue'),
    Settings: () => import('@/components/Settings/index.vue'),
  },

  data: () => ({
    onTop: true,
    links: [
      {
        name: 'hi',
        route: '/',
      },
      {
        name: 'blog',
        route: '/blog',
      },
      {
        name: 'projects',
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

    isBlogArticle(routeName: string): boolean {
      return (
        !!this.$route?.fullPath?.startsWith('/blog') && routeName === 'blog'
      );
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

.nav__items {
  @apply flex text-center justify-between mr-4;
}

.nav__item {
  @apply xl:px-4 lg:py-0 lg:px-2 py-2 md:text-lg text-sm cursor-pointer hover:text-secondary-lightgreen transition-colors font-semibold;
}

.nav__item--active {
  @apply text-secondary-lightgreen;
}

.header__settings {
  @apply inline-flex;
}

.settings__item {
  @apply ml-5;
}
</style>

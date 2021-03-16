<template>
  <div class="footer__container">
    <div class="footer__social-items">
      <div class="footer__social-item">
        <a href="https://github.com/jairoblatt" target="_blank">
          <img :src="require('@/static/github.svg')" alt="Github Logo" />
        </a>
      </div>
    </div>
    <div class="footer__social-owner">
      <small>©{{ currentYear }} jairoblatt.dev</small>

      <ul class="owner__items">
        <li>
          <NuxtLink to="/policies" exact-active-class="owner--active">
            <span class="owner__dot">&bullet;</span>
            {{ $t('theFooter.privacyPolicy') }}
          </NuxtLink>
        </li>

        <li>
          <button @click="switchLanguage">
            <span class="owner__dot">&bullet;</span>
            {{ $t('theFooter.changeLanguage') }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    navigations: [
      {
        name: 'Política de Privacidade',
        route: '/policies',
      },
      {
        name: 'Termos de uso',
        route: '/terms',
      },
    ],
  }),

  computed: {
    currentYear() {
      return new Date().getFullYear() || 2021;
    },
  },

  methods: {
    async switchLanguage() {
      let switchLocale = 'pt';
      if (this.$i18n.locale === 'pt') switchLocale = 'en';
      try {
        await this.$i18n.setLocale(switchLocale);
        this.$i18n.setLocaleCookie(switchLocale);
      } catch (e) {
        console.error(e);
      }
    },
  },
});
</script>
<style lang="postcss" scoped>
.footer__container {
  @apply py-4 px-2;
}

.footer__social-items {
  @apply flex justify-center items-center;
}

.footer__social-item {
  @apply cursor-pointer;
}

.footer__social-item img {
  height: 37.33px;
}

.footer__social-owner {
  @apply flex justify-center items-center mt-4;
}

.owner__items {
  @apply list-none  text-gray-700 inline-flex items-center justify-center;
}

.owner__items li {
  @apply cursor-pointer mx-1 md:mx-5 text-xs md:text-sm transition-colors;
}

.owner__items li:hover {
  @apply text-nuxt-lightgreen transition-colors;
}

.owner__items li button {
  @apply outline-none;
}

.owner--active {
  @apply text-nuxt-lightgreen;
}
</style>

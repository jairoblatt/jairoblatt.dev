<template>
  <div>
    <Loader v-if="!bootstrap" />
    <div :class="classes">
      <TheHeader />
      <main v-show="bootstrap" class="layout">
        <Nuxt />
      </main>
      <TheFooter />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
    TheHeader: () => import('@/components/TheHeader/index.vue'),
    TheFooter: () => import('@/components/TheFooter/index.vue'),
    Loader: () => import('@/components/Loader/index.vue'),
  },

  data: () => ({
    bootstrap: false,
  }),

  computed: {
    classes() {
      return {
        'layout-container': true,
        'dark-mode': this.$store.getters['navigation/darkMode'],
      };
    },
  },

  async mounted() {
    await this.$nextTick();
    setTimeout(() => (this.bootstrap = true), 1000);
    this.$store.commit('navigation/SET_LANG', this.$i18n.locale);
  },
});
</script>
<style lang="postcss" scoped>
.layout-container {
  @apply transition-colors box-border;
}

.layout {
  @apply md:px-10  my-5 lg:px-20 xl:px-80;
}

.home-enter-active,
.home-leave-active {
  transition: opacity 0.2s;
}

.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>

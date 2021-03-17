<template>
  <main>
    <Loader v-if="!bootstrap" />
    <div v-show="bootstrap" :class="classes">
      <TheHeader />
      <div class="layout">
        <Nuxt />
      </div>

      <TheFooter />
    </div>
  </main>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  components: {
    TheHeader: () => import('@/components/templates/TheHeader.vue'),
    TheFooter: () => import('@/components/templates/TheFooter.vue'),
    Loader: () => import('@/components/Loader.vue'),
  },

  data: () => ({
    bootstrap: false,
  }),

  computed: {
    classes() {
      return {
        'layout-container': true,
        'dark-mode': this.$store.getters['darkmode/has'],
      };
    },
  },

  mounted() {
    this.$nextTick(() => setTimeout(() => (this.bootstrap = true), 1000));
    this.$store.commit('lang/set', this.$i18n.locale);
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

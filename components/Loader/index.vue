<template>
  <div class="preloader">
    <div class="loader">
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  mounted() {
    this.lockScroll();
    this.$once('hook:beforeDestroy', () => this.lockScroll(false));
  },

  methods: {
    lockScroll(lock = true) {
      window.onscroll = () => (lock ? window.scrollTo(0, 0) : {});
      document.body.classList[lock ? 'add' : 'remove']('overflow-hidden');
    },
  },
});
</script>

<style lang="postcss" scoped>
.preloader {
  @apply overflow-hidden flex justify-center items-center left-0 top-0 right-0 bottom-0 bg-dark-surface fixed z-50;
}

.loader {
  @apply relative rounded-md overflow-hidden;

  background-color: #232635;
  width: 100px;
  height: 10px;
}

.loader > div {
  @apply bg-primary-light  px-10;

  width: 100%;
}

.loader > div,
.loader > div::before {
  @apply absolute top-0 left-0 w-full h-full;
}

.loader > div::before {
  @apply bg-dark-elevatedSurface;

  content: '';
  animation: comeOn 1s linear 0s infinite;
}

@keyframes comeOn {
  0% {
    width: 0;
    left: 0;
  }
  50% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0;
  }
}
</style>

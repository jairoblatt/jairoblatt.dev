<template>
  <button v-clipboard="postUrl" class="blog-share__container">
    <img :src="require('@/static/' + clipboardIndicator)" alt="Icon share" />
  </button>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    clipboardCheck: false,
  }),

  props: {
    slug: {
      type: String,
      default: '',
      required: true,
    },
  },

  computed: {
    clipboardIndicator(): string {
      return this.clipboardCheck ? 'check.svg' : 'share.svg';
    },
  },

  methods: {
    postUrl() {
      this.clipboardCheck = true;
      return window.location.origin + this.slug;
    },
  },
});
</script>

<style lang="postcss" scoped>
.blog-share__container {
  @apply bg-white rounded-full flex justify-center items-center outline-none z-30 flex justify-center items-center;

  box-shadow: -2px 0 50px #e3e3e390;
  height: 42px;
  width: 42px;
}

.blog-share__container img {
  height: 23px;
}
</style>

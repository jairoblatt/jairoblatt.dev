<template>
  <div class="mt-12">
    <Skeleton v-if="contentLoading" height="50vh" width="100%" />
    <NuxtContent v-show="!contentLoading" :document="post" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  components: {
    Skeleton: () => import('@/components/Skeleton/index.vue'),
  },

  data: () => ({
    contentLoading: true,
  }),

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    setTimeout(() => (this.contentLoading = false), 500);
  },
});
</script>

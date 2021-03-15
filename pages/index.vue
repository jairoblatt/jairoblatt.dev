<template>
  <div class="container hi__container">
    <Bio />
    <BlogLastestPost />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
    Bio: () => import('@/components/templates/Bio.vue'),
    BlogLastestPost: () =>
      import('@/components/templates/blog/BlogLastestPosts.vue'),
  },
});
</script>
<style lang="postcss" scoped>
.hi__container {
  @apply 2xl:px-52 xl:px-12 lg:px-28 md:px-16 sm:px-10 px-5;
}
</style>

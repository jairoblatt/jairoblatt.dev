<template>
  <section class="blog-item__container">
    <BlogpostItem :post="post" />
  </section>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
    BlogpostItem: () => import('@/components/templates/blog/BlogpostItem.vue'),
  },

  async asyncData({ $content, params }) {
    let post;
    try {
      post = await $content('/articles', params.slug).fetch();
    } catch (e) {
      console.error(e);
    }

    return {
      post,
    };
  },
});
</script>
<style lang="postcss" scoped>
.blog-item__container {
  @apply container;
}
</style>

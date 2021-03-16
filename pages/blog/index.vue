<template>
  <section class="blog-container">
    <BlogspotPreviewItem
      v-for="(postItem, index) in posts"
      :key="index"
      :post="postItem"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  components: {
    BlogspotPreviewItem: () =>
      import('@/components/templates/blog/BlogpostPreviewItem.vue'),
  },

  async asyncData({ $content }) {
    let posts;
    try {
      posts = await $content('/articles').fetch();
    } catch (e) {
      console.error(e);
    }

    return {
      posts,
    };
  },

  head() {
    return {
      titleTemplate: '%s - ' + this.$t('theHeader.blog'),
    };
  },
});
</script>
<style lang="postcss" scoped>
.blog-container {
  @apply container mx-auto px-4;
}
</style>

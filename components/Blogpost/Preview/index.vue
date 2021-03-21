<template>
  <div class="my-2">
    <div class="pb-2" v-if="loading">
      <BlogPostPreviewItemSkeleton
        v-for="index in posts.length"
        :key="`blog-post-preview-skeleton-card-${index}`"
      />
    </div>
    <BlogpostPreviewItem
      v-show="!loading"
      v-for="(post, index) in posts"
      :key="`blog-post-preview-card-${index}`"
      :post="post"
      @hook:mounted="loadingHandler"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  components: {
    BlogpostPreviewItem: () =>
      import('@/components/Blogpost/PreviewItem/index.vue'),
    BlogPostPreviewItemSkeleton: () =>
      import('@/components/Blogpost/PreviewItemSkeleton/index.vue'),
  },

  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    loading: true,
  }),

  methods: {
    loadingHandler() {
      setTimeout(() => (this.loading = false), 500);
    },
  },
});
</script>

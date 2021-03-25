<template>
  <article class="blogpost-item">
    <BlogpostItemHeader
      :img-url="post.imgUrl"
      :title="post.title"
      :description="post.description"
      :date="post.date"
      :tags="post.tags"
    />

    <BlogpostItemContent :post="post" />
  </article>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
    BlogpostItemHeader: () =>
      import('@/components/Blogpost/ItemHeader/index.vue'),
    BlogpostItemContent: () =>
      import('@/components/Blogpost/ItemContent/index.vue'),
  },

  props: {
    post: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="postcss" scoped>
.blogpost-item {
  @apply px-2;
}
</style>

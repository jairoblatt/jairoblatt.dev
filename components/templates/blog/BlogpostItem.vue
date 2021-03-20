<template>
  <article class="blogpost-item__container">
    <BlogpostItemHeader
      :img-url="post.imgUrl"
      :title="post.title"
      :description="post.description"
      :date="post.date"
      :tags="post.tags"
    />

    <div class="mt-12">
      <BlogpostItemContent :post="post" />
    </div>
  </article>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
    BlogpostItemHeader: () => import('./BlogpostItemHeader.vue'),
    BlogpostItemContent: () => import('./BlospostItemContent.vue'),
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
.blogpost-item__container {
  @apply px-2;
}
</style>

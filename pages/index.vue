<template>
  <section class="hi__container">
    <div class="hi-bio">
      <Bio />
    </div>
    <div class="blog-lastest-posts">
      <div class="blog-lastest-posts__title">
        <h2>{{ $t('home.latestPosts') }}</h2>
      </div>
      <BlogPostPreviewItem
        v-for="(post, index) in posts"
        :key="'post' + index"
        :post="post"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
    Bio: () => import('@/components/templates/Bio.vue'),
    BlogPostPreviewItem: () =>
      import('@/components/templates/blog/BlogpostPreviewItem.vue'),
  },

  async asyncData({ $content }) {
    let posts;
    try {
      posts = await $content('/articles').limit(3).fetch();
    } catch (e) {
      console.error(e);
    }

    return {
      posts,
    };
  },
});
</script>
<style lang="postcss" scoped>
.hi__container {
  @apply 2xl:px-52 xl:px-12 lg:px-28 md:px-16 sm:px-10 px-5;
}

.hi-bio {
  @apply pt-6 pb-14;
}

.blog-lastest-posts {
  @apply my-7;
}

.blog-lastest-posts__title {
  @apply my-6;
}

.blog-lastest-posts__title h2 {
  @apply text-xl font-medium;
}
</style>

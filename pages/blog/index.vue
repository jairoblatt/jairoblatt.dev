<template>
  <section class="blog-container">
    <SectionIntro img-url="plato.svg">
      <template #content>
        <h1>
          <span class="intro--highlight">{{ $t('blog.title_1') }} </span>
          {{ $t('blog.title_2') }}
        </h1>
        <p>
          {{ $t('blog.description') }}
        </p>
      </template>
    </SectionIntro>
    <div class="blog-items">
      <BlogspostPreviewItem
        v-for="(postItem, index) in posts"
        :key="index"
        :post="postItem"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  components: {
    BlogspostPreviewItem: () =>
      import('@/components/templates/blog/BlogpostPreviewItem.vue'),
    SectionIntro: () => import('@/components/templates/SectionIntro.vue'),
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
  @apply container mx-auto px-4 relative h-screen;
}
</style>

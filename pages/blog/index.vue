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
      <BlogpostPreview :posts="posts" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  components: {
    BlogpostPreview: () => import('@/components/Blogpost/Preview/index.vue'),
    SectionIntro: () => import('@/components/SectionIntro/index.vue'),
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
  @apply container mx-auto px-4  relative min-h-screen;
}

.blog-items {
  @apply px-2 md:px-12 lg:px-24 xl:px-20 2xl:px-36;
}
</style>

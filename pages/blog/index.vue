<template>
  <section class="blog-container">
    <SectionIntro imgUrl="plato.svg">
      <template v-slot:content>
        <h1><span class="intro--highlight">Bem-vindo </span> ao meu blog</h1>
        <p>
          O lugar onde escrevo alguns pensamentos aleatórios e sobre algumas
          tecnologias que utilizo no dia a dia.
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
  @apply container mx-auto px-4 relative;
}
</style>

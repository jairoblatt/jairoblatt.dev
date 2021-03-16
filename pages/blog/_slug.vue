<template>
  <section class="blog-item__container">
    <BlogpostItem :post="post" />
    <div class="py-10">
      <client-only>
        <BlogComments />
      </client-only>
    </div>
  </section>
</template>
<script>
export default {
  components: {
    BlogpostItem: () => import('@/components/templates/blog/BlogpostItem.vue'),
    BlogComments: () => import('@/components/templates/blog/BlogComments.vue'),
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

  head() {
    return {
      titleTemplate: '%s - ' + this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },

        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description,
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://nuxtjs.org/blog/${this.post.slug}`,
        },
        { hid: 'og:image', property: 'og:image', content: this.post.imgUrl },

        // Twitter
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.post.imgUrl,
        },
        {
          hid: 'twitter:image:',
          name: 'twitter:image:alt',
          content: 'Blog post image',
        },
      ],
    };
  },
};
</script>
<style lang="postcss" scoped>
.blog-item__container {
  @apply container md:px-20 md:px-32 px-3 pb-6;
}
</style>

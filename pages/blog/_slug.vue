<template>
  <section class="blog-item__container">
    <BlogpostItem :post="post" />

    <div v-if="hasRecommendeds" class="blog-recommended">
      <div class="blog-recommended__title">
        <h2>{{ $t('blog.recommended') }}</h2>
      </div>
      <BlogpostPreviewItem
        v-for="(post, index) in recommendeds"
        :key="`card-recommended-${index}`"
        :post="post"
      />
    </div>

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
    BlogComments: () => import('@/components/templates/blog/BlogComments'),
    BlogpostPreviewItem: () =>
      import('@/components/templates/blog/BlogpostPreviewItem.vue'),
  },

  async asyncData({ $content, params }) {
    let post, recommendeds;
    try {
      post = await $content('/articles', params.slug).fetch();

      recommendeds = await $content('/articles')
        .where({
          title: { $not: { $eq: post.title } },
        })
        .limit(3)
        .fetch();
    } catch (e) {
      console.error(e);
    }

    return {
      post,
      recommendeds,
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

  computed: {
    hasRecommendeds() {
      return this.recommendeds && this.recommendeds.length;
    },
  },
};
</script>
<style lang="postcss" scoped>
.blog-item__container {
  @apply container md:px-20 md:px-32 px-3 pb-6;
}

.blog-recommended {
  @apply my-2 pt-10;
}

.blog-recommended__title {
  @apply my-10 text-dark-surface text-2xl font-medium;
}
</style>

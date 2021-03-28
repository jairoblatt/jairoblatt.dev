<template>
  <div class="blogpost-preview">
    <Nuxt-link :to="postUrl">
      <div class="blogpost-preview__image">
        <img
          v-lazy-load
          :data-src="require('@/static/blog/' + post.imgUrl)"
          :alt="`Image blog ${post.title}`"
        />
      </div>

      <div class="blogpost-preview__content">
        <div class="mb-2">
          <h2 class="blogpost-preview__title">
            {{ post.title }}
          </h2>
          <div class="mb-4">
            <p class="blogpost-preview__description">
              {{ post.description }}
            </p>
          </div>
          <div class="blogpost-preview__tags">
            <span
              v-for="(tag, id) in post.tags"
              :key="id"
              class="blogpost-preview__tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="blogpost-preview__info">
          <div class="blogpost-preview__author">
            <span class="flex items-center mr-4">
              <img
                class="inline-block h-6 w-6 rounded-full mr-2"
                :src="require('@/static/avatar.jpg')"
                alt
              />
              <span class="blogpost-preview__author-name"> Jairo Blatt </span>
            </span>
          </div>

          <div class="post">
            <span class="post__date">
              {{ post.date }}
            </span>
            <span class="post__readingtime">
              &nbsp;{{ post.readingTime }}
            </span>
          </div>
        </div>
      </div>
    </Nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  computed: {
    postUrl(): string {
      return '/blog/' + this.post.slug;
    },
  },
});
</script>

<style lang="postcss" scoped>
.blogpost-preview {
  @apply bg-light-surface hover:bg-gray-100 transition-colors mb-8 rounded p-4 sm:p-8 lg:p-4 cursor-pointer relative;
}

.blogpost-preview a {
  @apply flex flex-col lg:flex-row;
}

.blogpost-preview__content {
  @apply w-full lg:w-2/3 flex flex-col justify-between pr-4;
}

.blogpost-preview__title {
  @apply mb-4 inline-block leading-tight font-semibold text-2xl md:text-3xl transition-colors;
}

.blogpost-preview__description {
  @apply transition-colors;
}

.blogpost-preview__tags {
  @apply flex flex-row flex-wrap justify-start my-2;
}

.blogpost-preview__tag {
  @apply truncate text-xs tracking-wider font-medium px-2 py-1 rounded-full mr-2 mb-1 border transition-colors;
}

.blogpost-preview__info {
  @apply flex flex-row text-sm justify-between lg:justify-start items-center;
}

.blogpost-preview__author {
  @apply flex items-center;
}

.blogpost-preview__author-title {
  @apply leading-none transition-colors;
}

.post {
  @apply flex lg:w-auto items-center justify-between leading-none;
}

.post__date {
  @apply transition-colors;
}

.post__readingtime {
  @apply transition-colors;
}

.blogpost-preview__image {
  @apply w-full lg:w-1/3 mb-6 lg:mb-0 mr-10 rounded overflow-hidden flex justify-center;
}

.blogpost-preview__image img {
  @apply object-cover;
}
</style>

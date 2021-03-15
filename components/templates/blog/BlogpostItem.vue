<template>
  <article class="blogpost-item__container">
    <header class="flex items-left justify-between flex-col mt-12">
      <div class="blogpost-item__date">
        {{ post.date }}
      </div>
      <div class="flex flex-1 flex-col mb-8">
        <h1 class="blogpost-item__title">
          {{ post.title }}
        </h1>
        <h2 class="blogpost-item__description">{{ post.description }}</h2>
        <div v-if="hasTags" class="my-1">
          <div class="blogpost-item__tags">
            <span v-for="(tag, id) in post.tags" :key="id" class="tags-item">
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="text-sm flex justify-between flex-col sm:flex-row">
          <div>
            <!-- <BlogpostAuthor
              v-for="(author, index) in post.authors"
              :key="index"
              :author="author"
            /> -->
          </div>
        </div>
      </div>
      <img class="blogpost-item__image" :src="post.imgUrl" />
    </header>
    <div class="mt-12">
      <NuxtContent :document="post" />
    </div>
  </article>
</template>
<script lang="ts">
import Vue from 'vue';
import { BlogPostTags } from '@/@types/Blog';

export default Vue.extend({
  props: {
    post: {
      type: Object,
    },
  },

  computed: {
    hasTags(): BlogPostTags | null {
      return this.post.tags || null;
    },
  },
});
</script>

<style lang="postcss" scoped>
.blogpost-item__container {
  @apply px-2;
}

.blogpost-item__date {
  @apply mb-5;
}

.blogpost-item__title {
  @apply text-4xl font-semibold mb-4 leading-tight text-dark-surface;
}

.blogpost-item__description {
  @apply text-xl mb-4 leading-tight;
}

.blogpost-item__tags {
  @apply flex flex-row flex-wrap justify-start mt-2 mb-7;
}

.tags-item {
  @apply text-sm px-2 rounded-full mr-2 mb-2 border;
}

.blogpost-item__image {
  @apply object-cover;
}
</style>

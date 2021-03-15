<template>
  <Nuxt-link :to="`/blog/${post.slug}`">
    <div class="blog-post-preview">
      <div class="blog-post-preview__content">
        <div class="mb-2">
          <h2 class="blog-post-preview__title">
            {{ post.title }}
          </h2>
          <div class="mb-4">
            <p class="blog-post-preview__description">
              {{ post.description }}
            </p>
          </div>
          <div class="blog-post-preview__tags">
            <span
              v-for="(tag, id) in post.tags"
              :key="id"
              class="blog-post-preview__tags-item"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="blog-post-preview__info">
          <div class="info__author">
            <span class="flex items-center mr-4">
              <img
                class="inline-block h-6 w-6 rounded-full mr-2"
                :src="require('@/static/avatar.jpg')"
                alt
              />
              <span class="info__author-name"> Jairo Blatt </span>
            </span>
          </div>

          <div class="info__post">
            <span class="info__post-dot"> &bullet; </span>
            <span class="info__post-date">
              {{ post.date }}
            </span>
            <span class="info__post-dot"> &bullet; </span>
            <span class="info__post-readingtime">
              &nbsp;{{ post.readingTime }}
            </span>
          </div>
        </div>
      </div>

      <div class="blog-post-preview__image">
        <img :src="post.imgUrl" alt="" />
      </div>
    </div>
  </Nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.blog-post-preview {
  @apply bg-light-surface hover:bg-gray-100 transition-colors flex flex-col-reverse lg:flex-row mb-8 rounded p-4 sm:p-8 lg:p-4 cursor-pointer;
}

.blog-post-preview__content {
  @apply w-full lg:w-2/3 flex flex-col justify-between pr-4;
}

.blog-post-preview__title {
  @apply mb-4 inline-block leading-tight font-semibold text-2xl md:text-3xl transition-colors;
}

.blog-post-preview__description {
  @apply transition-colors;
}

.blog-post-preview__tags {
  @apply flex flex-row flex-wrap justify-start mb-2;
}

.blog-post-preview__tags-item {
  @apply truncate uppercase text-xs tracking-wider font-medium px-2 py-1 rounded-full mr-2 mb-1 border transition-colors;
}

.blog-post-preview__info {
  @apply flex flex-col lg:flex-row text-sm;
}

.info__author {
  @apply mb-4 lg:mb-0 flex items-center;
}

.info__author-title {
  @apply leading-none transition-colors;
}

.info__post {
  @apply flex w-full lg:w-auto items-center justify-between leading-none;
}

.info__post-dot {
  @apply hidden lg:inline-block text-xs mx-2 transition-colors;
}

.info__post-date {
  @apply transition-colors;
}

.info__post-readingtime {
  @apply transition-colors;
}

.blog-post-preview__image {
  @apply w-full lg:w-1/3 mb-6 lg:mb-0 rounded overflow-hidden flex justify-center;
}
.blog-post-preview__image img {
  @apply object-cover;
}
</style>

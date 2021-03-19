<template>
  <div class="blog-post-preview">
    <a href="#">
      <div class="blog-post-preview__image">
        <Skeleton min-height="220px" min-width="600px" />
      </div>

      <div class="blog-post-preview__content">
        <div class="mb-2">
          <Skeleton
            width="100%"
            height="25px"
            class="blog-post-preview__title"
          />
          <div class="mb-4">
            <Skeleton
              v-for="line in 3"
              :key="`skeleton-paragraph-${line}`"
              :width="line == 3 ? '80%' : '100%'"
              height="11px"
              class="blog-post-preview__description"
            />
          </div>
          <div class="blog-post-preview__tags">
            <Skeleton
              v-for="tag in 3"
              :key="tag"
              height="21px"
              width="43px"
              class="blog-post-preview__tags-item"
            />
          </div>
        </div>

        <div class="blog-post-preview__info">
          <div class="info__author">
            <Skeleton
              class="inline-block h-6 w-6 rounded-full mr-2"
              height="29px"
              width="29px"
            />
            <Skeleton class="mb-2 rounded-full" width="20%" height="10px" />
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
    Skeleton: () => import('@/components/Skeleton.vue'),
  },
});
</script>

<style lang="postcss" scoped>
.blog-post-preview {
  @apply bg-light-surface hover:bg-gray-100 transition-colors mb-8 rounded p-4 sm:p-8 lg:p-4 cursor-pointer relative;
}

.blog-post-preview a {
  @apply flex flex-col lg:flex-row;
}

.blog-post-preview__content {
  @apply w-full lg:w-2/3 flex flex-col justify-between pr-4;
}

.blog-post-preview__title {
  @apply mb-4 inline-block leading-tight font-semibold text-2xl md:text-3xl transition-colors rounded-full;
}

.blog-post-preview__description {
  @apply transition-colors rounded-full;
}

.blog-post-preview__tags {
  @apply flex flex-row flex-wrap justify-start my-2;
}

.blog-post-preview__tags-item {
  @apply truncate text-xs tracking-wider font-medium px-2 py-1 rounded-full mr-2 mb-1 transition-colors;
}

.blog-post-preview__info {
  @apply inline-block;
}

.blog-post-preview__image {
  @apply w-full lg:w-1/3 mb-6 lg:mb-0 mr-10 rounded overflow-hidden flex justify-center;
}
</style>

<template>
  <div class="blogpost-preview">
    <a href="#">
      <div class="blogpost-preview__image">
        <Skeleton min-height="220px" min-width="600px" />
      </div>

      <div class="blogpost-preview__content">
        <div class="mb-2">
          <Skeleton
            width="100%"
            height="25px"
            class="blogpost-preview__title"
          />
          <div class="mb-4">
            <Skeleton
              v-for="line in 3"
              :key="`skeleton-paragraph-${line}`"
              :width="line == 3 ? '80%' : '100%'"
              height="11px"
              class="blogpost-preview__description"
            />
          </div>
          <div class="blogpost-preview__tags">
            <Skeleton
              v-for="tag in 3"
              :key="tag"
              height="21px"
              width="43px"
              class="blogpost-preview__tags-item"
            />
          </div>
        </div>

        <div class="blogpost-preview__info">
          <div class="info__author">
            <Skeleton
              class="inline-block h-6 w-6 rounded-full mr-2"
              height="29px"
              width="29px"
            />
            <Skeleton class="mb-2 rounded-full" width="17%" height="10px" />
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
    Skeleton: () => import('@/components/Skeleton/index.vue'),
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
  @apply mb-4 inline-block leading-tight font-semibold text-2xl md:text-3xl transition-colors rounded-full;
}

.blogpost-preview__description {
  @apply transition-colors rounded-full;
}

.blogpost-preview__tags {
  @apply flex flex-row flex-wrap justify-start my-2;
}

.blogpost-preview__tags-item {
  @apply truncate text-xs tracking-wider font-medium px-2 py-1 rounded-full mr-2 mb-1 transition-colors;
}

.blogpost-preview__info {
  @apply inline-block;
}

.blogpost-preview__image {
  @apply w-full lg:w-1/3 mb-6 lg:mb-0 mr-10 rounded overflow-hidden flex justify-center;
}
</style>

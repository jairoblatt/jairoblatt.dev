<template>
  <header class="blogpost-item__header">
    <!-- Loading Skeleton -->
    <BlogpostItemHeaderSkeleton v-if="loading" />

    <!-- Post header content -->
    <div class="blogpost-item__date">
      {{ date }}
    </div>
    <div class="flex flex-1 flex-col mb-8">
      <h1 class="blogpost-item__title">
        {{ title }}
      </h1>
      <h2 class="blogpost-item__description">{{ description }}</h2>
      <div v-if="tags" class="my-1">
        <div class="blogpost-item__tags">
          <span v-for="(tag, id) in tags" :key="id" class="tags-item">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
    <img
      v-if="imgUrl"
      class="blogpost-item__image"
      v-lazy-load
      :data-src="imgUrl"
    />
  </header>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  components: {
    BlogpostItemHeaderSkeleton: () =>
      import('@/components/Blogpost/ItemHeaderSkeleton/index.vue'),
  },

  props: {
    date: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    tags: {
      type: Array || null,
      default: null,
      required: true,
    },

    imgUrl: {
      type: String || null,
      default: null,
      required: true,
    },
  },

  data: () => ({
    loading: true,
  }),
  mounted() {
    setTimeout(() => (this.loading = false), 500);
  },
});
</script>

<style lang="postcss" scoped>
.blogpost-item__header {
  @apply flex justify-between flex-col mt-12 relative;
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

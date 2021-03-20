<template>
  <a
    :href="project.link"
    rel="noopener"
    target="_blank"
    class="project-preview"
  >
    <div class="project-preview__image">
      <img
        :data-src="require('@/static/projects/' + project.imgUrl)"
        :alt="`Porject preview ${project.title}`"
        v-lazy-load
      />
    </div>

    <div class="project-preview__content">
      <div class="mb-2">
        <h2 class="project-preview__title">{{ project.title }}</h2>

        <div class="mb-4">
          <p class="project-preview__description">
            {{ project.description }}
          </p>
        </div>

        <div v-if="project.tags" class="project-preview__tags">
          <span
            v-for="(tag, index) in project.tags"
            :key="`tag-project-${index}`"
            class="project-preview__tags-item"
            >{{ tag }}</span
          >
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.project-preview {
  @apply bg-light-surface mx-2 w-full sm:w-2/5 hover:bg-gray-100 transition-colors flex flex-col justify-between mb-8 rounded p-4 sm:p-8 lg:p-4 cursor-pointer;
}

.project-preview__content {
  @apply w-full flex mt-3 flex-col justify-between pr-4;
}

.project-preview__title {
  @apply mb-4 inline-block leading-tight font-semibold text-2xl md:text-3xl transition-colors;
}

.project-preview__description {
  @apply transition-colors;
}

.project-preview__tags {
  @apply flex flex-row flex-wrap justify-start mb-2;
}

.project-preview__tags-item {
  @apply text-xs tracking-wider font-medium px-2 py-1 rounded-full mr-2 mb-1 border transition-colors;
}

.project-preview__image {
  @apply overflow-hidden w-full mb-6 lg:mb-0 rounded flex justify-center;
}
.project-preview__image img {
  @apply object-cover rounded;

  height: 242px;
}
</style>

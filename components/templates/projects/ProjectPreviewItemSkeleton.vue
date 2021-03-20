<template>
  <div class="project-preview">
    <div class="project-preview__image">
      <Skeleton height="245px" width="100%" />
    </div>

    <div class="project-preview__content">
      <div class="mb-2">
        <Skeleton class="project-preview__title" width="100%" height="17px" />

        <div class="mb-4">
          <Skeleton
            v-for="line in 3"
            :key="`project-paragraph-${line}`"
            :width="line === 3 ? '30%' : '100%'"
            height="5px"
            class="project-preview__description"
          />
        </div>

        <div class="project-preview__tags">
          <Skeleton
            v-for="id in 4"
            :key="`tag-project-${id}`"
            height="21px"
            :width="id === 2 ? '60px' : '43px'"
            class="project-preview__tags-item"
          />
        </div>
      </div>
    </div>
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
.project-preview {
  @apply bg-light-surface mx-2 w-full sm:w-2/5 hover:bg-gray-100  flex flex-col justify-between mb-8 rounded p-4 sm:p-8 lg:p-4 cursor-pointer;
}

.project-preview__content {
  @apply w-full flex mt-3 flex-col justify-between pr-4;
}

.project-preview__title {
  @apply mb-4 inline-block leading-tight font-semibold text-2xl md:text-3xl rounded;
}

.project-preview__description {
  @apply rounded;
}

.project-preview__tags {
  @apply flex flex-row flex-wrap justify-start mb-2;
}

.project-preview__tags-item {
  @apply px-2 py-1 rounded-full mr-2 mb-1;
}

.project-preview__image {
  @apply overflow-hidden w-full mb-6 lg:mb-0 rounded flex justify-center;
}
</style>

<template>
  <div class="flex flex-wrap justify-center">
    <div v-if="loading" class="project-preview__skeleton">
      <ProjectPreviewItemSkeleton
        v-for="index in projects.length"
        :key="`project-preview-skeleton-${index}`"
      />
    </div>

    <ProjectPreviewItem
      v-show="!loading"
      v-for="(project, index) in projects"
      :key="`project-card-preview-${index}`"
      :project="project"
      @hook:mounted="handlerLoading"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  components: {
    ProjectPreviewItemSkeleton: () =>
      import('./ProjectPreviewItemSkeleton.vue'),
    ProjectPreviewItem: () => import('./ProjectPreviewItem.vue'),
  },

  data: () => ({
    loading: true,
  }),

  props: {
    projects: {
      type: Array,
      required: true,
    },
  },

  methods: {
    handlerLoading() {
      setTimeout(() => (this.loading = false), 900);
    },
  },
});
</script>
<style lang="postcss">
.project-preview__skeleton {
  @apply flex flex-wrap justify-center;
}
</style>

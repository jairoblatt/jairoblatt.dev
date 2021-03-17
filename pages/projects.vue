<template>
  <div class="projects__container">
    <ProjecPreviewItem
      v-for="(project, index) in projects"
      :key="`project-card-${index}`"
      :project="project"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
    ProjecPreviewItem: () =>
      import('@/components/templates/projects/ProjectPreviewItem.vue'),
  },

  async asyncData({ $content, app }) {
    let projects;
    try {
      const path = `/projects/${app.i18n?.locale}`;
      projects = await $content(path).fetch();
    } catch (e) {
      console.error(e);
    }

    return {
      projects,
    };
  },

  head() {
    return {
      titleTemplate: '%s - ' + this.$t('theHeader.projects'),
    };
  },
});
</script>
<style lang="postcss" scoped>
.projects__container {
  @apply flex flex-wrap justify-center;
}
</style>

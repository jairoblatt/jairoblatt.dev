<template>
  <div class="projects__container">
    <ProjecPreviewItem
      v-for="(project, index) in projectsMult"
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

  async asyncData({ $content }) {
    let projects;
    try {
      projects = await $content('/projects').fetch();
    } catch (e) {
      console.error(e);
    }

    return {
      projects,
    };
  },

  computed: {
    projectsMult() {
      const arr = [];
      for (let i = 0; i < 6; i++) {
        arr.push((this as any).projects[Math.round(Math.random())]);
      }
      return arr;
    },
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

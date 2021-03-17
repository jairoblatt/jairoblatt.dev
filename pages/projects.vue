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
import { IContentDocument } from '@nuxt/content/types/content';
import Vue from 'vue';

export default Vue.extend({
  components: {
    ProjecPreviewItem: () =>
      import('@/components/templates/projects/ProjectPreviewItem.vue'),
  },

  data: () => ({
    projects: [] as IContentDocument[] | IContentDocument,
  }),

  async fetch() {
    try {
      const path = `/projects/${this.$i18n.locale}`;
      const projects = await this.$content(path).fetch();
      this.projects = projects || [];
    } catch (e) {
      console.error(e);
    }
  },

  head() {
    return {
      titleTemplate: '%s - ' + this.$t('theHeader.projects'),
    };
  },

  // Force content update by locale
  computed: {
    lang() {
      return this.$store.getters['lang/lang'];
    },
  },

  watch: {
    lang: '$fetch',
  },
});
</script>
<style lang="postcss" scoped>
.projects__container {
  @apply flex flex-wrap justify-center;
}
</style>

<template>
  <div class="projects__container">
    <SectionIntro img-url="woman-greek.svg">
      <template #content>
        <h1>
          <span class="intro--highlight">{{ $t('projects.title_1') }} </span>
          {{ $t('projects.title_2') }}
        </h1>
        <p>
          {{ $t('projects.description') }}
        </p>
      </template>
    </SectionIntro>
    <ProjectPreview :projects="projects" :key="lang" />
  </div>
</template>
<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content';
import Vue from 'vue';

export default Vue.extend({
  components: {
    SectionIntro: () => import('@/components/templates/SectionIntro.vue'),
    ProjectPreview: () =>
      import('@/components/templates/projects/ProjectsPreview.vue'),
  },

  data: () => ({
    projects: [] as IContentDocument[] | IContentDocument,
  }),

  async fetch() {
    try {
      const path = `projects/${this.lang}`;
      const projects = await this.$content(path).sortBy('title', 'asc').fetch();
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
    lang(): string {
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
  @apply flex flex-wrap justify-center relative;
}

.project__preview-loader {
  @apply absolute bg-light-surface rounded-lg;
}
</style>

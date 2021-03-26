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
    SectionIntro: () => import('@/components/SectionIntro/index.vue'),
    ProjectPreview: () => import('@/components/Projects/Preview/index.vue'),
  },

  data: () => ({
    projects: [] as IContentDocument[] | IContentDocument,
  }),

  async fetch() {
    try {
      const path = `projects/${this.$i18n.locale}`;
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
      return this.$store.getters['navigation/lang'];
    },
  },

  watch: {
    lang: '$fetch',
  },
});
</script>
<style lang="postcss" scoped>
.projects__container {
  @apply flex flex-wrap justify-center relative min-h-screen;
}

.project__preview-loader {
  @apply absolute bg-light-surface rounded-lg;
}
</style>

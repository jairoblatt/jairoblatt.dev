<template>
  <div class="projects__container">
    <SectionIntro imgUrl="woman-greek.svg">
      <template v-slot:content>
        <h1>
          <span class="intro--highlight">{{ $t('projects.title_1') }} </span>
          {{ $t('projects.title_2') }}
        </h1>
        <p>
          {{ $t('projects.description') }}
        </p>
      </template>
    </SectionIntro>

    <ProjecPreviewItem
      v-for="(project, index) in projects"
      :key="`project-card-${index}`"
      :project="project"
    />

    <Loader v-show="$fetchState.pending" class="project__preview-loader" />
  </div>
</template>
<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content';
import Vue from 'vue';

export default Vue.extend({
  components: {
    ProjecPreviewItem: () =>
      import('@/components/templates/projects/ProjectPreviewItem.vue'),
    SectionIntro: () => import('@/components/templates/SectionIntro.vue'),
    Loader: () => import('@/components/Loader.vue'),
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

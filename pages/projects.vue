<template>
  <div class="projects__container">
    <ProjecPreviewItem v-for="i in 5" :key="i" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  components: {
    ProjecPreviewItem: () =>
      import('@/components/templates/projects/ProjectPreviewItem.vue'),
  },
});
</script>
<style lang="postcss" scoped>
.projects__container {
  @apply flex flex-wrap justify-center;
}
</style>

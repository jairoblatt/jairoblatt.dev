<template>
  <div class="post-header-skeleton__container">
    <Skeleton class="skeleton__date" width="13%" height="12px" />
    <div class="flex flex-1 flex-col mb-8">
      <Skeleton class="skeleton__title" width="100%" height="21px" />
      <Skeleton
        v-for="line in 3"
        :key="`skeleton-paragraph-${line}`"
        class="skeleton__description"
        :width="line === 3 ? '60%' : '100%'"
        height="8px"
      />
      <div class="my-1">
        <div class="skeleton__tags">
          <Skeleton
            v-for="tag in 4"
            :key="`skeleton-tag-${tag}`"
            height="21px"
            :width="tag === 2 ? '64px' : '43px'"
            class="tag--item"
          />
        </div>
      </div>
    </div>
    <Skeleton width="100%" height="420px" />
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
.post-header-skeleton__container {
  @apply flex justify-between flex-col absolute w-full h-full bg-white;
}

.skeleton__date,
.skeleton__title,
.skeleton__description {
  @apply rounded;
}

.skeleton__date {
  @apply mb-5;
}

.skeleton__title {
  @apply text-4xl my-4;
}

.skeleton__description {
  @apply text-xl mb-4;
}

.skeleton__tags {
  @apply flex flex-row flex-wrap justify-start mt-2 mb-7;
}

.tag--item {
  @apply px-2 py-1 rounded-full mr-2 mb-1;
}
</style>

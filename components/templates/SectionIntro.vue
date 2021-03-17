<template>
  <div class="section-intro__container">
    <div class="intro-welcome">
      <slot name="content"></slot>
    </div>

    <img
      v-if="imgUrl"
      :src="require('@/static/' + imgUrl)"
      class="intro-image"
      alt="Pato image"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
  },
});
</script>
<style lang="postcss" scoped>
.section-intro__container {
  @apply container flex justify-center py-10;
}

.intro-welcome {
  @apply w-1/3 flex flex-col justify-center;
}

.intro-welcome h1 {
  @apply text-dark-surface font-bold text-4xl mb-3;
}

.intro--highlight {
  @apply text-nuxt-lightgreen;
}

.intro-image {
  height: 250px;
}
</style>

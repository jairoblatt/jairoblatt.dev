<template>
  <div class="section-intro">
    <div class="section-intro__welcome">
      <slot name="content"></slot>
    </div>

    <img
      v-if="imgUrl"
      :src="require('@/static/' + imgUrl)"
      class="section-intro__image"
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
.section-intro {
  @apply container flex justify-center pt-6 pb-14;
}

.section-intro__welcome {
  @apply w-1/2 md:w-1/3 flex flex-col justify-center;
}

.section-intro__welcome h1 {
  @apply text-dark-surface font-bold text-4xl mb-3;
}

.intro--highlight {
  @apply text-nuxt-lightgreen;
}

.section-intro__image {
  height: 250px;
}

@media only screen and (min-width: 200px) and (max-width: 520px) {
  .section-intro {
    @apply items-center;
  }

  .section-intro__welcome h1 {
    @apply text-2xl;
  }

  .section-intro__image {
    height: 180px;
  }
}
</style>

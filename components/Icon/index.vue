<template>
  <img
    v-if="icon"
    v-bind="$attrs"
    v-lazy-load
    :data-src="require(`@/static/${icon}.svg`)"
    :alt="`${icon} image icon`"
  />
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    icon: {
      type: [String, Boolean],
      default: false,
    },
  },
});
</script>

<template>
  <span class="skeleton-box" :style="styles" v-bind="$attrs"></span>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    height: String,
    width: String,
    minHeight: String,
    minWidth: String,
  },

  computed: {
    styles() {
      return {
        height: this.height,
        width: this.width,
        minHeight: this.minHeight,
        minWidth: this.minWidth,
      };
    },
  },
});
</script>
<style lang="scss" scoped>
.skeleton-box {
  display: inline-block;
  position: relative;
  overflow: hidden;
  background-color: #dddbdd;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 1.1s infinite ease-in-out;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>

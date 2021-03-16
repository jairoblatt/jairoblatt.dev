<template>
  <div id="disqus_thread"></div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  created() {
    const scriptElement = document.createElement('script');

    scriptElement.src = 'https://jairoblatt.disqus.com/embed.js';

    scriptElement.setAttribute('data-timestamp', `${+new Date()}`);

    (document.head || document.body).appendChild(scriptElement);
  },
});
</script>

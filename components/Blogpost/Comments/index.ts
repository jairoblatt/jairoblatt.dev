import Vue from 'vue';

const DISQUS_EMBED = 'https://jairoblatt.disqus.com/embed.js';

export default Vue.component('BlogComments', {
  created() {
    const scriptElement = document.createElement('script');
    scriptElement.src = DISQUS_EMBED;
    scriptElement.setAttribute('data-timestamp', `${+new Date()}`);
    (document.head || document.body).appendChild(scriptElement);
  },

  render(h) {
    return h('div', {
      attrs: {
        id: 'disqus_thread',
      },
    });
  },
});

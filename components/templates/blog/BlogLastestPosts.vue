<template>
  <div class="blog-lastest-posts">
    <div class="blog-lastest-posts__title">
      <h2>Últimos posts:</h2>
    </div>
    <BlogPostPreviewItem
      v-for="(post, index) in posts"
      :key="'post' + index"
      :post="post"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  components: {
    BlogPostPreviewItem: () => import('./BlogpostPreviewItem.vue'),
  },

  computed: {
    posts() {
      const arr = [];
      for (let index = 0; index < 4; index++) {
        arr.push({
          title: 'Lorem ipsu dolor',
          description:
            '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat sed in est consequuntur alias, vero quo, ab maxime quibusdam officia sunt error. Aliquam eveniet fuga nesciunt at architecto. Reiciendis.',
          tags: ['Vue', 'Nuxt', 'Tailwind', 'Typescript'],
          authors: [
            {
              avatarUrl:
                'https://avatars.githubusercontent.com/u/45108346?s=460&u=235fcDF6sX28ZuMEEvA7JqGxciWD1nd7Yb80d29a&v=4',
              name: 'Jairo Blatt',
            },
          ],
          date: '12/03/2021',
          readingTime: '5 minutos',
          imgUrl:
            'https://image.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg',
        });
      }

      return arr;
    },
  },
});
</script>
<style lang="postcss" scoped>
.blog-lastest-posts {
  @apply my-32;
}

.blog-lastest-posts__title {
  @apply my-4;
}

.blog-lastest-posts__title h2 {
  @apply text-xl font-medium;
}
</style>

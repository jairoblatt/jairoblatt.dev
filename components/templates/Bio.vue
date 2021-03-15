<template>
  <div class="bio__container">
    <h2>
      <span class="bio--highlight">Olá!</span> Lorem ipsum dolor sit amet
      consectetur
    </h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sapiente
      voluptates libero soluta vero labore ad suscipit dolorum? Laudantium ullam
      porro autem harum voluptatibus hic eos<span class="bio--highlight">
        voluptates cum repellat</span
      >
      omnis! Lead Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
      alias ut qui recusandae
      <span class="bio--highlight">molestiae placeat nesciunt</span> molestias
      mollitia modi aperiam nam, ad numquam sapiente vel pariatur aliquam
      inventore, facilis neque.
    </p>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sapiente
      voluptates libero soluta vero labore ad suscipit dolorum? Laudantium ullam
      porro autem harum
      <span class="bio--highlight"> voluptatibus hic eos </span> voluptates cum
      repellat omnis! Lead Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Eum alias ut qui recusandae molestiae placeat nesciunt molestias
      mollitia modi aperiam nam, ad numquam sapiente vel pariatur aliquam
      inventore, facilis neque.
    </p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
<style lang="postcss" scoped>
.bio__container {
  @apply font-medium text-dark-elevatedSurface;

  background: transparent;
}
.bio__container h2 {
  @apply text-4xl pb-10;
}

.bio__container p {
  @apply text-lg;
}

.bio--highlight {
  @apply text-nuxt-lightgreen;
}
</style>

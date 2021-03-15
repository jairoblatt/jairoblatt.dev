<template>
  <div class="project-preview">
    <div class="project-preview__content">
      <div class="mb-2">
        <h2 class="project-preview__title">Testando aqui</h2>
        <div class="mb-4">
          <p class="project-preview__description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            amet voluptates autem officiis velit perspiciatis unde. Nesciunt ab
            dicta iusto. Magnam quibusdam impedit atque veritatis enim nihil
            cupiditate in fuga!
          </p>
        </div>
        <div class="project-preview__tags">
          <span class="project-preview__tags-item"> Javascript </span>
        </div>
      </div>
    </div>

    <div class="project-preview__image">
      <img
        src="https://image.freepik.com/free-vector/gradient-nyepi-illustration_52683-57693.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.project-preview {
  width: 30%;

  @apply bg-light-surface mx-2 hover:bg-gray-100 transition-colors flex flex-col-reverse mb-8 rounded p-4 sm:p-8 lg:p-4 cursor-pointer;
}

.project-preview__content {
  @apply w-full flex mt-3 flex-col justify-between pr-4;
}

.project-preview__title {
  @apply mb-4 inline-block leading-tight font-semibold text-2xl md:text-3xl transition-colors;
}

.project-preview__description {
  @apply transition-colors;
}

.project-preview__tags {
  @apply flex flex-row flex-wrap justify-start mb-2;
}

.project-preview__tags-item {
  @apply truncate uppercase text-xs tracking-wider font-medium px-2 py-1 rounded-full mr-2 mb-1 border transition-colors;
}

.project-preview__image {
  @apply overflow-hidden  w-full  mb-6 lg:mb-0 rounded flex justify-center;
}
</style>

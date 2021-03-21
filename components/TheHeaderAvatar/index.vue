<template functional>
  <client-only>
    <div class="header__avatar">
      <img
        :src="require('@/static/avatar-header.png')"
        alt="Jairo Blatt avatar"
      />
      <h3>Jairo Blatt</h3>
    </div>
  </client-only>
</template>
<style lang="postcss" scoped>
.header__avatar {
  @apply relative items-center cursor-pointer hidden sm:flex;
}

.header__avatar img {
  @apply h-1/4;

  border-radius: 30px;
}

.header__avatar h3 {
  @apply text-dark-surface font-bold ml-2 md:text-lg text-sm;
}
</style>

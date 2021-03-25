<template functional>
  <client-only>
    <div class="header-avatar">
      <img
        :src="require('@/static/avatar-header.png')"
        alt="Jairo Blatt avatar"
      />
      <h3>Jairo Blatt</h3>
    </div>
  </client-only>
</template>
<style lang="postcss" scoped>
.header-avatar {
  @apply relative items-center cursor-pointer hidden sm:flex;
}

.header-avatar img {
  border-radius: 30px;
}

.header-avatar h3 {
  @apply text-dark-surface font-bold ml-2 md:text-lg text-sm;
}
</style>

<template>
  <div class="settings">
    <MenuExpand :hover="false">
      <template #selected>
        <img
          class="settings__icon"
          :src="require('@/static/' + settingsIcon)"
          alt=""
        />
      </template>
      <template #items>
        <div class="settings__expand">
          <div class="expand__item">
            <DarkModeSwitch />
          </div>
          <div class="expand__item">
            <Lang />
          </div>
        </div>
      </template>
    </MenuExpand>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {
    DarkModeSwitch: () => import('@/components/DarkModeSwitch/index.vue'),
    Lang: () => import('@/components/Lang/index.vue'),
    MenuExpand: () => import('@/components/MenuExpand/index.vue'),
  },

  computed: {
    settingsIcon() {
      return this.$store.getters['darkmode/has']
        ? 'settings-dark.svg'
        : 'settings.svg';
    },
  },
});
</script>
<style scoped lang="postcss">
.settings__btn {
  @apply outline-none;
}

.settings__icon {
  height: 20px;
}

.settings__btn--mounted {
  transition: all 1s ease-in-out;
  transform: rotate(280deg);
}

.settings__expand {
  @apply rounded px-2 py-4 flex justify-center items-center flex-col;
}

.expand__item {
  @apply bg-dark-onSurfacePrimary p-4 rounded w-full mt-3;
}
</style>

<template>
  <div class="switch">
    <img
      class="switch__icon"
      :src="require(`@/static/${switchHandler ? 'sun' : 'sun-active'}.svg`)"
      alt="Darkmode sun icon"
    />
    <div class="switch__dark-mode">
      <input id="darkMode" v-model="switchHandler" type="checkbox" />
      <label for="darkMode" class="switch__dark-mode-inner">dark-mode</label>
    </div>
    <img
      class="switch__icon"
      :src="require(`@/static/${switchHandler ? 'moon-active' : 'moon'}.svg`)"
      alt="Darkmode moon icon"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  computed: {
    switchHandler: {
      set(payload: boolean) {
        this.$store.commit('navigation/SET_DARKMODE', payload);
        localStorage.setItem('dark-mode', JSON.stringify(payload));
      },

      get(): boolean {
        return this.$store.getters['navigation/darkMode'];
      },
    },
  },

  mounted() {
    const darkmodeStorage = localStorage.getItem('dark-mode');
    if (typeof darkmodeStorage === 'string') {
      this.switchHandler = JSON.parse(darkmodeStorage);
    }
  },
});
</script>
<style lang="postcss" scoped>
.switch {
  @apply align-middle text-center flex items-center justify-center;
}

.switch__dark-mode {
  @apply mx-2 relative inline-block;
}

.switch__icon {
  height: 15.3px;
}

.switch__dark-mode > label.switch__dark-mode-inner {
  @apply m-0 overflow-hidden block relative transition-all ease-linear duration-300;

  width: 50px;
  height: 30px;
  background: #e0e0e0;
  color: #e0e0e0;
  border-radius: 26px;
}

.switch__dark-mode > label.switch__dark-mode-inner::before {
  @apply absolute font-medium;

  content: attr(data-on);
  top: 7px;
  right: 20px;
}

.switch__dark-mode > label.switch__dark-mode-inner::after {
  @apply absolute text-center transition-all duration-300 ease-linear  bg-white;

  content: attr(data-off);
  width: 20px;
  height: 20px;
  border-radius: 50px;
  left: 5px;
  top: 5px;
  box-shadow: 0 0 6px -2px #111;
  padding: 5px 0;
}

.switch__dark-mode input[type='checkbox'] {
  @apply cursor-pointer opacity-0 absolute z-10 m-0;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.switch__dark-mode
  input[type='checkbox']:checked
  + label.switch__dark-mode-inner {
  @apply bg-dark-elevatedSurface text-white text-dark-elevatedSurface;
}

.switch__dark-mode
  input[type='checkbox']:checked
  + label.switch__dark-mode-inner::after {
  @apply text-secondary-lightgreen;

  content: attr(data-on);
  left: 24px;
}

.switch__dark-mode
  input[type='checkbox']:checked
  + label.switch__dark-mode-inner::before {
  @apply right-auto;

  content: attr(data-off);
  left: 20px;
}
</style>

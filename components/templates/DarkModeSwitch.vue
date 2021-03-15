<template>
  <div class="switch__container">
    <img
      class="switch-icon"
      :src="require(`@/static/${switchHandler ? 'sun' : 'sun-active'}.svg`)"
      alt="Darkmode sun icon"
    />
    <label class="switch switch-color__action">
      <input type="checkbox" name="color_mode" v-model="switchHandler" />
      <label for="color_mode" class="switch-color__action-inner"></label>
    </label>
    <img
      class="switch-icon"
      :src="require(`@/static/${switchHandler ? 'moon-active' : 'moon'}.svg`)"
      alt="Darkmode sun icon"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  mounted() {
    const darkmodeStorage = localStorage.getItem('dark-mode');
    if (typeof darkmodeStorage === 'string') {
      this.switchHandler = JSON.parse(darkmodeStorage);
    }
  },

  computed: {
    switchHandler: {
      set(payload: boolean) {
        this.$store.commit('darkmode/set', payload);
        localStorage.setItem('dark-mode', JSON.stringify(payload));
      },

      get(): boolean {
        return this.$store.getters['darkmode/has'];
      },
    },
  },
});
</script>
<style lang="postcss" scoped>
.switch__container {
  @apply align-middle text-center flex items-center;
}

.switch-color__action {
  @apply mx-2 relative inline-block;
}

.switch-icon {
  height: 15.3px;
}

.switch-color__action > label.switch-color__action-inner {
  @apply m-0 overflow-hidden block relative transition-all ease-linear duration-300;

  width: 50px;
  height: 30px;
  background: #e0e0e0;
  border-radius: 26px;
}

.switch-color__action > label.switch-color__action-inner::before {
  @apply absolute font-medium;

  content: attr(data-on);
  top: 7px;
  right: 20px;
}

.switch-color__action > label.switch-color__action-inner::after {
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

.switch-color__action input[type='checkbox'] {
  @apply cursor-pointer opacity-0 absolute z-10 m-0;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.switch-color__action
  input[type='checkbox']:checked
  + label.switch-color__action-inner {
  @apply bg-dark-elevatedSurface text-white;
}

.switch-color__action
  input[type='checkbox']:checked
  + label.switch-color__action-inner::after {
  @apply bg-nuxt-lightgreen;

  content: attr(data-on);
  left: 24px;
}

.switch-color__action
  input[type='checkbox']:checked
  + label.switch-color__action-inner::before {
  @apply right-auto;

  content: attr(data-off);
  left: 20px;
}
</style>

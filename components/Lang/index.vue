<template>
  <div class="lang">
    <MenuExpand ref="menuExpand">
      <template v-slot:selected="{ isOpen }">
        <span> {{ $i18n.localeProperties.name }}</span>
        <Icon
          icon="arrow"
          class="lang__toggle__icon"
          :class="{ 'lang__toggle__icon--down': isOpen }"
        />
      </template>
      <template #items>
        <ul class="lang__menu">
          <li
            v-for="(locale, index) in $i18n.locales"
            :key="`lang-item-${index}`"
            class="lang__item"
          >
            <span @click="setLocale(locale)">
              {{ locale.name }}
            </span>
          </li>
        </ul>
      </template>
    </MenuExpand>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { LocaleObject } from 'nuxt-i18n/types';
import MenuExpand, { IMenuExpand } from '@/components/MenuExpand/index.vue';

export default Vue.extend({
  components: {
    MenuExpand,
    Icon: () => import('@/components/Icon/index.vue'),
  },

  methods: {
    async setLocale({ code }: LocaleObject) {
      if (this.$i18n.localeProperties.code !== code) {
        try {
          await this.$i18n.setLocale(code);
          this.$i18n.setLocaleCookie(code);
          this.$store.commit('lang/set', code);
        } catch (e) {
          console.error(e);
        }
      }

      const menuExpandComponent = this.$refs.menuExpand as IMenuExpand;
      menuExpandComponent.isOpen = false;
    },
  },
});
</script>
<style scoped lang="scss">
$border-radius: 7px;

.lang {
  min-width: 160px;
  height: 40px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.lang__toggle__icon {
  height: 13px;
  transform: rotate(90deg);
}

.lang__toggle__icon--down {
  transform: rotate(270deg);
}

li {
  list-style: none;
}

.lang__menu {
  .lang__item {
    overflow: hidden;
    cursor: pointer;
    border-radius: 3px;

    & span {
      padding: 10px 20px;
      display: block;
      clear: both;
      font-weight: normal;
      line-height: 1.6;
      color: #333;
      white-space: nowrap;
      text-decoration: none;

      &:hover {
        background: #efefef34;
      }
    }
  }
}
</style>

<template>
  <div class="menu-expand">
    <button :class="expandToggleClasses" @click="isOpen = !isOpen">
      <slot name="selected" :is-open="isOpen" />
    </button>

    <transition name="expand">
      <div v-show="isOpen" class="menu-expand__menu">
        <slot name="items" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const MenuExpand = Vue.extend({
  props: {
    hover: {
      type: Boolean,
      default: true,
    },
    icon: Boolean,
  },

  data: () => ({
    isOpen: false,
  }),

  computed: {
    expandToggleClasses() {
      return {
        'menu-expand__toggle': true,
        'menu-expand__toggle--hover': this.hover,
        'menu-expand__toggle--icon': this.icon,
      };
    },
  },

  mounted() {
    document.addEventListener('click', this.clickElementHandler);
    this.$once('hook:beforeDestroy', () =>
      document.removeEventListener('click', this.clickElementHandler)
    );
  },

  methods: {
    clickElementHandler(e: MouseEvent) {
      const { target } = e;
      if (!this.$el.contains(target as Node)) {
        this.isOpen = false;
      }
    },
  },
});

export default MenuExpand;
export type IMenuExpand = InstanceType<typeof MenuExpand>;
</script>
<style scoped lang="scss">
$border-radius: 7px;

.menu-expand {
  height: 40px;
  position: relative;
  display: inline-block;
  vertical-align: middle;

  .menu-expand__toggle {
    color: #636b6f;
    padding: 10px;
    min-width: 160px;
    text-transform: none;
    font-weight: 300;
    margin-bottom: 7px;
    border: 0;
    float: none;
    box-shadow: none;
    border-radius: $border-radius;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    cursor: pointer;
  }

  .menu-expand__toggle--icon {
    min-width: auto;
  }

  .menu-expand__toggle--hover:hover {
    background: #e1e1e1;
    transition: background 60ms ease-out;
  }
}

.menu-expand span:hover {
  text-decoration: none;
}

.menu-expand__toggle__icon {
  height: 13px;
  transform: rotate(90deg);
}

.menu-expand__toggle__icon--down {
  transform: rotate(270deg);
}

li {
  list-style: none;
}

.menu-expand__menu {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1000;
  float: left;
  min-width: 160px;
  padding: 5px 5px;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border-radius: $border-radius;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.075);
  background-clip: padding-box;

  .menu-expand__item {
    overflow: hidden;
    width: 100%;
    position: relative;
    margin: 0;
    cursor: pointer;

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
        color: blue;
      }
    }
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: all 99ms ease-in;
}

.expand-enter,
.expand-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>

import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import darkModeStore from '@/store/darkmode';

import DarkModeSwitch from '@/components/templates/DarkModeSwitch.vue';

describe('DarkModeSwitch.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        darkmode: {
          namespaced: true,
          ...darkModeStore,
        },
      },
    });
  });
  const mountFunction = (options = {}) => {
    return mount(DarkModeSwitch, {
      ...options,
      store,
      localVue,
    });
  };

  it('Should mount the component and snapshot', () => {
    const wrapper = mountFunction();
    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toMatchSnapshot();
  });
});

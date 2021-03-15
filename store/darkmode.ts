import { MutationTree, GetterTree } from 'vuex';

export const state = () => ({
  darkMode: false,
});

export type DarkModeState = ReturnType<typeof state>;

export const getters: GetterTree<DarkModeState, DarkModeState> = {
  has: state => state.darkMode,
};

export const mutations: MutationTree<DarkModeState> = {
  set(state, payload: boolean) {
    state.darkMode = payload;
  },
};

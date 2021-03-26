import { MutationTree, GetterTree } from 'vuex';

export const state = () => ({
  darkMode: false,
  lang: '',
});

export type DarkModeState = ReturnType<typeof state>;

export const getters: GetterTree<DarkModeState, DarkModeState> = {
  darkMode: state => state.darkMode,
  lang: state => state.lang,
};

export const mutations: MutationTree<DarkModeState> = {
  SET_DARKMODE(state, payload: boolean) {
    state.darkMode = payload;
  },

  SET_LANG(state, payload: string) {
    state.lang = payload;
  },
};

import { MutationTree, GetterTree } from 'vuex';

export const state = () => ({
  lang: '',
});

export type LangState = ReturnType<typeof state>;

export const getters: GetterTree<LangState, LangState> = {
  lang: state => state.lang,
};

export const mutations: MutationTree<LangState> = {
  set(state, payload: string) {
    state.lang = payload;
  },
};

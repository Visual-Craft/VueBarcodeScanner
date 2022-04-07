import { Scanner } from '@/common/types';

export interface TestDrive {
  barCode: string | null;
}

export const scanner = {
  namespaced: true,
  state: (): Scanner => ({
    barCode: null,
  }),
  mutations: {
    setBarCode(state, code: string) {
      state.barCode = code;
    },
  },
  getters: {
    barCode: (state) => state.barCode,
  },
};

import Vue from 'vue';
import Vuex from 'vuex';

import { scanner, Scanner } from './scanner';

Vue.use(Vuex);

interface State {
  scanner: Scanner;
}

export default new Vuex.Store<State>({
  modules: {
    scanner,
  },
});

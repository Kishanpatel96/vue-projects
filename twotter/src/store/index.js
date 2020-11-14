import { createStore } from 'vuex';
import { UserModule } from './User';

export default createStore({
  state: {},

  // Functions that effects the STATE
  mutations: {},

  // Functions that you call throughout application that call mutations.
  actions: {},

  modules: {
    User: UserModule
  }

})

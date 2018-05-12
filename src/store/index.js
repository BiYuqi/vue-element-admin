import Vue from 'vue'
import Vuex from 'vuex'
import {state} from './state'
import {mutations} from './mutations'
import * as getters from './getters.js'
import user from './user'
import permiss from './permiss'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    permiss
  },
  state,
  getters,
  mutations
})

export default store

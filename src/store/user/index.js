import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'

const state = {
  role: []
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

import * as actions from './actions'
import mutations from './mutations'
import * as getters from './getters'

const state = {
  payload: {
    param: {},
    status: 200,
    callback: () => {},
    error: (res) => {}
  },
  server: {
    server1: 'https://easy-mock.com/mock/5aa881eb99ed355f274d0e93'
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

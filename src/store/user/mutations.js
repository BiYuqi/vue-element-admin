import * as types from './mutation-types'
export default {
  [types.USER_INFO] (state, res) {
    state.role = res.data.data.role
  },
  [types.RESET_ROLE] (state) {
    state.role.length = 0
  }
}

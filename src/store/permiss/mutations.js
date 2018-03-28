import * as types from './mutation-types'
export default {
  [types.RM_ROUTES] (state) { // 清除角色
    state.routers.length = 0
  },
  [types.SET_ROUTES] (state, res) {
    state.routers = res
  }
}

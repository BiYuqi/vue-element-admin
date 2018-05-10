import * as types from './types.js'

const state = {
  role: []// 存储角色信息
}
const mutations = {
  [types.USER_INFO] (state, res) {
    state.role = res.data.data.role
  },
  [types.RESET_ROLE] (state) {
    state.role.length = 0
  }
}
const actions = {
  getUserInfoAction ({state, commit, dispatch, getters, rootGetters}, data) {
    const payload = rootGetters['api/payload']
    payload.param = data
    return new Promise((resolve, reject) => {
      payload.callback = res => {
        resolve(res)
      }
      payload.error = res => {
        reject(res)
      }
      dispatch('api/getUserInfo', payload, {root: true})
    })
  },
  getUserInfoAction2 ({state, commit, dispatch, getters, rootGetters}, data) {
    const payload = rootGetters['api/payload']
    payload.param = data
    return new Promise((resolve, reject) => {
      payload.callback = res => {
        resolve(res)
      }
      dispatch('api/getArrowSelect', payload, {root: true})
    })
  }
}
const getters = {
  role: state => {
    return state.role
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

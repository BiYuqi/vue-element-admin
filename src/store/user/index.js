import * as types from './types.js'
import {fetchUserInfo, fetchArrowSelect} from '@/api/userInfo'

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
  GetUserInfoAction ({state}, data) {
    return new Promise((resolve, reject) => {
      fetchUserInfo(data).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  GetArrowSelect ({state}, data) { // 暂未用到
    return new Promise((resolve, reject) => {
      fetchArrowSelect(data).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
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

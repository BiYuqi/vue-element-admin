import * as types from './types'
import { filterRoutesByRole } from '@/utils/permission'
import { baseRoute } from '@/router/sidebar'

const state = {
  routers: []
}
const mutations = {
  [types.RM_ROUTES] (state) { // 清除角色
    state.routers.length = 0
  },
  [types.SET_ROUTES] (state, res) {
    state.routers = res
  }
}
const actions = {
  setFilterRoutes ({state}, data) {
    return new Promise((resolve, reject) => {
      const role = data
      const result = filterRoutesByRole(baseRoute, role)
      resolve(result)
    })
  },
  setRoutes ({commit}, res) {
    commit(types.SET_ROUTES, res)
  }
}
const getters = {
  routers: state => {
    return state.routers
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

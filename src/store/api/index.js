import * as actions from './actions'

const state = {
  payload: {
    param: {},
    status: 200,
    callback: () => {},
    error: () => {}
  },
  server: {
    server1: 'https://easy-mock.com/mock/5aa881eb99ed355f274d0e93'
  }
}
const getters = {
  payload: state => {
    return state.payload
  },
  APIError: state => {
    return state.error
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters
}

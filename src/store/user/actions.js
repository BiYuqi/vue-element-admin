// import * as types from './mutation-types'
/*
* getInfo role
*/
export const getUserInfoAction = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      resolve(res)
    }
    dispatch('api/getUserInfo', payload, {root: true})
  })
}

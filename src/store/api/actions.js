import {AjaxRequest} from '@/http/http'
/*
*https://www.mmxiaowu.com/article/591a74f60ef91a5c93a340c4
*/
export const ajaxMethod = ({state, dispatch}, data) => {
  let method = data.param[0]
  let url = data.param[1]
  let param = data.param[2]
  let payload = data.param[3]
  let error = res => {
    state.error = res
  }
  payload.error = error
  const request = new AjaxRequest(url, param, payload)
  if (method === 'GET') {
    request.getAjaxMethod(url, param, payload)
  } else if (method === 'POST') {
    request.postAjaxMethod(url, param, payload)
  } else if (method === 'PUT') {
    request.putAjaxMethod(url, param, payload)
  } else if (method === 'DELETE') {
    request.deleteAjaxMethod(url, param, payload)
  } else {
    request.getAjaxMethod(url, param, payload)
  }
}
/**
* userInfo admin
*https://easy-mock.com/mock/5aa881eb99ed355f274d0e93/system/userInfo#!method=get
*https://easy-mock.com/mock/5aa881eb99ed355f274d0e93/system/userInfonormal#!method=get
*/
export const getUserInfo = ({state, dispatch}, payload) => {
  dispatch('api/ajaxMethod', {param: ['GET', state.server.server1 + '/system/userInfo?role=' + payload.param.role, payload.param, payload]}, {root: true})
}

import request from '@/utils/request'

export const fetchUserInfo = (query) => {
  return request({
    url: '/system/userInfo',
    method: 'get',
    params: query
  })
}

export const fetchArrowSelect = (query) => {
  return request({
    method: 'get',
    url: '/system/getSearchList',
    params: query
  })
}

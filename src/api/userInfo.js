import request from '@/utils/request'

export const fetchUserInfo = ({ role }) => {
  // mock
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (role === 'admin') {
        resolve({
          data: {
            role: ['admin']
          }
        })
      } else {
        resolve({
          data: {
            role: ['user']
          }
        })
      }
    }, 500)
  })
  // 真实应该用下面注释掉的方法
  // return request({
  //   url: '/system/userInfo',
  //   method: 'get',
  //   params: query
  // })
}

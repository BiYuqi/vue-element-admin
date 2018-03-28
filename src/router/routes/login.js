export default {
  path: '/login',
  name: 'login',
  title: '登录',
  meta: {
    title: '登录',
    isLocal: true // 是否被注入opendList
  },
  component: () => import('@/views/login/login.vue')
}

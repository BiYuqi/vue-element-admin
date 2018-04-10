/**
* 由于路由设计原因
* 404路由动态注入
*/
export default [{
  path: '*',
  name: 'error_index',
  meta: {
    title: '页面找不到了',
    isLocal: true // 是否被注入opendList true 不被注入
  },
  component: () => import('@/views/errorPage/index.vue')
}]

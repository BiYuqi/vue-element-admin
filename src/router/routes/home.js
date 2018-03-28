export default {
  path: '',
  name: 'home_index',
  title: '报警系统',
  meta: {
    title: '报警系统',
    isLocal: true // 是否被注入opendList true 不被注入
  },
  component: () => import('@/views/home/home.vue')
}

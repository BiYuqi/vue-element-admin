import Cookies from 'js-cookie'
export const state = {
  pageOpenedList: [
    {
      meta: {title: 'dashboard'},
      name: 'dashboard_index',
      path: '/dashboard',
      arg: {},
      query: {}
    }
  ],
  sidebarStatus: 0, // 展开
  headVisetedShow: true, // 顶部访问历史tab 是否显示
  currentPageName: '', // 当前路由name
  language: Cookies.get('language') || 'zh',
  currentUserInfo: null, // 当前用户信息
  todoList: [ // todolist demo
    {
      status: 0,
      content: 'vue-element-admin持续开发维护'
    },
    {
      status: 0,
      content: '深入Vue的开发学习'
    },
    {
      status: 1,
      content: '开始学习Electron'
    },
    {
      status: 1,
      content: '算法，数据结构'
    },
    {
      status: 1,
      content: '学习持续集成'
    },
    {
      status: 0,
      content: '前端工程化+自动化有更多的实践和体会'
    },
    {
      status: 1,
      content: '如果可以学习下PWA，小程序'
    }
  ],
  errorLog: []
}

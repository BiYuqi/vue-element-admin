export const state = {
  pageOpenedList: [
    {
      meta: {title: '首页'},
      name: 'dashboard_index',
      path: '/dashboard',
      arg: {},
      query: {}
    }
  ],
  sidebarStatus: 0, // 展开
  headVisetedShow: true, // 顶部访问历史tab 是否显示
  currentPageName: '', // 当前路由name
  todoList: [ // todolist demo
    {
      status: 1,
      content: 'vue-element-admin持续开发维护'
    },
    {
      status: 1,
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
      status: 1,
      content: '前端工程化+自动化有更多的实践体会'
    },
    {
      status: 1,
      content: '如果可以学习下PWA，小程序'
    }
  ],
  errorLog: []
}

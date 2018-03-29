export const state = {
  pageOpenedList: [
    {
      meta: {title: '首页'},
      name: 'dashboard_index',
      path: '/dashboard/dashboard',
      arg: {},
      query: {}
    }
  ],
  sidebarStatus: 0, // 展开
  headVisetedShow: true, // 顶部访问历史tab 是否显示
  todoList: [
    {
      status: 1,
      content: 'vue-element-admin计划表'
    },
    {
      status: 1,
      content: 'vue多页面开发计划'
    },
    {
      status: 1,
      content: 'is函数库开发'
    }
  ], // todo-list
  errorLog: []
}

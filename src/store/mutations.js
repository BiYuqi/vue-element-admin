import Cookies from 'js-cookie'
export const mutations = {
  increateTag (state, tagObj) {
    if (tagObj && tagObj.meta && tagObj.meta.isLocal) { // 过滤不需要加入tagview的组件
      return
    }
    state.pageOpenedList.push(tagObj)
  },
  pageOpenedList (state, params) { // 打开的历史记录
    let opendPage = state.pageOpenedList[params.index]
    if (params.arg) {
      opendPage.arg = params.arg
    }
    if (params.query) {
      opendPage.query = params.query
    }
    state.pageOpenedList.splice(params.index, 1, opendPage)
    // 修复路由在首页时刷新页面，pageOpenedList丢失的问题 2018-04-12 22:31
    if (state.currentPageName && state.currentPageName !== 'dashboard_index') {
      localStorage.setItem('pageOpenedList', JSON.stringify(state.pageOpenedList))
    }
  },
  clearAllTags (state) {
    state.pageOpenedList.splice(1)
    localStorage.setItem('pageOpenedList', JSON.stringify(state.pageOpenedList))
  },
  setOpenedList (state) {
    const local = localStorage.pageOpenedList && JSON.parse(localStorage.pageOpenedList).length > 0
    if (local) {
      state.pageOpenedList = JSON.parse(localStorage.pageOpenedList)
    }
  },
  setCurrentPageName (state, res) {
    state.currentPageName = res
  },
  setCurrentUserInfo (state, res) {
    state.currentUserInfo = res
  },
  setSidebar (state) { // 侧边栏开关
    // if (!localStorage.getItem('sidebarStatus')) {
    //   localStorage.setItem('sidebarStatus', '0')
    // }
    // if (localStorage.getItem('sidebarStatus') === '0') { // 0
    //   state.sidebarStatus = '1'
    //   localStorage.setItem('sidebarStatus', '1')
    // } else {
    //   state.sidebarStatus = '0'
    //   localStorage.setItem('sidebarStatus', '0')
    // }
    if (state.sidebarStatus === 1) {
      state.sidebarStatus = 0
    } else {
      state.sidebarStatus = 1
    }
  },
  setHeadVisetedShow (state) { // opendList 显示开关
    state.headVisetedShow = !state.headVisetedShow
  },
  closeTagFromOpendList (state, obj) {
    // 临时解决方案 后续再完善
    const lists = state.pageOpenedList
    if (obj.name === 'dashboard_index') {
      return
    }
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].name === obj.name) {
        const lastName = state.pageOpenedList[i - 1].name
        state.pageOpenedList.splice(i, 1)
        localStorage.setItem('pageOpenedList', JSON.stringify(state.pageOpenedList))
        obj.vm.$router.push({
          name: lastName
        })
      }
    }
  },
  addTodoList (state, opt) { // todo-list-demo start
    state.todoList.push(opt)
  },
  readTodoList (state, opt) {
    state.todoList[opt.index].status = opt.status
  },
  removeTodo (state, index) { // todo-list-demo end
    state.todoList.splice(index, 1)
  },
  addErrorLog (state, msg) {
    state.errorLog.push(msg)
  },
  setLanguage (state, lang) {
    state.language = lang
    Cookies.set('language', lang)
  }
}

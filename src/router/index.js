import Vue from 'vue'
import Router from 'vue-router'
import Cookie from 'js-cookie'
import Util from '@/utils/baseSetting'
import routes from './baseConfig'
import otherRoute from './otherRoutes'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
import errPage from '@/utils/404'
import i18n from '../lang'
import { Message } from 'element-ui'
Vue.use(Router)
export const router = new Router({
  // mode: 'history',
  routes: routes.concat(...otherRoute)
})

NProgress.configure({ showSpinner: false })
/* eslint handle-callback-err: "error" */
router.beforeEach((to, from, next) => {
  NProgress.start()
  const title = to.meta.title
  Util.title(i18n.vm.messages[i18n.vm.locale]['route'][title]) // translate zh <=> en
  if (!Cookie.get('user') && to.name !== 'login') {
    next({
      replace: true,
      name: 'login'
    })
  } else if (Cookie.get('user') && to.name === 'login') {
    next({
      name: 'dashboard_index'
    })
  } else {
    /**
    * 这里因为是用的mock.js 返回用户角色
    */
    if ((Cookie.get('user')) && store.getters['user/role'].length === 0) { // 已经登录且角色已经分配
      /** 正式用注释这段就够了，因为后台回返给不同的角色 */
      const localRole = Cookie.get('role')
      store.dispatch('user/GetUserInfoAction', {role: localRole}).then((role) => { // 服务端拉去用户role
        store.commit('user/USER_INFO', role) // vuex管理role
        /**
        * role.data.data.role[0]
        * 该处是要看自己的后台返回什么字段
        * 目前mock只是返回一个role字段
        */
        store.dispatch('permiss/setFilterRoutes', role.data.data.role[0]).then((res) => { // 根据role过滤路由
          store.dispatch('permiss/setRoutes', res) // vuex管理路由
          router.addRoutes(res) // 动态的添加路由
          router.addRoutes(errPage) // 增加404page
          next({ ...to, replace: true })
        })
      }).catch((err) => {
        if (err) {
          Message.error('网络错误，请重试')
          setTimeout(() => {
            Cookie.remove('user')
            Cookie.remove('role')
            store.commit('clearAllTags')
            store.commit('user/RESET_ROLE') // 清除角色
            store.commit('permiss/RM_ROUTES') // 清空routes for sidebar
            localStorage.removeItem('pageOpenedList')
            setTimeout(() => {
              // 为了修复直接通过vue-router 无刷新退出 导致 Duplicate named routes definition bug
              // 刷新是为了清空 路由源保留的路由状态
              location.reload()
            }, 0)
            NProgress.done()
          }, 2000)
        }
      })
      /** 正式用注释这段就够了，因为后台回返给不同的角色End */
    } else {
      next() // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach((to) => {
  Util.opendPage(router.app, to.name, to.params, to.query, to.meta, to.path)
  NProgress.done()
  window.scrollTo(0, 0)
})

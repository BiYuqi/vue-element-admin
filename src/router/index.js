import Vue from 'vue'
import Router from 'vue-router'
import Cookie from 'js-cookie'
import Util from '@/utils/baseSetting'
import routes from './baseConfig'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
Vue.use(Router)
export const router = new Router({
  // mode: 'history',
  routes: routes
})

NProgress.configure({ showSpinner: false })// NProgress Configuration

router.beforeEach((to, from, next) => {
  Util.opendPage(router.app, to.name, to.params, to.query, to.meta, to.path)
  NProgress.start()
  const title = to.meta.title
  Util.title(title)
  if (!Cookie.get('user') && to.name !== 'login') {
    next({
      replace: true,
      name: 'login'
    })
  } else if (Cookie.get('user') && to.name === 'login') {
    next({
      name: 'home_index'
    })
  } else {
    /**
    * 这里因为是用的mock.js 返回用户角色
    */
    if ((Cookie.get('user')) && store.getters['user/role'].length === 0) { // 已经登录且角色已经分配
      /** 正式用注释这段就够了，因为后天回返给不同的角色*********/
      const localRole = Cookie.get('role')
      store.dispatch('user/getUserInfoAction', {role: localRole}).then((role) => { // 服务端拉去用户role
        store.commit('user/USER_INFO', role) // vuex管理role
        store.dispatch('permiss/setFilterRoutes', role.data.data.role[0]).then((res) => { // 根据role过滤路由
          store.dispatch('permiss/setRoutes', res) // vuex管理路由
          router.addRoutes(res) // 动态的添加路由
          next({ ...to, replace: true })
        })
      })
      /** 正式用注释这段就够了，因为后天回返给不同的角色End*********/
    } else {
      next() // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach((to) => {
  NProgress.done()
  window.scrollTo(0, 0)
})

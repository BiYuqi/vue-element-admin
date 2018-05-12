// 导入Vue框架
import Vue from 'vue'
// 导入主视图文件
import App from './App'
// 导入路由文件
import {router} from './router'
// 导入状态管理器
import store from './store'
// 导入element组件
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局svg-icon组件
// 导入介绍组件的组件
import SvgIcon from '@/components/SvgIcon'
import ComIntro from '@/components/ComIntro'
import CodingTip from '@/components/CodingTip'
// 导入中英互译组件
import i18n from './lang'
// 导入点击波浪组件
import Wave from '@/directive/wave/index'
// 导入global error component
import './errorLog'

// 注册全局svg-icon组件
Vue.component('svg-icon', SvgIcon)
// 注册全局介绍组件的组件
Vue.component('com-intro', ComIntro)
// 待开发组件提示
Vue.component('coding-tip', CodingTip)
Vue.config.productionTip = false

// 使用element-ui
Vue.use(ElementUi)
// 使用v-wave 波浪效果
Vue.use(Wave)

// add baidu count
if (process.env.NODE_ENV === 'production') {
  let hm = document.createElement('script')
  hm.src = 'https://hm.baidu.com/hm.js?0b2c26b40000cc8d4a441a66a12bc772'
  let s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(hm, s)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
})

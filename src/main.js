// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import store from './store'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SvgIcon from '@/components/SvgIcon'
import i18n from './lang'
import './errorLog'

Vue.component('svg-icon', SvgIcon)
Vue.config.productionTip = false

Vue.use(ElementUi)

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

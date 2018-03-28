import Vue from 'vue'
import store from '@/store'

// if (process.env.NODE_ENV) === 'production)'
Vue.config.errorHandler = (err, vm, info) => {
  Vue.nextTick(() => {
    store.commit('addErrorLog', {
      err,
      vm,
      info,
      url: err.stack.match(/((?:\w+\/)+\w+.vue):/m)[1]
    })
  })
}

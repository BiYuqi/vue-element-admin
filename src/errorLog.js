import Vue from 'vue'
import store from './store'
// if (process.env.NODE_ENV) === 'production)'
Vue.config.errorHandler = (err, vm, info) => {
  Vue.nextTick(() => {
    const errorLogs = store.state.errorLog
    const url = err.stack.match(/((?:\w+\/)+\w+.vue):/m)[1] || ''
    let oldCount = 0
    if (errorLogs.length > 0) {
      let count = 0
      for (let i = 0; i < errorLogs.length; i++) {
        if (errorLogs[i].url === url) {
          oldCount = errorLogs[i].count
          count += 1
          vm.$store.commit('addErrorLog', {
            err,
            vm,
            info,
            count: oldCount + count,
            url: url,
            repeat: true,
            index: i
          })
        }
      }
    } else {
      vm.$store.commit('addErrorLog', {
        err,
        vm,
        info,
        count: 0,
        url: url,
        repeat: false
      })
    }
  })
}

import Vue from 'vue'
// 该文件暂无法使用,请注意
Vue.config.errorHandler = (err, vm, info) => {
  Vue.nextTick(() => {
    const url = err.stack.match(/((?:\w+\/)+\w+.vue):/m)[1] || ''
    vm.$store.commit('addErrorLog', {
      err,
      vm,
      info,
      count: 1,
      url: url,
      repeat: false
    })
  })
}

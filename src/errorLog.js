import Vue from 'vue'
// if (process.env.NODE_ENV) === 'production)'
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

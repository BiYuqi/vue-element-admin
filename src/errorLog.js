import Vue from 'vue'
// if (process.env.NODE_ENV) === 'production)'
Vue.config.errorHandler = (err, vm, info) => {
  Vue.nextTick(() => {
    vm.$store.commit('addErrorLog', {
      err,
      vm,
      info,
      count: 0,
      url: err.stack.match(/((?:\w+\/)+\w+.vue):/m)[1]
    })
  })
}

/**
* 暂未用到，测试用 vue插件编写测试
*/
const vueScroll = {}
let handler = (callback) => {
  if (document.body.scrollHeight - window.scrollY - 100 <= document.body.clientHeight) {
    callback()
  }
  if (document.body.scrollHeight < 1000) {
    return false
  }
}
let actionsMethods = null
vueScroll.install = Vue => {
  Vue.directive('scroll', {
    inserted (el, binding) {
      actionsMethods = handler.bind(this, binding.value)
      window.addEventListener('scroll', actionsMethods)
    },
    unbind () {
      window.removeEventListener('scroll', actionsMethods)
    }
  })
}

export default vueScroll

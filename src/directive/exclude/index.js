const Exclude = {}
let eventHandler = null
Exclude.install = (Vue, options) => {
  Vue.directive('exc', {
    inserted (el, binding) {
      console.dir(el)
      eventHandler = (e) => {
        if (!el.contains(e.target)) {
          el.previousElementSibling.className = 'byq-picker-label'
        }
      }
      document.addEventListener('click', eventHandler)
    },
    unbind () {
      document.removeEventListener('click', eventHandler)
    }
  })
}

export default Exclude

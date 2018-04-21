/** *功能未完 仅仅测试*/
const dragAble = {}
const initBorders = {
  top: 0,
  left: 0,
  right: window.innerWidth,
  bottom: window.innerHeight
}
const initPos = {
  x: 0,
  y: 0,
  xx: 0,
  yy: 0
}
const positions = []
let isDrag = false
dragAble.install = (Vue) => {
  Vue.directive('drag', {
    bind (el, binding, vNode) {
      el.addEventListener('mousedown', (e) => {
        // const startAxis = el.getBoundingClientRect()
        if (!isDrag) {
          initPos.x = e.offsetX
          initPos.y = e.offsetY
          isDrag = true
        }
      })
      document.addEventListener('mousemove', (e) => {
        // const startAxis = el.getBoundingClientRect()
        e.preventDefault()
        el.style.transtion = 'background 200ms;'
        if (isDrag) {
          initPos.xx = e.offsetX - initPos.x
          initPos.yy = e.offsetY - initPos.y
          el.style.transform = `translate(${initPos.xx}px, ${initPos.yy}px)`
        }
      })
      document.addEventListener('mouseup', () => {
        isDrag = false
      }, false)
    }
  })
}
export default dragAble

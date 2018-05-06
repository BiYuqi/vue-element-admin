import './wave.css'
const BtnWave = {}
BtnWave.install = (Vue, options) => {
  Vue.directive('wave', {
    bind (el, binding) {
      const baseConfig = {
        color: (options && options.color) || 'rgba(0, 0, 0, .1)',
        type: (options && options.type) || 'hit'
      }
      el.addEventListener('click', e => {
        el.style.position = 'relative'
        el.style.overflow = 'hidden'
        const rect = el.getBoundingClientRect()
        let waveCircle = el.querySelector('.wave-wrap')
        if (!waveCircle) {
          waveCircle = document.createElement('span')
          waveCircle.className = 'wave-wrap'
          waveCircle.style.height = waveCircle.style.width = Math.max(rect.width, rect.height) + 'px'
          el.appendChild(waveCircle)
        } else {
          waveCircle.className = 'wave-wrap'
        }
        if (baseConfig.type === 'center') {
          waveCircle.style.top = (rect.height / 2 - waveCircle.offsetHeight / 2) + 'px'
          waveCircle.style.left = (rect.width / 2 - waveCircle.offsetWidth / 2) + 'px'
        } else {
          waveCircle.style.top = (e.pageY - rect.top - waveCircle.offsetHeight / 2 - document.body.scrollTop) + 'px'
          waveCircle.style.left = (e.pageX - rect.left - waveCircle.offsetWidth / 2 - document.body.scrollLeft) + 'px'
        }
        waveCircle.style.display = 'block'
        waveCircle.style.backgroundColor = baseConfig.color
        waveCircle.className = 'wave-wrap wave-active'
      })
    },
    unbind () {
      // console.log('啥时候失效呢')
    }
  })
}

export default BtnWave

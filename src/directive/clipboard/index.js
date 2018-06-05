import { Message } from 'element-ui'

const Clipboard = {}

const input = document.createElement('input')
input.id = 'byq-clipboard'
input.type = 'text'
input.style.position = 'absolute'
input.style.left = '-9999px'
document.body.appendChild(input)

const copyTarget = document.querySelector('#byq-clipboard')
const UA = window.navigator.userAgent.toLowerCase()
const isEdge = UA && UA.indexOf('edge/') > 0
const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
const isSupportChromeVersion = (v) => {
  return isChrome && ~~UA.match(/chrome\/(\d+)/)[1] >= v
}
Clipboard.install = (Vue, options) => {
  Vue.directive('clipboard', {
    bind (el, binding) {
      el.addEventListener('click', () => {
        const value = binding.value
        if (!value) {
          Message.error('请输入要复制问的文本')
        }
        if (isSupportChromeVersion(66) && window.navigator.clipboard) {
          // chrome version 66+ support
          window.navigator.clipboard.writeText(value).then(() => {
            Message.success('复制成功啦, 赶快使用吧')
            console.log('bind')
          }).catch((error) => {
            Message.error(error)
          })
        } else {
          copyTarget.value = value
          copyTarget.select()
          document.execCommand('Copy')
          Message.success('复制成功啦, 赶快使用吧')
        }
      })
    },
    update (el, binding) {
      el.addEventListener('click', (e) => {
        const value = binding.value
        if (!value) {
          Message.error('请输入要复制问的文本')
        }
        if (value === binding.oldValue) {
          return
        }
        if (isSupportChromeVersion(66) && window.navigator.clipboard) {
          // chrome version 66+ support
          window.navigator.clipboard.writeText(value).then(() => {
            Message.success('复制成功啦, 赶快使用吧')
            console.log('update')
          }).catch((error) => {
            Message.error(error)
          })
        } else {
          copyTarget.value = value
          copyTarget.select()
          document.execCommand('Copy')
          Message.success('复制成功啦, 赶快使用吧')
        }
      })
    }
  })
}

export default Clipboard

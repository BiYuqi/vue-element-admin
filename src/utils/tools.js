/**
* 日期格式化
* @param {type} String HHMMDDhhmmss  至于中间用什么请自便
* @param {timer} Number
* HH年MM月DD月 hh:mm:ss => 2018年4月12日 22:09:30
*/
export const format = (type, timer) => {
  const date = timer ? new Date(timer * 1) : new Date()
  const times = {
    'H+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let i in times) {
    const reg = new RegExp(`${i}`, 'g')
    const tt = ('' + times[i]).length === 1 ? ('00' + times[i]).slice(-2) : times[i]
    type = type.replace(reg, tt)
  }
  return type
}
export const throttle = (delay, times, callback) => {
  let startTime = (new Date()).getTime()
  let timer = null
  return function () {
    let currTime = (new Date()).getTime()
    let that = this
    let args = arguments
    clearTimeout(timer)
    if (currTime - startTime >= delay) {
      callback.apply(that, args)
      startTime = currTime
    } else {
      timer = setTimeout(function () {
        callback.apply(that, args)
      }, times)
    }
  }
}
/**
* 推算路由的父name
*/
export const filterName = (routes, name) => {
  const filters = routes.filter((item) => {
    return item.children.length > 1
  })
  const len = filters.length
  for (let i = 0; i < len; i++) {
    const len2 = filters[i].children.length
    for (let j = 0; j < len2; j++) {
      const items = filters[i].children[j]
      if (items.name === name) {
        return filters[i].name
      }
    }
  }
  return false
}

export const isHidePage = () => {
  let hidden
  let visibilityChange
  if (typeof document.hidden !== 'undefined') {
    hidden = 'hidden'
    visibilityChange = 'visibilitychange'
  } else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden'
    visibilityChange = 'msvisibilitychange'
  } else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden'
    visibilityChange = 'webkitvisibilitychange'
  }
  document.addEventListener(visibilityChange, () => {
    if (document[hidden]) {
      document.title = '快回来搞事情啦...'
    }
  }, false)
}

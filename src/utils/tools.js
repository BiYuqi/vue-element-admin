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

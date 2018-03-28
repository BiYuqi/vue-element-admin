/**
* created by biyuqi 2018/3/4
*/

/**
* 密码合法
*/
export const passCheck = (val) => {
  const reg = /^(?=.*?[0-9])(?=.*?[a-z])[0-9a-z]{8,}$/
  if (!reg.test(val)) {
    return true
  }
  return false
}

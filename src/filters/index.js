/**
* 日期递减
*/
export const daysCount = (num = 3) => {
  const date = new Date()
  const result = []
  const mounth = date.getMonth() + 1
  const today = date.getDate()
  for (let i = 0; i < num; i++) {
    result.push(`${mounth}月${today - i}日`)
  }
  return result.reverse()
}

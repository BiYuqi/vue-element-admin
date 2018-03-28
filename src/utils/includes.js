/**
* 推算路由的父name
*/
const filterName = (routes, name) => {
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
export default filterName

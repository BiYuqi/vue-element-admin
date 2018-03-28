/**
* @param router 路由数据
* @param role 当前用户角色(通俗点讲就是能看到哪些路由)
* 过滤路由 具体请看router/sidebar.js
* 首先一个模块必须是一个对象
* 即使只有一个子项 也必须放到children
* meta里面的access
*{
*  path: '/test',
*  title: '测试',
*  name: 'test',
*  icon: 'qq',
*  children: [
*    {
*      path: 'test',
*      name: 'test_index',
*      meta: {
*        title: '测试',
*        access: ['admin', 'biyuqi'] 这里放上是否查看的权限 不设置默认通过
*      }
*    }
*  ]
*}
*/
let result = []
const filterRoutes = (router, role) => {
  if (router.children.length === 1) { // children 长度为1时，说明只有一个路由
    router.children.filter((item) => {
      if (item.meta.access) { // 是否需要检查权限
        if (item.meta.access.indexOf(role) > -1) { // 是否匹配权限
          result.push(router) // 通过后push进来
        }
      } else { // 未检测到权限的直接放行
        result.push(router)
      }
    })
  } else { // children 长度>1时，只需临时把有权限的子路由存起来即可
    let snap = []
    router.children.filter((item) => {
      if (item.meta.access) {
        if (item.meta.access.indexOf(role) > -1) {
          snap.push(item)
        }
      } else {
        snap.push(item)
      }
    })
    if (snap.length >= 1) { // 临时子路由大于0时才有意义把当前路由注入
      router.children = [...snap]
      result.push(router)
    }
  }
}
export const filterRoutesByRole = (router, role) => {
  for (let m = 0; m < router.length; m++) {
    filterRoutes(router[m], role)
  }
  return result
}

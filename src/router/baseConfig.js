const files = require.context('./routes', false, /\.js$/)

const modules = []
/**
* 排除index baseConfig 等配置文件
* 所有的routes 都放在routes里面
* routes里面所有的js，必须是导出的一个默认对象
* 团队合作只需写好js文件，放进去，即可自动导入
*/
files.keys().forEach((item) => {
  if (item === './index.js' ||
      item === './baseConfig.js') return
  modules.push(files(item).default)
})
export default modules

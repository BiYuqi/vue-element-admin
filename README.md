<p align="center">
  Vue-element-admin
</p>

<p align="center">
	<a href="https://github.com/vuejs/vue">
		<img src="https://img.shields.io/badge/vue-2.5.2-blue.svg" alt="vue">
	</a>
	<a href="https://github.com/ElemeFE/element">
		<img src="https://img.shields.io/badge/element----ui-2.3.2-blue.svg" alt="element-ui">
	</a>
	<a href="https://github.com/BiYuqi/vue-element-admin/blob/master/LICENSE">
		<img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
	</a>
</p>

> vue-cli + element-ui 后台开发项目
本项目不适合作为后台模板使用，只作为后台解决方案的一种
本方案模板页：[模板页](https://github.com/BiYuqi/vue-admin-template)

### 本地使用
```js
// download files
git clone https://github.com/BiYuqi/vue-element-admin.git

cd vue-element-admin

// install dependencies
npm install

// serve with hot reload at localhost:8080
npm run dev

// build for production with minification
npm run build

// analyze bundle details
npm run analyz
```
### 本地起服务
由于easy-mock服务非常不稳定，所以本地新增node模拟接口

server文件夹
* 为本地node服务，本地npm run dev后，需要在server目录 node app 来启动本地服务，以便登录正常进行
* 以下为utils/request.js文件配置
* 执行 npm run app 即可
```js
// base setting
const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://easy-mock.com/mock/5aa881eb99ed355f274d0e93'
  : 'http://localhost:1234'
const service = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
})
```
### Change Log
* 2019.1.6
升级webpack4等相关依赖
重新配置production打包环境
升级vue, vue-loader
### DEMO

![](http://oiukswkar.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-03-31%2011.52.51.png)

![](http://oq4hkch8e.bkt.clouddn.com/vue-admin-5-12.png)

![](http://oiukswkar.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-05-01%2020.32.49.png)

![](http://oiukswkar.bkt.clouddn.com/vue-admin-51.gif)

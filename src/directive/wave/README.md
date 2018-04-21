## use
```js
// main.js
import Wave from '@/directive/wave/index'
Vue.use(Wave) // static

// or custom setting
Vue.use(Wave, {
  type: 'center', // this hit location
  color: 'rbga(0, 0, 0, .2)'
})
```
```html
<!-- use in vue template -->
<el-button type="primary" v-wave>点击测试</el-button>
```

## How to use?
```js
import InputFocus from '@/components/InputFocus'
props: {
  value: [String, Number],
  height: {
    type: Number,
    default: 40
  },
  placeholder: {
    type: String,
    default: '标题'
  },
  iconName: {
    type: String,
    default: ''
  },
  bolder: {
    type: Boolean,
    default: false
  }
},
```
```html
<input-focus
  v-model="test"
  iconName="search"
  placeholder="标题"
  style="width:200px;">
</input-focus>
```

<template>
  <div class="arrow-select">
    <el-input
      v-model="arrow"
      @input="renderData"
      placeholder="请随意输入问题"
      @keyup.native="listenKeyCode">
    </el-input>
    <ul v-if="arrowData.length > 0">
      <li class="key-list"
        v-for="item in arrowData"
        :key="item.id"
        @click="selectVal(item.title)">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arrow: '',
      arrowData: [], // 后期和数据对接
      initIndex: 0,
      isMock: this.mock
    }
  },
  methods: {
    renderData () {
      if (this.arrowData.length > 0) return
      for (let i = 0; i < 5; i++) {
        const data = {
          title: `我是测试${i}号`,
          key: `${i}`
        }
        this.arrowData.push(data)
      }
      // 初始化设置
      setTimeout(() => {
        const searchList = Array.from(document.querySelectorAll('.key-list'))
        searchList[this.initIndex].className += ' active'
      })
    },
    selectVal (val) { // 设置value
      this.arrow = val
      this.initIndex = 0
      this.arrowData.splice(0)
    },
    removeClassName (searchList) { // 移除class
      const reg = /active/
      for (let i = 0; i < searchList.length; i++) {
        const cm = searchList[i].className
        if (reg.test(cm)) {
          searchList[i].className = 'key-list'
        }
      }
    },
    listenKeyCode (event) { // 键盘事件
      // console.log(event)
      const keyCode = event.keyCode
      const up = 38
      const down = 40
      const submit = 13
      const searchList = Array.from(document.querySelectorAll('.key-list'))
      const len = searchList.length
      if (keyCode === up) {
        this.removeClassName(searchList)
        this.initIndex--
        if (this.initIndex < 0) {
          this.initIndex = len - 1
        }
        searchList[this.initIndex].className += ' active'
      } else if (keyCode === down) {
        this.removeClassName(searchList)
        this.initIndex++
        if (this.initIndex > len - 1) {
          this.initIndex = 0
        }
        searchList[this.initIndex].className += ' active'
      }
      // 提交数据 初始化输入框
      if (keyCode === submit) {
        for (let i = 0; i < len; i++) {
          if (searchList[i].className.indexOf('active') > -1) {
            this.arrow = searchList[i].innerText.replace(/\s/gm, '')
            this.initIndex = 0
            this.arrowData.splice(0)
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/mixin.scss';
.arrow-select{
  position: relative;
  ul{
    list-style: none;
  }
  li{
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    padding-left: 10px;
    border-bottom: 1px solid $borderColor;
    transition: all .2s;
    &:hover{
      background-color: #eee;
      color: $baseColor;
    }
    &.active{
      background-color: $baseColor;
      color: #fff;
    }
  }
}
</style>

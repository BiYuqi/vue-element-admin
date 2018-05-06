<template lang="html">
  <div class="setting-wrap components-wrap">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>本系统基本配置</span>
      </div>
      <el-row>
        <el-col>
          <div class="grid-content">
            <el-switch
              v-model="showTabs"
              @change="switchStatus"
              active-color="#12adad"
              active-text="显示顶部历史tab"
              inactive-text="关闭顶部历史tab">
            </el-switch>
          </div>
        </el-col>
        <el-col>
          <div class="grid-content">
            <el-dropdown trigger="hover" @command="handleCommand">
              <span class="el-dropdown-link">
                切换主题
                <svg-icon name="theme"/>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="item in staticTheme"
                  :key="item.id"
                  :command="item.key">{{item.title}}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>测试用箭头选值(支持enter键)</span>
      </div>
      <el-row>
        <el-col>
          <div class="arrow-wrap">
            <el-input
              v-model="arrow"
              @input="renderData"
              placeholder="请随意输入问题"
              @keyup.native="listenKeyCode">
            </el-input>
            <ul>
              <li class="key-list" v-for="item in arrowData" :key="item.id">{{item.title}}</li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showTabs: true,
      staticTheme: [ // static color data
        {
          title: '默认',
          key: 'static'
        },
        {
          title: '蓝色',
          key: 'blue'
        }
      ],
      arrow: '',
      arrowData: [],
      initIndex: 0
    }
  },
  methods: {
    switchStatus () {
      this.$store.commit('setHeadVisetedShow')
    },
    handleCommand (com) {
      /**
      * 换主题的思路大概就是实现写好几套主题
      * 然后动态的选择加载哪一套主题
      * 本demo只是简单的展示
      * 后续会逐步完善
      */
      const themeLink = document.querySelector('link[name="theme"]')
      const pathName = '/static/theme/'
      const lastName = pathName + com + '.css'
      themeLink.setAttribute('href', lastName)
    },
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
      this.$nextTick(() => {
        const searchList = Array.from(document.querySelectorAll('.key-list'))
        searchList[this.initIndex].className += ' active'
      })
    },
    removeClassName (searchList) {
      const reg = /active/
      for (let i = 0; i < searchList.length; i++) {
        const cm = searchList[i].className
        if (reg.test(cm)) {
          searchList[i].className = 'key-list'
        }
      }
    },
    listenKeyCode (event) {
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
            this.arrow = searchList[i].innerHTML
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
.setting-wrap{
  .box-card{
    margin-bottom: 20px;
  }
  .grid-content{
    min-height: 40px;
  }
  .arrow-wrap{
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
}

</style>

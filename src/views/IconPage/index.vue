<template lang="html">
  <div class="svg-icon-demo components-wrap">
    <com-intro
      leftTxt="请点击右边链接进行查看组件使用方法"
      url="https://shimo.im/docs/oEVcPTwvkAI5oWhN/"
      urlTxt="使用方法">
    </com-intro>
    <div class="render-icon">
      <div class="icon-item" v-for="(item, index) in lists" :key="index">
        <el-tooltip class="item" effect="dark" placement="top" @click.native="copy(renderIcon(item))">
          <div slot="content">
            {{renderIcon(item)}}
          </div>
          <div>
            <svg-icon :name="item" :size="26" class="icon-demo"/>
            <span>{{item}}</span>
          </div>
        </el-tooltip>
      </div>
    </div>
    <input class="copy-box" ref="clipboard" type="text" v-model="copyText">
  </div>
</template>

<script>
import iconName from './index'
export default {
  data () {
    return {
      lists: iconName,
      copyText: ''
    }
  },
  methods: {
    renderIcon (name) {
      return `<svg-icon name="${name}"/>`
    },
    copy (item) {
      this.copyText = item
      setTimeout(() => {
        this.$refs.clipboard.select()
        document.execCommand('Copy')
        this.$message({
          message: '复制成功啦, 赶快使用吧',
          type: 'success'
        })
      }, 0)
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/mixin.scss';
.svg-icon-demo{
  .icon-item{
    margin: 20px;
    height: 90px;
    text-align: center;
    width: 110px;
    float: left;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
  }
  span{
    display: block;
    font-size: 20px;
    margin-top: 10px;
  }
  .copy-box{
    opacity: 0;
    height: 0;
  }
}
</style>

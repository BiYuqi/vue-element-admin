<template lang="html">
  <div class="svg-icon-demo components-wrap">
    <div class="link">
      <a href="https://shimo.im/docs/oEVcPTwvkAI5oWhN/" target="_blank">使用方法</a>
    </div>
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
.svg-icon-demo{
  .link{
    padding: 10px 20px;
    // margin: 20px;
    border-radius: 5px;
    background-color: rgba(64, 202, 198, .3);
    margin-bottom: 40px;
    a{
      color: rgba(64, 202, 198, 1);
      text-decoration: none;
    }
    a:visited, a:active{
      color: rgba(64, 202, 198, 1);
      text-decoration: none;
    }
  }
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

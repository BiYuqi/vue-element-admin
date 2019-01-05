<template>
  <div class="svg-icon-demo components-wrap">
    <com-intro
      leftTxt="请点击右边链接进行查看组件使用方法"
      url="https://shimo.im/docs/oEVcPTwvkAI5oWhN/"
      urlTxt="使用方法">
    </com-intro>
    <el-row>
      <el-col>
        <el-input
          v-model="searchIcon"
          placeholder="请输入关键字查询..."
          @input.native="searchIconAction">
        </el-input>
      </el-col>
    </el-row>
    <div class="render-icon">
      <div class="icon-item" v-for="(item, index) in lists" :key="index">
        <el-tooltip v-clipboard="renderIcon(item)" class="item" effect="dark" placement="top">
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
  </div>
</template>

<script>
import iconName from './index'
export default {
  data () {
    return {
      lists: iconName,
      searchIcon: ''
    }
  },
  methods: {
    renderIcon (name) {
      return `<svg-icon name="${name}"/>`
    },
    searchIconAction () {
      this.lists = iconName.filter((item) => {
        return item.toLowerCase().indexOf(this.searchIcon.toLowerCase()) > -1
      })
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

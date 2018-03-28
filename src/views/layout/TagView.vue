<template lang="html">
  <div class="tag-wrap" v-if="headVisetedShow && tagList.length > 0">
    <router-link :to="items.path" :key="items.path" class="tag-view" v-for="items in tagList">
      <el-tag
        :key="items.name"
        @click.native="tagClick(items.name)"
        closable
        @close.prevent="close(items.name)"
        :type="items.type" class="tag">
        {{items.meta.title}}
      </el-tag>
    </router-link>
  </div>
</template>

<script>
import { baseRoute } from '@/router/sidebar'
import filterName from '@/utils/includes'
import EventBus from '@/utils/eventBus'
export default {
  data () {
    return {}
  },
  methods: {
    tagClick (name) {
      // tagvisited 触发左侧边栏展开
      const flag = filterName(baseRoute, name)
      if (flag) {
        EventBus.$emit('openSidebar', flag)
      }
      this.$router.push({
        name: name
      })
    },
    close (name) {
      const obj = {
        vm: this,
        name: name
      }
      this.$store.commit('closeTagFromOpendList', obj)
    }
  },
  computed: {
    tagList () {
      return this.$store.state.pageOpenedList
    },
    headVisetedShow () {
      return this.$store.state.headVisetedShow
    }
  }
}
</script>

<style lang="scss">
.tag-wrap{
  line-height: 34px;
  height: 34px;
  background-color: #fff;
  border-bottom: 1px solid #d8dce5;
  padding: 0 10px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
  .tag{
    cursor: pointer;
  }
  .tag-view{
    position: relative;
    &.router-link-active{
      .el-tag{
        background-color: #409EFF;
        color: #fff !important;
        border-color: #409EFF;
        padding: 0 12px;
        padding-left: 20px;
        &:after{
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #fff;
          content: '';
          position: absolute;
          top: 6px;
          left: 8px;
        }
      }
      .el-icon-close{
        color: #fff;
      }
    }
  }
  .el-tag{
    border-radius: 0;
    margin: 0 2px;
    border: 1px solid #eee;
    color: #495060;
    height: 26px;
    line-height: 26px;
    background-color: #fff;
    transition: all .2s;
    .el-icon-close{
      font-size: 10px;
      transform: scale(.6);
      color: #495060;
      transition: all .2s;
      &:hover{
        background-color: #eee;
        color: #fff;
        transform: scale(1);
      }
    }
  }
}
</style>

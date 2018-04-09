<template>
  <div class="app-main" :class="{hideSidebar: isCollapse}">
    <header-on></header-on>
    <tag-view></tag-view>
    <div :class="{'components-wrap': isDashBoardPage}">
      <router-view :key="key"/>
    </div>
  </div>
</template>

<script>
import HeaderOn from '@/views/layout/Header'
import TagView from '@/views/layout/TagView'
export default {
  components: {
    HeaderOn,
    TagView
  },
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    },
    isCollapse () {
      return this.$store.state.sidebarStatus
    },
    isDashBoardPage () { // 为了处理样式  dashboard_index 页面不加padding
      return this.$route.name !== 'dashboard_index'
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/layout/appmain.scss';
</style>

<template>
  <div class="app-main" :class="{hideSidebar: isCollapse}">
    <header-on></header-on>
    <tag-view></tag-view>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import HeaderOn from '@/views/Layout/Header/header'
import TagView from '@/views/Layout/TagView/tagview'
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
    cachePage () {
      return this.$store.state.pageOpenedList.map(item => item.name)
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/layout/appmain.scss';
</style>

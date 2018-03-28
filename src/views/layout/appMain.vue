<template>
  <div class="app-main" :class="{hideSidebar: isCollapse}">
    <header-on></header-on>
    <tag-view></tag-view>
    <router-view :key="key"/>
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
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/layout/appmain.scss';
</style>

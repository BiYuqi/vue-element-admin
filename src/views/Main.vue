<template>
  <div class="main-wrap">
    <side-bar></side-bar>
    <div class="header-box"
      :style="{width: isCollapse}"
      :class="{active: $store.state.sidebarStatus === 1}">
      <header-on></header-on>
      <tag-view></tag-view>
    </div>
    <app-main></app-main>
  </div>
</template>

<script>
import AppMain from '@/views/layout/appMain'
import HeaderOn from '@/views/layout/Header/header.vue'
import TagView from '@/views/layout/TagView/tagview.vue'
import SideBar from '@/views/layout/Sidebar/index.vue'
import Cookie from 'js-cookie'
export default {
  data () {
    return {
    }
  },
  components: {
    AppMain,
    SideBar,
    HeaderOn,
    TagView
  },
  computed: {
    isCollapse () {
      return this.$store.state.sidebarStatus === 0 ? 'calc(100% - 180px)' : 'calc(100% - 36px)'
    }
  },
  mounted () {
    console.log(this.isCollapse)
  },
  created () {
    this.$store.commit('setOpenedList')
    this.$store.commit('setCurrentUserInfo', Cookie.get('user'))
  },
  watch: {
    '$route' (to, from) {
      this.$store.commit('setCurrentPageName', to.name)
    }
  }
}
</script>

<style lang="scss">
.main-wrap{
  // margin-top: 84px;
}
.header-box{
  position: fixed;
  left: 180px;
  top: 0;
  z-index: 666;
  transition: left .28s;
  &.active{
    left: 36px;
  }
}
</style>

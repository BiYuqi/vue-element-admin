<template>
  <div class="app-main"
    :class="{hideSidebar: isCollapse}"
    style="height: calc(100%);">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
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

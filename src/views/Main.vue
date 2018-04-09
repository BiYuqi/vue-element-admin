<template>
  <div class="main-wrap">
    <side-bar></side-bar>
    <app-main></app-main>
  </div>
</template>

<script>
import AppMain from '@/views/layout/AppMain'
import SideBar from '@/views/layout/SideBar'
export default {
  data () {
    return {
    }
  },
  components: {
    AppMain,
    SideBar
  },
  mounted () {
  },
  created () {
    this.$store.commit('setOpenedList')
  },
  watch: {
    '$route' (to, from) {}
  }
}
</script>

<style lang="scss">
</style>

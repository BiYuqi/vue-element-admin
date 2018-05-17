<template>
  <div class="main-wrap">
    <side-bar></side-bar>
    <app-main></app-main>
  </div>
</template>

<script>
import AppMain from '@/views/Layout/AppMain'
import SideBar from '@/views/Layout/SideBar/sidebar'
import Cookie from 'js-cookie'
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
</style>

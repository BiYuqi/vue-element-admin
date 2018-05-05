<template>
  <div class="set-language">
    <el-dropdown @command="handleCommand" trigger="click">
      <span class="el-dropdown-link">
        <svg-icon name="earth" :size="24"/>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh" :disabled="language==='zh'">中文</el-dropdown-item>
        <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  computed: {
    language () {
      return this.$store.getters.language
    }
  },
  methods: {
    handleCommand (lang) {
      this.$i18n.locale = lang
      this.$store.commit('setLanguage', lang)
    }
  }
}
</script>

<style lang="scss">
.el-dropdown-link{
  .icon-earth{
    color: gray;
  }
}
</style>

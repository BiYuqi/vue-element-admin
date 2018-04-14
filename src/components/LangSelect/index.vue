<template>
  <div class="set-language">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <svg-icon name="earth" :size="20"/>
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

<style lang="css">
</style>

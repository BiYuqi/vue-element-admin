<template>
  <div class="bugger components-wrap">
    <el-button @click="testBug">测试BUG</el-button>
    <screen-shots ids="bugger-page"></screen-shots>
    <error-log id="bugger-page"></error-log>
  </div>
</template>

<script>
import ErrorLog from '@/components/ErrorLog'
import ScreenShots from '@/components/ScreenShots'
export default {
  data () {
    return {}
  },
  mounted () {
    console.log(allMethods)
  },
  methods: {
    testBug () {
      console.log(a)
    }
  },
  components: {
    ErrorLog,
    ScreenShots
  }
}
</script>

<style lang="scss">
</style>

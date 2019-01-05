<template>
  <div class="form-two">
    <el-input v-model="innerData.two"></el-input>
    {{innerData.common}}
  </div>
</template>

<script>
export default {
  props: {
    formData: {
      type: Object
    }
  },
  data () {
    return {
      innerData: this.formData
    }
  },
  watch: {
    formData: {
      handler (val) {
        this.innerData = val
      },
      deep: true
    },
    innerData: {
      handler (val) {
        this.$emit('on-form-change', val)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss">
</style>

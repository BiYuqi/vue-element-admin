<template>
  <div class="form-one">
    <el-input v-model="innerOne.one"></el-input>
    {{innerOne.common}}
    {{innerOne.one2}}
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
      innerOne: this.formData
    }
  },
  watch: {
    formData: {
      handler (val) {
        this.innerOne = val
      },
      deep: true
    },
    innerOne: {
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

<template>
  <div class="mark-down">
    <ds-modal :visible.sync="visible"
    title="表单"></ds-modal>
    <el-button @click="opendModal">打开</el-button>
  </div>
</template>

<script>
import DsModal from '@/components/DsModal/modal.vue'
export default {
  data () {
    return {
      visible: false
    }
  },
  components: {
    DsModal
  },
  methods: {
    opendModal () {
      this.visible = true
    }
  }
}
</script>

<style lang="css">
</style>

<template>
  <div class="little-demo components-wrap">
    <input-focus v-model="test" iconName="search" style="width:200px;"></input-focus>
  </div>
</template>

<script>
import InputFocus from '@/components/InputFocus'
export default {
  components: {
    InputFocus
  },
  data () {
    return {
      test: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>

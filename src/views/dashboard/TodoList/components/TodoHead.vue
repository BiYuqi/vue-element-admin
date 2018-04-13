<template lang="html">
  <div class="todo-header">
    <el-input placeholder="TODO LIST" v-model="todoCon" @keyup.enter.native="submit">
      <template slot="prepend">
        <i class="el-icon-edit"></i>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todoCon: ''
    }
  },
  methods: {
    submit () {
      if (!this.todoCon) {
        this.$message({
          message: '内容不能为空',
          type: 'warning'
        })
        return
      }
      const obj = {
        status: 1,
        content: this.todoCon
      }
      // add content
      this.$store.commit('addTodoList', obj)
      this.todoCon = ''
    }
  }
}
</script>

<style lang="scss">
.todo-header{
  // padding: 6px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
  .el-input-group__prepend{
    border: none;
    background-color: transparent;
    font-size: 20px;
    padding: 0 10px;
  }
  input{
    border: none;
  }
}
</style>

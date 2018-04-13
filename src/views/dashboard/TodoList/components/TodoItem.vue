<template lang="html">
  <div class="todo-body">
    <ul class="todo-list">
      <li class="todo-item" v-for="(item, index) in todoList" :key="item.id">
        <div class="view">
          <span class="circle" :class="{active: item.status === 0}" @click="toogleClass(item, index)"></span>
          <label>{{ item.content }}</label>
          <button class="destroy" @click="removeTodo(index)">X</button>
        </div>
      </li>
      <!-- <li class="todo-left" v-if="todoList.length === 0">暂无</li> -->
    </ul>
  </div>
</template>

<script>
import EventBus from '@/utils/eventBus'
export default {
  data () {
    return {
      toogle: false,
      initSign: -1 // 默认查询全部list
    }
  },
  methods: {
    toogleClass (item, index) {
      this.$store.commit('readTodoList', {
        status: item.status === 0 ? 1 : 0, // 未读:已读
        index: index
      })
    },
    removeTodo (index) {
      this.$store.commit('removeTodo', index)
    },
    filterTodo (todoLeft, sign) { // 0 computed 1 active -1 All
      let reuturnVal
      if (sign === 1) {
        reuturnVal = todoLeft.filter((item) => item.status === 1)
      } else if (sign === 0) {
        reuturnVal = todoLeft.filter((item) => item.status === 0)
      } else {
        reuturnVal = todoLeft
      }
      return reuturnVal
    }
  },
  computed: {
    todoList () {
      return this.filterTodo(this.$store.state.todoList, this.initSign)
    }
  },
  mounted () {
    // 监听tab查询
    EventBus.$on('todoSign', (sign) => {
      this.initSign = sign
    })
  }
}
</script>

<style lang="scss">
.todo-body{
  border-top: 1px solid #e6e6e6;
  ul{
    list-style: none;
    max-height: 350px;
    overflow-y: scroll;
  }
  ul::-webkit-scrollbar{
    width: 1px;
    background-color: rgb(62, 194, 230);
  }
  .todo-left{
    text-align: center;
    color: #999;
    min-height: 40px;
    line-height: 40px;
  }
  .view{
    min-height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
    user-select: none;
    position: relative;
    .circle{
      width: 18px;
      height: 18px;
      border: 1px solid #d2cfcf;
      border-radius: 50%;
      display: inline-block;
      cursor: pointer;
      vertical-align: middle;
      position: absolute;
      top: 10px;
      left: 10px;
      &.active{
        &:after{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          display: block;
          content: '';
          width: 10px;
          height: 10px;
          background: rgb(103, 218, 230);
          border-radius: 50%;
        }
      }
      &.active + label {
        text-decoration: line-through;
        color: #cec7c7;
      }
    }
    &:hover > button{
      display: block;
    }
    button{
      position: absolute;
      top: 10px;
      right: 10px;
      color: rgb(77, 77, 77);
      background-color: #fff;
      font-size: 16px;
      border: none;
      outline: none;
      color: rgb(114, 118, 119);
      transition: all .2s;
      display: none;
      &:hover{
        color: #c33;
      }
    }
    label, button{
      cursor: pointer;
      vertical-align: middle;
    }
    label{
      padding-left: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 270px;
      color: #333;
      display: inline-block;
    }
  }
}
</style>

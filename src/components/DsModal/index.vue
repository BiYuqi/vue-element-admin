<template lang="html">
  <transition name="modal-fade">
    <div class="ds-modal" @click="dsClose">
      <div class="ds-main" :style="{width:width + 'px'}" @click.stop>
        <div class="ds-header">
          <slot name="header">
            <span class="ds-title">{{ title }}</span>
            <span class="ds-close" @click="dsClose">x</span>
          </slot>
        </div>
        <div class="ds-body">
          <slot name="body">HTTP构建于TCP/IP协议之上，默认端口号是80</slot>
        </div>
        <div class="ds-footer">
          <slot name="footer">
            <button class="ds-cancel ds-btn" @click="dsClose">{{ cancelText }}</button>
            <button class="ds-ok ds-btn" @click="dsOk">{{ okText }}</button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: 420
    },
    height: {
      type: [Number, String]
    },
    title: {
      type: String,
      default: '标题'
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  methods: {
    dsClose () {
      this.$emit('ds-close')
    },
    dsOk () {
      this.$emit('ds-ok')
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/mixin.scss';
.modal-fade-enter,
.modal-fade-leave-active{
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active{
  transition: opacity .3s ease;
}
.ds-modal{
  @include fixed(0, auto, auto, 0);
  background-color: rgba(0, 0, 0, .3);
  width: 100%;
  height: 100%;
  z-index: 999;
  .ds-close{
    position: absolute;
    right: 15px;
    color: #909399;
    cursor: pointer;
    font-size: 16px;
    padding: 2px;
    &:hover{
      color: rgb(41, 155, 212);
    }
  }
  .ds-title{
    color: #303133;
    font-size: 18px;
  }
  .ds-main{
    @include abs(50%, auto, auto, 50%);
    @include tf;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    padding-bottom: 10px;
  }
  .ds-header{
    padding: 15px;
    padding-bottom: 10px;
    position: relative;
  }
  .ds-body{
    padding: 15px;
  }
  .ds-footer{
    text-align: right;
    padding: 5px 15px 0;
  }
  .ds-btn{
    outline: none;
    border: none;
    padding: 8px 14px;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;
    transition: all .1s;
  }
  .ds-ok{
    background-color: rgb(41, 155, 212);
    color: #fff;
  }
  .ds-cancel{
    border: 1px solid #dcdfe6;
    &:hover{
      border-color: #c6e2ff;
      background-color: #ecf5ff;
      color: rgb(41, 155, 212);
    }
  }
}
</style>

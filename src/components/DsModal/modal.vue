<template lang="html">
  <transition name="modal-fade">
    <div class="dialog__wrapper" v-if="visible" @click="closeModal">
      <div class="modal" v-if="visible"></div>
      <div class="dialog__main" :style="{width:width + 'px'}">
        <div class="dialog__header">
          <span class="dialog__title_tx" v-if="title">{{ title }}</span>
          <svg-icon class="dialog__close__bt" @click.native="diClose" name="close"></svg-icon>
        </div>
        <div class="dialog__body">
          <slot name="body"></slot>
        </div>
        <div class="dialog__footer">
          <slot name="footer">
            <button class="dialog__close dialog__btn" @click="dsClose">{{ closeText }}</button>
            <button class="dialog__open dialog__btn" @click="dsOk">{{ okText }}</button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: String,
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: [Number, String],
      default: 420
    },
    height: {
      type: [Number, String]
    },
    closeText: {
      type: String,
      default: '取消'
    },
    okText: {
      type: String,
      default: '确定'
    }
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    },
    closeModal (e) {
      if (this.visible) {
        if (document.querySelector('.modal').contains(e.target)) {
          this.close()
        }
      }
    },
    diClose () {
      this.$emit('update:visible', false)
    },
    dsClose () {
      this.$emit('update:visible', false)
    },
    dsOk () {
      this.$emit('close')
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
.dialog__wrapper{
  width: 100%;
  height: 100%;
  @include fixed(0, auto, auto, 0);
  z-index: 1000;
  .modal{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1002;
    background-color: rgba(0,0,0, .2);
    cursor: pointer;
  }
  .dialog__main{
    @include abs(50%, auto, auto, 50%);
    @include tf;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    padding-bottom: 10px;
    background-color: #fff;
    z-index: 1003;
  }
  .dialog__header{
    padding: 15px;
    padding-bottom: 10px;
    position: relative;
    overflow: hidden;
    .dialog__close__bt{
      float: right;
      color: #909399;
      cursor: pointer;
      font-size: 16px;
      padding: 2px;
      line-height: 1;
      &:hover{
        color: rgb(41, 155, 212);
      }
    }
    .dialog__title_tx{
      color: #303133;
      font-size: 18px;
    }
  }
  .dialog__footer{
    text-align: right;
    padding: 2px 15px;
  }
  .dialog__btn{
    outline: none;
    border: none;
    padding: 8px 14px;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;
    transition: all .1s;
  }
  .dialog__open{
    background-color: rgb(41, 155, 212);
    color: #fff;
  }
  .dialog__close{
    border: 1px solid #dcdfe6;
    &:hover{
      border-color: #c6e2ff;
      background-color: #ecf5ff;
      color: rgb(41, 155, 212);
    }
  }
}
</style>

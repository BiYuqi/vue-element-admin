<template>
  <div class="material_input_focus" :class="actionClass">
    <div class="material_input_focus_line" :class="textClass" :style="{height: height + 'px', 'padding-top': 2 + 'px'}">
      <svg-icon v-if="iconName" name="search" class="input-icon"></svg-icon>
      <i class="material_input_text" :class="textClass">{{ text }}</i>
      <span class="line"></span>
      <input @input="handleInput" @focus="handleFocus" @blur="handleBulr" :style="{height: height - 4 + 'px'}" :placeholder="placeholder">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    height: {
      type: Number,
      default: 40
    },
    placeholder: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: '标题'
    },
    iconName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isFocus: false,
      currentValue: this.value
    }
  },
  computed: {
    actionClass () {
      return {
        'material_active': this.isFocus
      }
    },
    textClass () {
      return {
        'material_input_text_active': this.isFocus,
        'is-icon': !this.iconName
      }
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
  mounted () {
  },
  methods: {
    handleInput (event) {
      const value = event.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.$emit('change', value)
    },
    handleFocus (event) {
      this.isFocus = true
      this.currentValue = event.target.value
    },
    handleBulr (event) {
      if (event.target.value) {
        this.currentValue = event.target.value
      } else {
        this.isFocus = false
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/mixin.scss';
.material_input_focus{
  .material_input_focus_line{
    position: relative;
    transition: all .2s;
    position: relative;
    .line{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: $borderColor;
      &:after{
        position: absolute;
        display: block;
        content: '';
        bottom: 0;
        left: 50%;
        height: 1px;
        z-index: 1000;
        transition: .2s ease all;
      }
      &:before{
        position: absolute;
        display: block;
        content: '';
        bottom: 0;
        right: 50%;
        height: 1px;
        z-index: 1000;
        transition: .2s ease all;
      }
    }
    &.material_input_text_active{
      .line{
        &:after{
          width: 50%;
          background-color: rgb(38, 148, 203);
        }
        &:before{
          width: 50%;
          background-color: rgb(38, 148, 203);
        }
      }
    }
    &.is-icon{
      .material_input_text{
        left: 0;
      }
      input{
        padding-left: 0;
      }
    }
  }
  .input-icon{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 4px;
    color: rgb(38, 148, 203);
  }
  .material_input_text{
    font-style: normal;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 30px;
    color: #666;
    font-size: 16px;
    transition: all .2s;
    &.material_input_text_active{
      top: -4px;
      left: 0;
      color: rgb(38, 148, 203);
      font-weight: bold;
    }
  }
  input{
    border: none;
    outline: none;
    width: 100%;
    padding-left: 30px;
  }
}
</style>

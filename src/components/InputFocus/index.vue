<template>
  <div class="material_input_focus" :class="actionClass">
    <div class="material_input_focus_line"
        :class="textClass"
        :style="{height: height + 'px', 'padding-top': 2 + 'px'}">
      <svg-icon
        v-if="iconName"
        name="search"
        class="input-icon">
      </svg-icon>
      <i
        class="material_input_text"
        @click="placeholderEvent"
        :class="textClass">
        {{ placeholder }}
      </i>
      <span class="line"></span>
      <span class="line-active"></span>
      <input
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBulr"
        :value="currentValue"
        :class="isBolder"
        ref="input"
        :style="{height: height - 4 + 'px'}">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    height: {
      type: [Number, String],
      default: 40
    },
    placeholder: {
      type: String,
      default: '标题'
    },
    iconName: {
      type: String,
      default: ''
    },
    bolder: {
      type: Boolean,
      default: false
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
    },
    isBolder () {
      return {
        'is-bolder': this.bolder
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
    },
    placeholderEvent () {
      this.isFocus = true
      this.$refs.input.focus()
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
    .line-active{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: $borderActiveColor;
      transform: scaleX(0);
      transition: all .2s;
    }
    .line{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: $borderColor;
    }
    &.material_input_text_active{
      .line-active{
        transform: scaleX(1);
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
    color: $borderActiveColor;
  }
  .material_input_text{
    font-style: normal;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 30px;
    color: $holdColor;
    font-size: 14px;
    transition: all .2s;
    &.material_input_text_active{
      top: -4px;
      left: 0;
      color: $borderActiveColor;
      font-weight: bold;
      font-size: 12px;
    }
  }
  input{
    border: none;
    outline: none;
    width: 100%;
    padding-left: 30px;
  }
  .is-bolder{
    font-weight: bold;
  }
}
</style>

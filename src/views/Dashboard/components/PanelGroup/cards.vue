<template>
  <div class="cards">
    <div class="panel panel-peoples" :class="className">
      <svg-icon
        :name="name"
        :size="38">
      </svg-icon>
    </div>
    <div class="panel-box">
      <span class="top">{{topText}}</span>
      <count-to class="bot" :startVal='0' :endVal='botText' :duration='duration'></count-to>
    </div>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
  data () {
    return {
      start: 0
    }
  },
  props: {
    name: {
      type: [String, Number]
    },
    topText: {
      type: [String, Number]
    },
    botText: {
      type: [String, Number]
    },
    duration: {
      type: [String, Number],
      default: 2600
    }
  },
  computed: {
    className () {
      return `panel-${this.name}`
    }
  },
  components: {
    CountTo
  }
}
</script>

<style lang="scss">
@import './cards.scss';
.cards{
  height: 108px;
  cursor: pointer;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  color: #666;
  background: #fff;
  -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .icon{
    font-size: 4em;
  }
}
</style>

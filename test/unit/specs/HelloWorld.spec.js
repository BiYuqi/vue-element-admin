import Vue from 'vue'
import Dashboard from '@/views/Dashboard/dashboard.vue'

describe('dashboard.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Dashboard)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').Dashboard)
      .toEqual('Welcome to Your Vue.js App')
  })
})

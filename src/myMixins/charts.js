/**
* 注销图表组件
*/
export const dispose = {
  beforeDestroy () {
    this.charts.dispose()
    this.charts = null
  }
}
export const listenSideBar = {
  watch: {
    '$store.state.sidebarStatus': { // 监听侧边栏变化
      handler (status) {
        const sidebarElm = document.querySelector('.sidebar-wrap')
        sidebarElm.addEventListener('transitionend', () => {
          this.init(this.chartData)
          this.charts.resize()
        })
      },
      deep: true
    }
  }
}

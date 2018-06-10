export const listenSideBar = {
  watch: {
    '$store.state.sidebarStatus': { // 监听侧边栏变化
      handler (status) {
        const sidebarElm = document.querySelector('.sidebar-wrap')
        sidebarElm.addEventListener('transitionend', () => {
          this.charts.resize()
        })
      },
      deep: true
    }
  }
}

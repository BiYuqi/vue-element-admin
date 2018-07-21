export const listenSideBar = {
  watch: {
    '$store.state.sidebarStatus': { // 监听侧边栏变化
      handler (status) {
        const HeaderIcon = document.querySelector('.header-icon')
        HeaderIcon.addEventListener('transitionend', () => {
          this.charts && this.charts.resize()
        })
      },
      deep: true
    }
  }
}

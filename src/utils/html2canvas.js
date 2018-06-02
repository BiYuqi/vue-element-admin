import html2canvas from 'html2canvas'

export default class Html2Canvas {
  getDPR () {
    if (window.devicePixelRatio && window.devicePixelRatio > 1) {
      return window.devicePixelRatio
    }
    return 1
  }

  img2Canvas (url, crossOrigin = 'Anonymous') {
    if (!url) {
      return new Error('The url is required')
    }
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = function () {
        const canvas = document.createElement('canvas')
        canvas.width = this.naturalWidth
        canvas.height = this.naturalHeight

        const ctx = canvas.getContext('2d')
        ctx.drawImage(this, 0, 0)

        resolve(canvas.toDataURL('image/png'))
      }
      img.onerror = reject
      img.setAttribute('crossOrigin', crossOrigin)
      img.src = url
    })
  }

  drawCanvas (selector) {
    const dom = document.querySelector(selector)
    const rect = dom.getBoundingClientRect()
    // 计算宽高
    const width = parseInt(rect.width, 10)
    const height = parseInt(rect.height, 10)
    // 获取像素比
    const DPRValue = this.getDPR()

    // 创建canva
    const canvas = document.createElement('canvas')
    // 设置canva属性宽高 = dom节点宽高*像素比
    canvas.width = width * DPRValue
    canvas.height = height * DPRValue
    // 设置canvas css属性宽高 = dom节点宽高
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    // get paient
    const ctx = canvas.getContext('2d')

    // 绘制内容放大至像素比值
    ctx.scale(DPRValue, DPRValue)

    return html2canvas(dom, {
      canvas: canvas,
      allowTaint: true,
      logging: true,
      profile: true,
      useCORS: true,
      scale: this.getDPR()
    })
  }

  downLoadImg (url, filename = Date.now()) {
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
  }
}

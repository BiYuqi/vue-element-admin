class EarchMove {
  constructor (canvas, bsColor) {
    this.canvas = canvas
    this.strokeColor = bsColor.strokeColor
    this.circleColor = bsColor.circleColor
    this.ctx = canvas.getContext('2d')
    this.circles = []
    this.radius = canvas.width / 2 - 20
    this.angle = Math.random() * 360
    this.x = canvas.width / 2
    this.y = canvas.width / 2
    this.timerId = true
    this.request = null
    this.init()
  }
  init () {
    for (let i = 0; i < 8; i++) {
      const dd = new DrawCircle(this.x, this.y, this.radius - i * 25, this.strokeColor)
      this.circles.push(dd)
      if (i < 4) { // 过滤小半径
        for (let j = 0; j < 3; j++) {
          const size = j === 1 ? Math.floor(Math.random() * 8 + 10) : Math.floor(Math.random() * 6 + 3)
          const speed = 1 / ((size - 2) * 35)
          const plants = new DrawPlanet(speed, size, this.circleColor)
          dd.addPlantes(plants)
        }
      }
    }
  }

  loop () {
    const { ctx } = this
    ctx.save()
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.circles.forEach((v, k) => {
      v.draw(ctx)
      v.planets.forEach((plant) => {
        plant.draw(v.x, v.y, v.radius, ctx)
      })
    })
    ctx.restore()
    if (this.timerId) {
      this.request = requestAnimationFrame(this.loop.bind(this))
    }
  }

  stop () {
    this.timerId = false
    cancelAnimationFrame(this.request)
  }

  start () {
    this.timerId = true
    this.loop()
  }
}
class DrawCircle {
  constructor (x, y, r, color) {
    this.x = x
    this.y = y
    this.radius = r
    this.planets = []
    this.color = color
  }
  draw (ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.strokeStyle = this.color
    ctx.stroke()
    ctx.closePath()
  }
  addPlantes (plant) {
    this.planets.push(plant)
    plant.orbit = this
  }
}

class DrawPlanet {
  constructor (speed, size, color) {
    this.speed = speed
    this.sizes = size
    this.offset = Math.random() * 360
    this.color = color
  }
  draw (x, y, radius, ctx) {
    const xx = x + (radius * Math.cos(this.offset))
    const yy = y + (radius * Math.sin(this.offset))
    ctx.beginPath()
    ctx.arc(xx, yy, this.sizes, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
    this.offset += this.speed
  }
}

export default EarchMove

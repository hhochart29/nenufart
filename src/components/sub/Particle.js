class Particle {
  constructor (canvas, ctx, x, y, w, dx, dy, speed, mouse, color) {
    this.canvas = canvas
    this.ctx = ctx
    this.x = x
    this.y = y
    this.w = w
    this.dx = dx
    this.dy = dy
    this.speed = speed
    // this.mouse = mouse
    this.color = color
    this.minW = 5
    this.maxW = 10
  }

  draw () {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.w, 0, 2 * Math.PI, false)
    this.ctx.fillStyle = this.color
    this.ctx.fill()
    this.ctx.closePath()
  }

  update () {
    this.x += this.dx * this.speed
    this.y += this.dy * this.speed

    // Gestion des rebonds
    if (this.x < 0 || this.x > this.canvas.width) {
      this.dx = -this.dx
    }
    if (this.y < 0 || this.y > this.canvas.height) {
      this.dy = -this.dy
    }

    this.draw()
  }

  static range (value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1)
  }
}

export default Particle

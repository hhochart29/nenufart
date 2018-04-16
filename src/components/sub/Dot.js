export default class Dot {
  constructor (canvas, ctx, dots, mousePosition) {
    this.vx = 2 * Math.random()
    this.vy = 2 * Math.random()
    this.radius = Math.random()
    this.canvas = canvas
    this.ctx = ctx
    this.dots = dots
    this.x = Math.random() * this.canvas.width
    this.y = Math.random() * this.canvas.height
    this.mousePosition = mousePosition
  }

  create () {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    this.ctx.fill()
  }

  animate () {
    for (this.i = 0; this.i < this.dots.nb; this.i++) {
      this.dot = this.dots.array[this.i]

      if (this.dot.y < 0 || this.dot.y > this.canvas.height) {
        this.dot.vy = -this.dot.vy
      } else if (this.dot.x < 0 || this.dot.x > this.canvas.width) {
        this.dot.vx = -this.dot.vx
      }
      this.dot.x += this.dot.vx
      this.dot.y += this.dot.vy
    }
  }

  line () {
    for (this.i = 0; this.i < this.dots.nb; this.i++) {
      for (let j = 0; j < this.dots.nb; j++) {
        this.i_dot = this.dots.array[this.i]
        this.j_dot = this.dots.array[j]

        if ((this.i_dot.x - this.j_dot.x) < this.dots.distance && (this.i_dot.y - this.j_dot.y) < this.dots.distance && (this.i_dot.x - this.j_dot.x) > -this.dots.distance && (this.i_dot.y - this.j_dot.y) > -this.dots.distance) {
          if ((this.i_dot.x - this.mousePosition.x) < this.dots.d_radius && (this.i_dot.y - this.mousePosition.y) < this.dots.d_radius && (this.i_dot.x - this.mousePosition.x) > -this.dots.d_radius && (this.i_dot.y - this.mousePosition.y) > -this.dots.d_radius) {
            this.ctx.beginPath()
            this.ctx.moveTo(this.i_dot.x, this.i_dot.y)
            this.ctx.lineTo(this.j_dot.x, this.j_dot.y)
            this.ctx.stroke()
            this.ctx.closePath()
          }
        }
      }
    }
  }
}
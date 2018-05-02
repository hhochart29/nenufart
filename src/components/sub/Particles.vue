<template>
  <div id="canvasHome">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import Particle from './Particle'

export default {
  name: 'Particles',
  data () {
    return {
      i: 0,
      canvas: null,
      ctx: null,
      arrayPos: [],
      arrayParticles: [],
      dot: [],
      dotWidth: 3,
      dotColor: '#e1e1e1e1',
      linkColor: '#eaeaeaea',
      dotCount: 100,
      mouse: {
        x: 1,
        y: 1
      }
    }
  },
  mounted () {
    let self = this
    window.onmousemove = function (parameter) {
      self.mouse.x = parameter.pageX
      self.mouse.y = parameter.pageY
    }
    this.start()
  },
  methods: {
    start () {
      this.canvas = this.$refs.canvas
      this.canvas.width = document.body.clientWidth
      this.canvas.height = window.innerHeight
      this.ctx = this.canvas.getContext('2d')

      const animate = () => {
        requestAnimationFrame(animate)
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.20)'
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.arrayParticles.forEach((e) => {
          e.update()
          this.arrayPos.push(e)
        })

        // Creation des liens entre chaque élement à moins de 250 de distance et de même couleurs
        this.arrayPos.forEach((e) => {
          if (e.x - this.mouse.x < 125 && e.x - this.mouse.x > -125 && e.x !== this.mouse.x && e.y - this.mouse.y < 125 && e.y - this.mouse.y > -125 && e.y !== this.mouse.y) {
            this.ctx.beginPath()
            this.ctx.moveTo(e.x, e.y)
            this.ctx.lineWidth = 1
            this.ctx.lineTo(this.mouse.x, this.mouse.y)
            this.ctx.strokeStyle = this.linkColor
            this.ctx.stroke()
          }
        })
        this.arrayPos = []
      }

      for (let i = 0; i < this.dotCount; i++) {
        let x = Math.random() * this.canvas.width
        let y = Math.random() * this.canvas.height
        let w = this.dotWidth
        let dx = Math.random() - 0.5 * 2
        let dy = Math.random() - 0.5 * 2
        let speed = 1
        this.arrayParticles.push(new Particle(this.canvas, this.ctx, x, y, w, dx, dy, speed, this.mouse, this.dotColor))
      }
      animate()
    }
  }
}
</script>
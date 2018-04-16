<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import Dot from './Dot'
export default {
  name: 'Particles',
  data () {
    return {
      i: 0,
      canvas: null,
      ctx: null,
      i_dot: null,
      j_dot: null,
      colorDot: '#CECECE',
      color: '#CECECE',
      dots: {
        nb: 600,
        distance: 60,
        d_radius: 100,
        array: []
      },
      dot: [],
      mousePosition: {
        x: 30 * window.width / 100,
        y: 30 * window.height / 100
      }
    }
  },
  mounted () {
    let self = this
    window.onmousemove = function (parameter) {
      self.mousePosition.x = parameter.pageX
      self.mousePosition.y = parameter.pageY
    }
    this.canvasDots()
  },
  methods: {
    canvasDots () {
      this.canvas = this.$refs.canvas
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
      this.ctx = this.canvas.getContext('2d')

      this.canvas.style.display = 'block'
      this.ctx.fillStyle = this.colorDot
      this.ctx.lineWidth = 0.1
      this.ctx.strokeStyle = this.color

      this.mousePosition.x = window.innerWidth / 2
      this.mousePosition.y = window.innerHeight / 2

      setInterval(this.createDots, 2 / 30)
    },
    createDots () {
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (this.i = 0; this.i < this.dots.nb; this.i++) {
        this.dots.array.push(new Dot(this.canvas, this.ctx, this.dots, this.mousePosition))
        this.dot = this.dots.array[this.i]
        this.dot.create()
      }

      this.dot.line()
      this.dot.animate()
    }
  }
}
</script>
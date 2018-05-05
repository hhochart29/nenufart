<template>
  <div id="home" :style="{backgroundColor: color}">
    <div v-for="slide in fetchedSlides" v-if="slide.acf.subtitle === $route.name">
      <transition appear mode="out-in" name="component-fade">
        <div class="titles">
          <h1>{{ slide.title.rendered }}</h1>
          <h2>{{ slide.acf.subtitle }}</h2>
        </div>
      </transition>
    </div>
    <div class="dot-container">
      <div class="dot" v-for="slide in fetchedSlides" :class="{'active': slide.acf.subtitle === $route.name}"
           @click="toggleSlide(slide)"></div>
    </div>
    <Particles></Particles>
  </div>
</template>

<script>
import Particles from '@/components/sub/Particles'
import Axios from 'axios'

export default {
  name: 'Home',
  components: {Particles},
  data () {
    return {
      fetchedSlides: [],
      activeSlide: null,
      color: '#ffffff'
    }
  },
  methods: {
    toggleSlide (slide) {
      this.$router.push({name: slide.acf.subtitle})
      this.setColor()
    },
    setColor () {
      this.fetchedSlides.forEach((slide) => {
        if (slide.acf.subtitle === this.$route.name) {
          this.color = slide.acf.bg_color
        }
      })
    }
  },
  created () {
    Axios.get('wp-json/wp/v2/pages').then((response) => {
      response.data.forEach((e) => {
        e.active = false
      })
      response.data[response.data.length - 1].active = true
      this.fetchedSlides = response.data.reverse()
      this.setColor()
    })
  }
}
</script>

<style lang="scss">
  .component-fade-enter-active, .component-fade-leave-active {
    transition: all 1s ease;
  }

  .component-fade-enter, .component-fade-leave-to {
    opacity: 0;
    transform: translate3d(0, -10%, 0);
  }
</style>
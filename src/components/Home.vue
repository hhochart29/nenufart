<template>
  <div id="home" :style="{backgroundColor: color}">
    <div v-for="slide in fetchedSlides" v-if="slide.acf.subtitle === currentRoute" :key="slide.acf.subtitle">
      <transition appear mode="out-in" @enter="enterTitle" @leave="leaveTitle">
        <div class="titles">
          <h1 class='ml9'>
            <span class="text-wrapper">
              <span class="letters">{{ slide.title.rendered }}</span>
            </span>
          </h1>
          <h2 class='ml9'>
            <span class="text-wrapper">
              <span class="letters">{{ slide.acf.subtitle }}</span>
            </span>
          </h2>
        </div>
      </transition>

    </div>
    <div class="dot-container">
      <div class="dot" v-for="slide in fetchedSlides" :class="{'active': slide.acf.subtitle === currentRoute}"
           @click="toggleSlide(slide)" :key="slide.acf.subtitle"></div>
    </div>
    <Particles></Particles>
  </div>
</template>

<script>
import Particles from '@/components/sub/Particles'
import Axios from 'axios'
import anime from 'animejs'

export default {
  name: 'Home',
  components: {Particles},
  data () {
    return {
      fetchedSlides: [],
      activeSlide: null,
      color: '#ffffff',
      url: '/wp-json/wp/v2/pages',
      currentRoute: ''
    }
  },
  methods: {
    toggleSlide (slide) {
      this.$router.push({name: slide.acf.subtitle})
      switch (this.$route.name) {
        case 'Contact':
        case 'About':
        case 'Projets':
          this.currentRoute = this.$route.name
          break

        default:
          this.currentRoute = 'Projets'
          break
      }
      this.setColor()
    },
    setColor () {
      this.fetchedSlides.forEach(slide => {
        if (slide.acf.subtitle === this.currentRoute) {
          this.color = slide.acf.bg_color
        }
      })
    },
    enterTitle : function(){
      console.log('enter');
      
      document.querySelectorAll('.ml9 .letters').forEach(function(el){
        console.log(el);
        
        el.innerHTML = el.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
      });

      anime.timeline()
        .add({
          targets: '.ml9 .letter',
          scale: [0, 1],
          duration: 1500,
          elasticity: 600,
          delay: function(el, i) {
            return 45 * (i+1)
          }
        });
    },
    leaveTitle(){
      anime.timeline()
      .add({
          targets: '.ml9',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    },
  },
  created () {
    Axios.get(this.url).then(response => {
      response.data.forEach(e => {
        e.active = false
      })
      response.data[response.data.length - 1].active = true
      this.fetchedSlides = response.data.reverse()
      this.setColor()
    })
  },
  mounted () {
    switch (this.$route.name) {
      case 'Contact':
      case 'About':
      case 'Projets':
        this.currentRoute = this.$route.name
        break

      default:
        this.currentRoute = 'Projets'
        break
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
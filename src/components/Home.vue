<template>
  <div id="home" :style="{backgroundColor: color}">
    <div v-for="slide in fetchedSlides" v-if="slide.acf.subtitle === currentRoute">
      <transition appear mode="out-in" name="fade">
        <div class="titles">
          <h1>{{ slide.title.rendered }}</h1>
          <h2>{{ slide.acf.subtitle }}</h2>
        </div>
      </transition>
    </div>
    <div class="dot-container">
      <div class="dot" v-for="slide in fetchedSlides" :class="{'active': slide.acf.subtitle === currentRoute}"
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
                this.currentRoute = this.$route.name;
                break;
        
            default:
                this.currentRoute = 'Projets';            
                break;
        }
        this.setColor();
        
    },
    setColor () {
      this.fetchedSlides.forEach((slide) => {
        if (slide.acf.subtitle === this.currentRoute) {
          this.color = slide.acf.bg_color
        }
      })
    }
  },
  created () {
    Axios.get(this.url).then((response) => {
        response.data.forEach((e) => {
            e.active = false
        })
        console.log(response.data);
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
            this.currentRoute = this.$route.name;
            break;
    
        default:
            this.currentRoute = 'Projets';            
            break;
    }
    console.log(this.$route.name, this.currentRoute);
        
  }
}
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all 1s ease;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translate3d(0, -10%, 0);
  }
</style>
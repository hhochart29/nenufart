<template>
  <div class="relative">
    <div class="container-about container">

      <h3 class="ml11" @click='revealh3'>
        <span class="text-wrapper">
          <span class="line line1"></span>
          <span class="letters">{{this.page.whoami_title}}</span>
        </span>
      </h3>

      <div class="container whoami-container">
        <div id="about-img" v-if="this.page.whoami_img">
          <img :src="this.page.whoami_img.url" alt="">
        </div>

        <div id="about-desc" v-html="this.page.whoami_content"></div>

        <div class="activities" v-if="this.page.whoami_passion">
          <div class="activity" v-for="passion in this.page.whoami_passion" :key="passion.text">
            <img :src="passion.icon.url" :alt="passion.text">
            <div class="activity-name">{{ passion.text }}</div>
          </div>

        </div>
      </div>

      <h3 class="ml11" @click='revealh3'>
        <span class="text-wrapper">
          <span class="line line1"></span>
          <span class="letters">{{this.page.parcours_title}}</span>
        </span>
      </h3>
      <div class="ecoles">
        <div class="ecole" v-for="ecole in this.page.ecole" :key="ecole.title">
          <div class="left-wrapper">
            <div class="info">
              <div class="ecole-name">
                {{ ecole.title }}
              </div>
              <div class="ecole-date">
                {{ ecole.date }}
              </div>
            </div>
            <div class="ecole-skills">
              <div class="ecole-skill" v-for="competence in ecole.competences" :key="competence.skill">
                {{ competence.skill }}
              </div>
            </div>
          </div>
          <div class="right-wrapper">
            <div class="ecole-img" :style="{ background: `url(${ecole.img.url})` }">
              <div class="ecole-lieu">
                {{ ecole.lieu }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BackToTop></BackToTop>
  </div>
</template>

<script>
import Axios from 'axios'
import anime from 'animejs'
import BackToTop from '@/components/sub/BackToTop'

export default {
  components: {BackToTop},
  name: 'About',
  data () {
    return {
      url: './wp-json/wp/v2/pages/2',
      page: ''
    }
  },
  created () {
    Axios.get(this.url).then((response) => {
      this.page = response.data.acf
    })
  },
  methods: {
    revealh3 (event) {
      const target = event.currentTarget

      target.querySelector('.letters').innerHTML = target.querySelector('.letters').textContent.replace(/[^ ]/ig, '<span class=\'letter\'>$&</span>')

      anime.timeline()
        .add({
          targets: target.querySelector('.line'),
          scaleY: [0, 1],
          opacity: [0.5, 1],
          easing: 'easeOutExpo',
          duration: 700
        })
        .add({
          targets: target.querySelector('.line'),
          translateX: [0, target.clientWidth],
          easing: 'easeOutExpo',
          duration: 700,
          delay: 100
        })
        .add({
          targets: target.querySelectorAll('.letter'),
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 600,
          offset: '-=775',
          delay: function (el, i) {
            return 34 * (i + 1)
          }
        })
        .add({
          targets: target.querySelector('.line'),
          opacity: 0,
          duration: 1000,
          easing: 'easeOutExpo',
          delay: 1000
        })
    }
  }
}
</script>
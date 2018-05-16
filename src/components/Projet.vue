<template>
  <div ref='projectSingle' class='relative' v-if="project">
    <router-link v-if='project.next' :to="{ name: 'Projet', params: { slug: project.next.slug }}" class='btt left'>
      <svg>
        <use xlink:href='#icon-arrow'></use>
      </svg>
    </router-link>
    <router-link v-if='project.previous' :to="{ name: 'Projet', params: { slug: project.previous.slug }}" class='btt right'>
      <svg>
        <use xlink:href='#icon-arrow'></use>
      </svg>
    </router-link>
    <div class='single-project'>
      <img class='header-img' :src="project.acf.header.url" :alt="project.acf.header.alt"/>
      <div class='project-top' :style="{ backgroundColor: project.acf.color }">
        <div class='container-medium'>
          <div class='project-table'>
            <div class='table-item' v-for='item in project.acf.text_table'>
              <span class='table-title'>{{item.titre}}</span>
              <span class='table-text'>{{item.text}}</span>
            </div>
          </div>
          <div class='project-content-text' v-html='project.acf.content'></div>
        </div>
      </div>
      <div class='project-images'>
        <div class='project-img' v-for='img in project.acf.images' :style="{ backgroundColor: img.bg_color }">
          <div :class="{'container-small': !img.full_width, 'container': img.full_width }">
            <img class='header-img' :src="img.image.url" :alt="img.image.alt"/>
          </div>
        </div>

      </div>
    </div>
    <BackToTop></BackToTop>
  </div>
</template>

<script>
import Axios from 'axios'
import BackToTop from '@/components/sub/BackToTop'

export default {
  components: {BackToTop},
  name: 'Projet',
  data () {
    return {
      url: '/wp-json/wp/v2/posts?slug=',
      project: null
    }
  },
  watch: {
    '$route': 'get'
  },
  created () {
    this.get()
  },
  methods: {
    get () {
      Axios.get(this.url + this.$route.params.slug).then((response) => {
        this.project = response.data[0]
        console.log(response.data[0])
      })
    }
  }
}
</script>
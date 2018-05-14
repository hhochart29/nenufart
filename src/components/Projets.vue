<template>
  <div class='relative' v-if="projects.length">
    <div class='projects-list'>


        <div class='project-item' v-for="project in projects" :key="project.id">
        <div class='project-info'>
            <span class="category">{{ project.acf.categorie }}</span>
            <h2>{{ project.acf.Title }}</h2>
            <span class='subtitle'>{{ project.acf.subtitle }}</span>
            <router-link class='cta' :to="'/projet/' + project.slug">En découvrir&nbsp;+</router-link>
        </div>

        <div v-if="project._embedded['wp:featuredmedia']['0'].source_url" class='project-thumbnail' :style="{ backgroundImage: `url(${project._embedded['wp:featuredmedia']['0'].source_url})` }">

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
  name: 'Projets',
  data () {
    return {
      url: '/wp-json/wp/v2/posts?_embed',
      projects: []
    }
  },
  created () {
    Axios.get(this.url).then((response) => {
      this.projects = response.data
    })
  }
}
</script>
<template>
  <div>
    <div class='project-item' v-for="project in projects" :key="project.id">
      <div class='project-info'>
        <span>{{ project.acf.categorie }}</span>
        <h2>{{ project.acf.Title }}</h2>
        <span>{{ project.acf.subtitle }}</span>
        <router-link :to="'/projet/' + project.slug">Home</router-link>
      </div>

      <div class='project-thumbnail' :style="{ backgroundImage: `url(${project._embedded['wp:featuredmedia']['0'].source_url})` }">

      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'Projets',
  data () {
    return {
      url: 'wp-json/wp/v2/posts?_embed',
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
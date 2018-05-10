<template>
  <div v-if="project">
    <span>{{project.acf.Title}}</span>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'Projet',
  data () {
    return {
      url: '/wp-json/wp/v2/posts?slug=',
      project: null
    }
  },
  created () {
    Axios.get(this.url + this.$route.params.slug).then((response) => {
      this.project = response.data[0]
      console.log(response.data[0])
    })
  }
}
</script>
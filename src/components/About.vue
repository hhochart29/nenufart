<template>
  <div class="container">
    <h3>Qui-suis-je ?</h3>

    <div class="container whoami-container">
      <div id="about-img">
        <img src="http://via.placeholder.com/500x500" alt="">
      </div>

      <div id="about-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi, cumque eum expedita fuga laboriosam
        laborum
        nam pariatur perferendis possimus qui quis ratione saepe sequi sunt tempora ut vero voluptatem.
      </div>

      <div class="activities">
        <div class="activity">
          <img src="http://via.placeholder.com/150x150" alt="">
          <div class="activity-name">Cuisine</div>
        </div>

        <div class="activity">
          <img src="http://via.placeholder.com/150x150" alt="">
          <div class="activity-name">Voyage</div>
        </div>

        <div class="activity">
          <img src="http://via.placeholder.com/150x150" alt="">
          <div class="activity-name">Dessin</div>

        </div>
        <div class="activity">
          <img src="http://via.placeholder.com/150x150" alt="">
          <div class="activity-name">Musique</div>

        </div>
        <div class="activity">
          <img src="http://via.placeholder.com/150x150" alt="">
          <div class="activity-name">Bricolage</div>

        </div>
      </div>
    </div>

    <h3>Parcours</h3>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'About',
  data () {
    return {
      url: './wp-json/wp/v2/pages/2',
      pages: ''
    }
  },
  created () {
    Axios.get(this.url).then((response) => {
      this.pages = response.data
      console.log(this.pages.acf)
    })
  }
}
</script>
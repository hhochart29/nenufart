<template>
  <div class="container">
    <h3>Qui-suis-je ?</h3>

    <div class="container whoami-container">
      <div id="about-img" v-if="this.page.whoami_img">
        <img :src="this.page.whoami_img.url" alt="">
      </div>

      <div id="about-desc" v-html="this.page.whoami_content"></div>

      <div class="activities" v-if="this.page.whoami_passion">
        <div class="activity" v-for="passion in this.page.whoami_passion">
          <img :src="passion.icon.url" :alt="passion.text">
          <div class="activity-name">{{ passion.text }}</div>
        </div>

      </div>
    </div>

    <h3>Parcours</h3>
    <div class="ecoles">
      <div class="ecole" v-for="ecole in this.page.ecole">
        <div class="left-wrapper">
          <div class="ecole-name">
            {{ ecole.title }}
          </div>
          <div class="ecole-date">
            {{ ecole.date }}
          </div>
          <div class="ecole-skill" v-for="competence in ecole.competences">
            {{ competence.skill }}
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
</template>

<script>
import Axios from 'axios'

export default {
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
      console.log(this.page)
    })
  }
}
</script>
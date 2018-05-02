<template>
  <div id="home">
    <h1 ref="title">{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <div class="dot-container">
      <div class="dot active"></div>
      <div class="dot"></div>
      <router-link to="contact">
        <div class="dot"></div>
      </router-link>
    </div>
    <Particles></Particles>
  </div>
</template>

<script>
import Particles from '@/components/sub/Particles'

export default {
  name: 'Home',
  components: {Particles},
  data () {
    return {
      title: 'Webdesigner',
      subtitle: 'About',
      url: '/about'
    }
  }
}
</script>
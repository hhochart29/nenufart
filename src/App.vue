<template>
  <div id="app">
    <Home></Home>
    <router-view/>
  </div>
</template>

<script>
import Home from '@/components/Home'

export default {
  components: {Home},
  name: 'app'
}
</script>
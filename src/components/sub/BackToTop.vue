<template>
    <div @click='back' class='btt'>
        <svg><use xlink:href='#icon-arrow'></use></svg>
    </div>
</template>

<script>

import 'gsap';
import 'gsap/ScrollToPlugin';

export default {
  name: 'BackToTop',
  data () {
    return {

    }
  },
  methods: {
      back(){
          TweenLite.to(window, 0.3, {scrollTo: 0});
      }
  }
}
</script>
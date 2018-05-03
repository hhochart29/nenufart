<template>
  <div id="contact">
    <h1>{{ title }}</h1>

    <form action="#">
      <input type="text" placeholder="Votre Nom">
      <input type="text" placeholder="Votre E-mail">
       <label>
        <textarea>Votre message</textarea>
      </label>
      <input type="submit" value="Envoyer">
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    data () {
      return {
        title: 'Contact'
      }
    },
    methods: {
      submit () {
        console.log('submit the form')
      }
    }
  }
</script>
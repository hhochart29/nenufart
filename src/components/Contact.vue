<template>
  <div id="contact">
    <h1>{{ title }}</h1>

    <form action="#">
      <input type="text" placeholder="Votre Nom" v-model="name">
      <input type="text" placeholder="Votre E-mail" v-model="email">
      <label>
        <textarea class="textinput" v-model="message"></textarea>
      </label>
      <input type="submit" @click.prevent="submit()" value="Envoyer">
    </form>
    <div v-if="formFeedbackMessages" v-for="formFeedbackMessage in formFeedbackMessages">
      <b>{{ formFeedbackMessage }}</b><br>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'Contact',
  data () {
    return {
      title: 'Contact',
      postURL: '/wp-content/themes/nenufart/form.php',
      name: '',
      email: '',
      message: 'Votre message',
      formFeedbackMessages: []
    }
  },
  methods: {
    submit () {
      Axios.post(this.postURL, {
        name: this.name,
        email: this.email,
        message: this.message
      }).then(response => {
        this.formFeedbackMessages = response.data
        console.log(this.formFeedbackMessages)
      })
    }
  }
}
</script>
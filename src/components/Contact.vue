<template>
  <div id="contact" class='container'>
    <h1>{{ title }}</h1>

    <form action="#">
      <div class="input-group">
        <input type="text" placeholder="Votre Nom" v-model="name">
        <transition name="fade">
          <div class="form-return error" v-if="formFeedbackMessages.name">{{ formFeedbackMessages.name }}</div>
        </transition>
      </div>
      <div class="input-group">
        <input type="text" placeholder="Votre E-mail" v-model="email">
        <transition name="fade">
          <div class="form-return error" v-if="formFeedbackMessages.mail">{{ formFeedbackMessages.mail }}</div>
        </transition>
      </div>
      <div class="input-group">
        <label>
          <textarea class="textinput" v-model="message"></textarea>
        </label>
        <transition name="fade">
          <div class="form-return error" v-if="formFeedbackMessages.message">{{ formFeedbackMessages.message }}</div>
        </transition>
      </div>
      <div class="input-group">
        <input type="submit" @click.prevent="submit()" value="Envoyer">
        <transition name="fade">
          <div class="form-return success" v-if="formFeedbackMessages.success">{{ formFeedbackMessages.success }}</div>
        </transition>
      </div>
    </form>
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

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 1s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translate3d(0, -10%, 0);
  }
</style>
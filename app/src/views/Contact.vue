<template>
  <div class="contact">
  <p>Please email us at <waiting :waiting="waiting"/> <a :href="mailto">{{ email }}</a> with any questions!</p>
  </div>
</template>

<script>

import Waiting from './Waiting.vue'
export default {
  components: {
    Waiting
  },
  data() {
    return {
    email: "",
    waiting: true,
    }
  },
  computed: {
    mailto() {
      return "mailto:" + this.email
    }
  },
  mounted: function() {
    
    var self=this;
    fetch("https://nickandluke-api.herokuapp.com/guest?name=mailto")
      .then(async response => {
        const data = await response.json();
        self.email =  data["email"]
        self.waiting = false
      })
  }

}
</script>
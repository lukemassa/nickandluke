<template>
  <div class="contact">
  <p>Please email us at <a :href="mailto">{{ email }}</a> with any questions!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    email: ""
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
      })
  }
}
</script>
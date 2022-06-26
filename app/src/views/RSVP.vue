<template>
  <div class="rsvp">
    <p>
      Enter one name as it appears on the invite
    </p>
    <input name="Name" v-model="guestName" v-on:keyup.enter="submit"><br><br>
    <button ref="submit" v-on:click="submit">Submit</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
    guestName: ""
    }
  },
  methods: {
  submit : function(){
    fetch("https://nickandluke-api.herokuapp.com/guest?name=" + this.guestName.toLowerCase())
      .then(async response => {
        const data = await response.json();
        if (!data["valid"]) {
          alert("Could not find '" + this.guestName + "', please try again")
          return
        }
        window.location.replace(data["form"]);
      })
  }
  }
}
</script>
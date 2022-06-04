<template>
  <div class="hello">
    <p>
      Enter one name from the invite
    </p>
    <input name="Name" v-model="guestName" v-on:keyup.enter="submit"><br><br>
    <button ref="submit" v-on:click="submit">Submit</button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
    guestName: ""
    }
  },
  methods: {
  submit : function(){
    fetch("https://tranquil-refuge-59251.herokuapp.com/guest?name=" + this.guestName.toLowerCase())
      .then(async response => {
        const data = await response.json();
        if (!data["valid"]) {
          alert("Could not find '" + this.guestName + "', please try again")
          return
        }
        window.open(data['form'], '_blank');
      })
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

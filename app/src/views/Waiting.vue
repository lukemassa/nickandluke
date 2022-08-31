<template>
  <span v-if="waiting">{{ char }}</span>
</template>

<script>
const stages = "◴◷◶◵"
export default {
  props: ["waiting"],
  data() {
    return {
    counter: 0
    }
  },
  computed: {
    char() {
      let index = this.counter % stages.length 
      return stages[index]
    }
  },
  mounted: function() {
    setInterval( () => {
      this.counter+=1
    }, 300)
  }
}
</script>
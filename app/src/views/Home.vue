<template>
  <div class="home">
    <img alt="Nick and Luke" src="../assets/4-small.jpg">
    <HomePage/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'Home',
  components: {
    HomePage
  }
}
</script>

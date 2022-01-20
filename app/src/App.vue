<template>

  <div id="nav">
    <h1>nick & luke</h1>
    <h3>october 1, 2022 | watertown, ma</h3>
    <img alt="Nick and Luke" src="./assets/4-small.jpg">
    <br>
    <router-link to="/">Home</router-link> |
    <router-link to="/lodging">Lodging</router-link> |
    <router-link to="/schedule">Schedule</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: "TW Cen MT", "Trebuchet MS", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
h1 {
  color:rgb(50 79 134);
      font-size: 60px;
      margin-top:10px;
      margin-bottom:0px;
}
h3 {
      margin-top:0px;
      margin-bottom:0px;
}
img {
  margin-top:10px;
  margin-bottom:10px;
}
.router-link-active {
  //background-color: green;
}
</style>

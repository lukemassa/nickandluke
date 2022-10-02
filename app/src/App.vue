<template>
<div>
  <div id="nav">
    <h1>nick & luke</h1>
    <h3>october 1, 2022 | watertown, ma | <a href="https://www.instagram.com/explore/tags/nickandluke2022/">#nickandluke2022</a></h3>
    <img alt="Nick and Luke" src="./assets/4-small.jpg">
    <br>
    <router-link to="/">Home</router-link> |
    <router-link to="/schedule">Schedule</router-link> |
    <router-link to="/thingstodo">Things To Do</router-link> |
    <router-link to="/registry">Registry</router-link> |

  </div>
  <router-view/>
  </div>
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

<template>
  <div id="app">
    <div id="nav">
      <h1>主服务</h1>
      <router-link to="/other-1">服务1</router-link> |
      <router-link to="/other-2">服务2</router-link> |
      <router-link to="/other-3">服务3</router-link>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>

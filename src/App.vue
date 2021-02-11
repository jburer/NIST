<template>
  <div id="app">
    <NavBar />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;
}

#nav a:link {
  font-weight: bold;
  color: #2c3e50;
}

#nav a:visited {
  font-weight: bold;
  color: #2c3e50;
}

#nav a:hover {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: underline;
}

#nav a:active {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: underline;
}
/*
#nav a.router-link-exact-active {
  color: #42b983;
}
*/
</style>

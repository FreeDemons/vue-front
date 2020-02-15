<template>
  <div id="app">
    <router-view />
  </div>
</template>



<script>
// import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      users: []
    }
  },

  created () {
    // axios.get('/api/users').then(res => {
    //   this.users = res.data
    // })
  }
}
</script>

<style>
@import url("./style/reset.css");
html,
body,
#app {
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

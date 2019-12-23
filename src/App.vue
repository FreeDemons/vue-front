<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import Home from './view/home'
// import axios from 'axios'
export default {
  components: { Home },
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <ul>
      <li v-for="(user, index) in this.users" :key="index">{{user.name}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      users: []
    }
  },

  created () {
    axios.get('http://localhost:3001/api/users').then(res => {
      this.users = res.data
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

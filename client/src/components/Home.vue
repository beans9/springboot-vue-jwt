<template>
  <div class="hello">
    <h1>Home</h1>
    <h2>Springboot Vue JWT</h2>
    <hr />
    <router-link to="/login">Login</router-link>
  </div>
</template>
<script>
import {getUserInfo} from '@/api/api'
export default {
  name: 'Home',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function () {
    getUserInfo().then((res) => {
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>

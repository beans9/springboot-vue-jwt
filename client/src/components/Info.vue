<template>
  <div class="hello">
    <h1>Info</h1>
    <h2>this page requires permission with auth </h2>
    <hr />
    <p>Hello {{user.username}}</p>

    <a href="" v-if="user.username!=null" @click="logoutProc">Logout</a>
  </div>
</template>
<script>
import {getUserInfo, logout} from '@/api/api'
export default {
  name: 'Home',
  data () {
    return {
      user: {
        username: null
      }
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function () {
    getUserInfo().then((res) => {
      this.user = res
    })
  },
  methods: {
    logoutProc: function () {
      logout()
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>

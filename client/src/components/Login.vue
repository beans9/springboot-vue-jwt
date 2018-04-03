<template>
  <div class="hello">
    <h1>Login</h1>
    <hr />
    <form @submit.prevent="onSubmit()">
      <input type="text" v-model="loginFrm.username" placeholder="Username">
      <input type="password" v-model="loginFrm.password" placeholder="Password">
      <input type="submit" value="Login">
    </form>
  </div>
</template>
<script>
import {getUserInfo, loginProc} from '@/api/api'
export default {
  name: 'Login',
  data () {
    return {
      loginFrm: {
        username: 'admin',
        password: '123123'
      }
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function () {
    getUserInfo().then((res) => {
      console.log(res)
    })
  },
  methods: {
    onSubmit: function () {
      loginProc(this.loginFrm).then(res => {
        // axios.defaults.headers.common['Authorization'] = res
        this.$router.push('/info')
      })
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

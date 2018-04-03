import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Info from '@/components/Info'

Vue.use(Router)

const requireAuth = () => (to, from, next) => {
  const {accessToken} = localStorage
  if (!accessToken) {
    next('/login?returnPath=me')
  } else {
    next()
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/info',
      name: 'Info',
      component: Info,
      beforeEnter: requireAuth()
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/landingPage'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: LandingPage
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

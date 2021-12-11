import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Error from '../views/Error.vue'
import Analysis from "@/views/Analysis";
import Graphics from "@/views/Graphics";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/analysis-data',
    name: 'Analysis',
      component: Analysis
  },
  {
    path: '/analysis-graphics',
    name: 'AnalysisComponents',
    component: Graphics
  },
  {
    path: '*',
    name: 'Error 404 2021',
    component: Error
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

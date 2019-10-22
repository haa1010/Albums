import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AlbumId from '../views/AlbumId.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  
  {
    path: '/albums',
    name: 'albums',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children : [
      {
        path: ':id',
        name: 'albumid',
        component: AlbumId
      },
      {
        path: 'create-albums',
        name: 'create',
        component: AlbumId
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/director',
    name: 'director',
    
    component: () => import(/* webpackChunkName: "director" */ '../views/DirectorView.vue')
  },
  {
    path: '/personaje',
    name: 'personaje',
    
    component: () => import(/* webpackChunkName: "director" */ '../views/PersonajeView.vue')
  },
  {
    path: '/dondeVer',
    name: 'streaming',
    
    component: () => import(/* webpackChunkName: "director" */ '../views/StreamingView.vue')
  },
  {
    path: '/media',
    name: 'media',
    
    component: () => import(/* webpackChunkName: "director" */ '../views/MediaView.vue')
  },
  {
    path: '/opinion',
    name: 'opinion',
    
    component: () => import(/* webpackChunkName: "director" */ '../views/OpinionView.vue')
  },
  {
    path: '/section1',
    name: 'section1',
    
    component: () => import(/* webpackChunkName: "director" */ '../views/Section1.vue')
  },
  {
    path: '/section2',
    name: 'section2',
    
    component: () => import(/* webpackChunkName: "director" */ '../views/Section2.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

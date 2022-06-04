import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RSVP from '../views/RSVP.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rsvp',
    name: 'RSVP',
    component: RSVP
  },
  {
    path: '/lodging',
    name: 'Loding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Lodging.vue')
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import('../views/Schedule.vue')
  },
  {
    path: '/registry',
    name: 'Registry',
    component: () => import('../views/Registry.vue')
  },
  {
    path: '/faq',
    name: 'FAQs',
    component: () => import('../views/FAQ.vue')
  },
  {
    path: '/thingstodo',
    name: 'ThingsToDo',
    component: () => import('../views/ThingsToDo.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

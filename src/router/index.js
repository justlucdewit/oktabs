import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Archive from '../views/Archive.vue'
import Tab from '../views/Tab.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/archive',
    name: 'Archive',
    component: Archive
  },
  {
    path: '/tab',
    name: 'Tab',
    component: Tab
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import ItemView from './views/ItemView.vue'

const routes = [
  {
    path: '/item/:id',
    name: 'Item',
    component: ItemView
  }
]

const router = createRouter({
  history: createWebHistory('/teste2/'),  // Add the base path for GitHub Pages
  routes
})

export default router

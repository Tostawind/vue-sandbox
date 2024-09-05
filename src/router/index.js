import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import RouterView from '../views/RouterView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/router', component: RouterView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
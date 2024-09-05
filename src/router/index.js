import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import RouterView from '../views/RouterView.vue'
import StructureView from '../views/StructureView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/router', component: RouterView },
  { path: '/structure', component: StructureView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
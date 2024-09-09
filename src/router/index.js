import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import RouterView from '../views/RouterView.vue'
import StructureView from '../views/StructureView.vue'
import ComponentsView from '../views/ComponentsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/router', component: RouterView },
  { path: '/structure', component: StructureView },
  { path: '/components', component: ComponentsView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ToDoView from '../views/ToDoView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'all',
    component: ToDoView
  },
  {
    path: '/:filter',
    name: 'filter',
    component: ToDoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

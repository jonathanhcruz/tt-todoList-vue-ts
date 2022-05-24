import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TodoView from "../views/TodoView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "all",
    component: TodoView,
  },
  {
    path: "/:filter",
    name: "filter",
    component: TodoView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

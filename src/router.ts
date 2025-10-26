import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import PlanDetail from "./views/PlanDetail.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/plan/:planId",
    component: PlanDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

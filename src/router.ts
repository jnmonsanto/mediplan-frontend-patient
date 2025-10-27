import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import PlanDetail from "./views/PlanDetail.vue";
import Login from "./views/Login.vue";
import ForgotPassword from "./views/ForgotPassword.vue";
import useAuth from "./composables/useAuth";

const routes = [
  {
    path: "/login",
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    meta: { requiresAuth: false },
  },
  {
    path: "/",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/plan/:planId",
    component: PlanDetail,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Route guard to check authentication
router.beforeEach((to, from, next) => {
  const { checkAuth, isAuthenticated } = useAuth();

  // Check authentication status on every route change
  checkAuth();

  // Give a small delay to ensure auth state is updated
  setTimeout(() => {
    const requiresAuth = to.meta.requiresAuth !== false;

    if (requiresAuth && !isAuthenticated.value) {
      // Redirect to login if route requires auth and user is not authenticated
      next("/login");
    } else if (to.path === "/login" && isAuthenticated.value) {
      // Redirect to home if user is logged in and trying to access login
      next("/");
    } else {
      next();
    }
  }, 0);
});

export default router;

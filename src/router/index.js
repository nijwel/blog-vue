import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/nijwel",
      name: "nijwel",
      component: () => import("../views/Nijwel.vue"),
    },
    {
      path: "/alquran",
      name: "alquran",
      component: () => import("../views/Alquran.vue"),
    },
  ],
});

export default router;

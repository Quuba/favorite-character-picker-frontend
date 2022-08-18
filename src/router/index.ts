import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import LoginPage from "@/pages/LoginPage/LoginPage.vue";
import ShowcasePage from "@/pages/ShowcasePage/ShowcasePage.vue";
import LoginPage from "@/pages/LoginPage/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage/RegisterPage.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "showcase",
    component: ShowcasePage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

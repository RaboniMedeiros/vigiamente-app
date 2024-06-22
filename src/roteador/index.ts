import CadastroUsuario from "@/view/CadastroUsuario.vue";
import CadastroTwitter from "@/view/CadastroTwitter.vue";
import Dashboard from "@/view/Dashboard.vue";
import Login from "@/view/Login.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: "/cadastro-usuario",
    name: "CadastroUsuario",
    component: CadastroUsuario,
    meta: { requiresAuth: true },
  },
  {
    path: "/cadastro-twitter",
    name: "CadastroTwitter",
    component: CadastroTwitter,
    meta: { requiresAuth: true },
  },
];

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

roteador.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("token")) {
      next({
        path: "/login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default roteador;

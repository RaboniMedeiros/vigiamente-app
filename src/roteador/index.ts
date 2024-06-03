import CadastroUsuario from "@/view/CadastroUsuario.vue";
import CadastroTwitter from "@/view/CadastroTwitter.vue";
import Dashboard from "@/view/Dashboard.vue";
import Login from "@/view/Login.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/cadastro-usuario",
    name: "CadastroUsuario",
    component: CadastroUsuario,
  },
  {
    path: "/cadastro-twitter",
    name: "CadastroTwitter",
    component: CadastroTwitter,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
];

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default roteador;

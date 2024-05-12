import CadastroUsuario from "@/views/CadastroUsuario.vue";
import Login from "@/views/Login.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/cadastro",
    name: "CadastroUsuario",
    component: CadastroUsuario,
  },
];

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default roteador;

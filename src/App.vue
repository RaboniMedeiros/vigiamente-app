<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoEscuroAtivo }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" @fazerLogout="logout" />
    </div>
    <div class="column is-three-quarter conteudo">
      <Notificacoes />
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import Notificacoes from "./components/Notificacoes.vue";
import { logout } from "@/service/authService";
import useNotificador from "@/hooks/notificador";
import { TipoNotificacao } from "@/interfaces/INotificacao";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Notificacoes,
  },
  data() {
    return {
      modoEscuroAtivo: false,
    };
  },
  setup() {
    const { notificar } = useNotificador();
    return {
      notificar,
    };
  },
  methods: {
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    },
    async logout() {
      try {
        await logout();
        this.notificar(
          TipoNotificacao.SUCESSO,
          "Logout efetuado",
          "Você não está mais logado"
        );
        window.location.href = '/login';
        window.location.reload();
      } catch (error) {
        this.notificar(
          TipoNotificacao.FALHA,
          "Logout falhou",
          "Não conseguimos sair"
        );
      }
    },
  },
});
</script>

<style>
main {
  --bg-primario: #fff;
  --texto-primario: #222e50;

  font-family: Roboto, sans-serif;
}

main.modo-escuro {
  --bg-primario: #252d44;
  --texto-primario: #ddd;

  font-family: Roboto, sans-serif;
}

.conteudo {
  background-color: var(--bg-primario);
  color: var(--texto-primario);
}
</style>

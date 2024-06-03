<template>
  <div class="rows" role="form" aria-label="Formulário de login">
    <form @submit.prevent="validar">
      <div class="row">
        <h2>Login</h2>
      </div>
      <div class="row">
        <label for="loginUsuario">Login</label>
        <input
          type="text"
          class="input"
          v-model="loginUsuario"
          id="loginUsuario"
          name="loginUsuario"
          placeholder="Login"
          required
        />
      </div>
      <div class="row">
        <label for="senhaUsuario">Senha</label>
        <input
          type="password"
          class="input"
          v-model="senhaUsuario"
          id="senhaUsuario"
          name="senhaUsuario"
          placeholder="Senha"
          required
        />
      </div>
      <div class="row">
        <button>Login</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { TipoNotificacao } from "@/interfaces/INotificacao";
import { useStore } from "@/store";
import { defineComponent } from "vue";
import useNotificador from "@/hooks/notificador";
import { login } from "@/service/authService";

/* eslint-disable vue/multi-word-component-names */

export default defineComponent({
  name: "Login",
  data() {
    return {
      loginUsuario: "",
      senhaUsuario: "",
      validacao: false,
    };
  },
  methods: {
    async validar() {
      try {
        await login(this.loginUsuario, this.senhaUsuario);
        this.notificar(
          TipoNotificacao.SUCESSO,
          "Login efetuado",
          "O login foi realizado com sucesso!"
        );
        this.$router.push("/dashboard");
      } catch (error) {
        this.notificar(
          TipoNotificacao.FALHA,
          "Login falhou",
          "O login não foi realizado!"
        );
      }
      this.loginUsuario = "";
      this.senhaUsuario = "";
    },
  },
  setup() {
    const store = useStore();
    const { notificar } = useNotificador();
    return {
      store,
      notificar,
    };
  },
});
</script>

<style scoped>
div.rows {
  padding: 2rem;
  font-size: 1rem;
  font-weight: 600;
}

div.row {
  padding: 0 0 2rem 0;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
}

input {
  margin-top: 0.5rem;
  background-color: rgba(181, 202, 141, 0.3);
  border: none;
  color: #b5ca8d;
}

input::placeholder {
  color: #b5ca8d;
  font-style: italic;
}

button {
  background-color: #426b69;
  color: white;
  border-radius: 0.25rem;
  width: 10rem;
  height: 2.5rem;
}

button:hover {
  font-weight: 600;
  box-shadow: 0px 0px 5px black;
}
</style>

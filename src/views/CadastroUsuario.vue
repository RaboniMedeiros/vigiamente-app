<template>
  <div class="rows" role="form" aria-label="Formulário de cadastro de usuário">
    <form @submit.prevent="cadastrar">
      <div class="row">
        <h2>Cadastrar Usuário</h2>
      </div>
      <div class="row">
        <label for="nomeUsuario">Nome</label>
        <input
          type="text"
          class="input"
          v-model="nomeUsuario"
          id="nomeUsuario"
          name="nomeUsuario"
          placeholder="Nome"
        />
      </div>
      <div class="row">
        <label for="perfilUsuario">Perfil</label>
        <input
          type="text"
          class="input"
          v-model="perfilUsuario"
          id="perfilUsuario"
          name="perfilUsuario"
          placeholder="Perfil"
        />
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
        />
      </div>
      <div class="row">
        <label for="emailUsuario">E-mail</label>
        <input
          type="text"
          class="input"
          v-model="emailUsuario"
          id="emailUsuario"
          name="emailUsuario"
          placeholder="E-mail"
        />
      </div>
      <div class="row">
        <button>Cadastrar Usuário</button>
      </div>
    </form>
    <!-- <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Perfil</th>
          <th>Login</th>
          <th>E-mail</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>
                {{ usuario.id }}
            </td>
            <td>
                {{ usuario.nome }}
            </td>
            <td>
                {{ usuario.perfil }}
            </td>
            <td>
                {{ usuario.login }}
            </td>
            <td>
                {{ usuario.email }}
            </td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IUsuario from "../interfaces/IUsuario";

export default defineComponent({
  name: "CadastroUsuario",
  data() {
    return {
      nomeUsuario: "",
      perfilUsuario: "",
      loginUsuario: "",
      emailUsuario: "",
      usuario: {}
    };
  },
  methods: {
    cadastrar() {
      const usuario: IUsuario = {
        nome: this.nomeUsuario,
        perfil: this.perfilUsuario,
        login: this.loginUsuario,
        email: this.emailUsuario,
        id: new Date().toISOString(),
      };
      this.usuario = usuario;
      this.nomeUsuario = "";
      this.perfilUsuario = "";
      this.loginUsuario = "";
      this.emailUsuario = "";
    },
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
  width: 12rem;
  height: 2.5rem;
}

button:hover {
  font-weight: 600;
  box-shadow: 0px 0px 5px black;
}
</style>

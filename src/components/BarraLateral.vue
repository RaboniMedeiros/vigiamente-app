<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Logo do projeto VigiaMente" />
      <br />
      VigiaMente
    </h1>
    <div class="has-text-centered">
      <button class="button" @click="alterarTema">
        {{ textoBotao }}
      </button>
    </div>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/login" class="link" v-if="!isAuthenticated">
            <button>Login</button>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="link" v-if="isAuthenticated">
            <button>Dashboard</button>
          </router-link>
        </li>
        <li>
          <router-link to="/cadastro-twitter" class="link" v-if="isAuthenticated">
            <button>Cadastrar Twitter</button>
          </router-link>
        </li>
        <li>
          <router-link to="/cadastro-usuario" class="link" v-if="isAdmin">
            <button>Cadastrar Usuário</button>
          </router-link>
        </li>
        <li>
          <button @click="sair" v-if="isAuthenticated">Sair</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { pegaUsuario } from "@/service/userService";

export default defineComponent({
  name: "BarraLateral",
  emits: ["aoTemaAlterado", "fazerLogout"],
  data() {
    return {
      modoEscuroAtivo: false,
      isAdminState: false, // Estado para armazenar se o usuário é admin
    };
  },
  computed: {
    textoBotao() {
      if (this.modoEscuroAtivo) {
        return "Modo Claro";
      }
      return "Modo Escuro";
    },
    isAuthenticated(): boolean {
      const token = localStorage.getItem("token");
      return !!token;
    },
    isAdmin(): boolean {
      return this.isAdminState;
    }
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo;
      this.$emit("aoTemaAlterado", this.modoEscuroAtivo);
    },
    sair() {
      this.$emit("fazerLogout");
    },
    async verificarAdmin() {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const usuario = await pegaUsuario();
          console.log(usuario);
          if (usuario.admin) {
            this.isAdminState = true;
          }
        } catch (error) {
          this.isAdminState = false;
        }
      } else {
        this.isAdminState = false;
      }
    }
  },
  mounted() {
    this.verificarAdmin(); // Verifica se o usuário é admin ao montar o componente
  },
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #222e50;
  width: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}

h1 > img {
  width: 12rem;
}

h1 {
  font-size: 1.5rem;
  color: white;
  font-weight: 800;
  padding-bottom: 2rem;
}

nav {
  box-shadow: none;
}

.panel li {
  margin: 1rem 0;
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

.link.router-link-active button {
  background-color: white;
  color: #426b69;
  border-radius: 0.25rem;
  width: 12rem;
  height: 2.5rem;
}

.link.router-link-active button:hover {
  font-weight: 400;
  box-shadow: none;
}
</style>

<template>
    <div class="rows" role="form" aria-label="Formulário de cadastro de perfil do Twitter">
      <form @submit.prevent="cadastrar">
        <div class="row">
          <h2>Cadastrar Perfil do Twitter</h2>
        </div>
        <div class="row">
          <label for="twitterPerfil">Usuário do Twitter</label>
          <input
            type="text"
            class="input"
            v-model="perfilTwitter"
            id="twitterPerfil"
            name="twitterPerfil"
            placeholder="Usuário do Twitter"
            required
          />
        </div>
        <div class="row">
          <button>Cadastrar Twitter</button>
        </div>
      </form>
      <div class="row">
        <h2 class="tweets">Tweets Cadastrados</h2>
        <ul>
          <li v-for="perfil in perfis" :key="perfil.id">@{{ perfil.usuario }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import useNotificador from "@/hooks/notificador";
  import { TipoNotificacao } from "@/interfaces/INotificacao";
  import { cadastrarPerfil, listarPerfis } from "@/service/perfilService";
  import IPerfil from "@/interfaces/IPerfil";
  
  export default defineComponent({
    name: "CadastroPerfilTwitter",
    data() {
      return {
        perfilTwitter: "",
        perfis: [] as IPerfil[],
      };
    },
    async created() {
      this.perfis = await listarPerfis();
    },
    methods: {
      async cadastrar() {
        const novoPerfil: IPerfil = {
          usuario: this.perfilTwitter,
        };
        try {
          await cadastrarPerfil(novoPerfil);
          this.notificar(
            TipoNotificacao.SUCESSO,
            "Cadastro efetuado",
            "O perfil foi cadastrado com sucesso!"
          );
          this.perfilTwitter = "";
          this.perfis.push(novoPerfil);
        } catch (error) {
          this.notificar(
            TipoNotificacao.FALHA,
            "Falha no Cadastro",
            "Erro ao cadastrar perfil!"
          );
        }
      },
    },
    setup() {
      const { notificar } = useNotificador();
      return {
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
  
  h2.tweets {
    padding-bottom: 2rem;
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

  li {
    font-weight: 200;
    padding-left: 2rem;
  }
  </style>
  
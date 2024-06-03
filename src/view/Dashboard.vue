<template>
  <div class="dashboard">
    <div class="row">
      <h2>Dashboard</h2>
    </div>
    <div class="row">
      <div class="perfil-buttons">
        <button
          v-for="perfil in perfis"
          :key="perfil._id"
          @click="selecionarPerfil(perfil)"
        >
          @{{ perfil.usuario }}
        </button>
      </div>
      <div v-if="perfilSelecionado" class="tweets-info">
        <h2>Tweets do Perfil @{{ perfilSelecionado.usuario }}</h2>
        <p>Total de Tweets: {{ totalTweets }}</p>
        <p>Tweets Suicidas: {{ totalSuicidas }}</p>
        <div class="suicida-tweets">
          <h3>Tweets Suicidas</h3>
          <ul>
            <li v-for="tweet in tweetsSuicidas" :key="tweet.id">
              <a :href="tweet.link">{{ tweet.texto }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useNotificador from "@/hooks/notificador";
import { listarPerfis, obterTweetsDoPerfil } from "@/service/perfilService";
import IPerfil from "@/interfaces/IPerfil";
import ITweet from "@/interfaces/ITweet";

/* eslint-disable vue/multi-word-component-names */

export default defineComponent({
  name: "Dashboard",
  data() {
    return {
      perfis: [] as IPerfil[],
      perfilSelecionado: null as IPerfil | null,
      totalTweets: 0,
      totalSuicidas: 0,
      tweetsSuicidas: [] as ITweet[],
    };
  },
  async created() {
    this.perfis = await listarPerfis();
  },
  methods: {
    async selecionarPerfil(perfil: IPerfil) {
      this.perfilSelecionado = perfil;
      const tweets = await obterTweetsDoPerfil(perfil._id);
      this.totalTweets = tweets.length;
      this.tweetsSuicidas = tweets.filter((tweet) => tweet.isSuicida);
      this.totalSuicidas = this.tweetsSuicidas.length;
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
h2 {
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 2rem;
}

.dashboard {
  padding: 2rem;
  font-size: 1rem;
  font-weight: 600;
}

.perfil-buttons {
  margin-bottom: 2rem;
}

.perfil-buttons button {
  background-color: #222e50;
  color: white;
  border-radius: 0.25rem;
  width: 12rem;
  height: 2.5rem;
  margin-right: 2rem;
}

.perfil-buttons button:hover {
  font-weight: 600;
  box-shadow: 0px 0px 5px black;
}

.tweets-info {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 0.5rem;
}

.suicida-tweets ul {
  list-style: none;
  padding: 0;
}

.suicida-tweets li {
  padding: 0.5rem;
  background-color: #ffe0e0;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
}
</style>

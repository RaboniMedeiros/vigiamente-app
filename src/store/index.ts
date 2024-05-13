import IUsuario from "@/interfaces/IUsuario";
import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import {
  ADICIONA_USUARIO,
  DEFINIR_TWEETS,
  DEFINIR_USUARIOS,
  NOTIFICAR,
} from "./tipo-mutacoes";
import { INotificacao } from "@/interfaces/INotificacao";
import { CADASTRAR_USUARIO, OBTER_TWEETS, OBTER_USUARIOS } from "./tipo-acoes";
import http from "@/http";
import ITweet from "@/interfaces/ITweet";

interface Estado {
  usuario: IUsuario;
  usuarios: IUsuario[];
  tweets: ITweet[];
  notificacoes: INotificacao[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    usuario: {
      id: "",
      nome: "",
      admin: false,
      usuario: "",
      email: "",
      senha: "",
    },
    usuarios: [],
    tweets: [],
    notificacoes: [],
  },
  mutations: {
    [ADICIONA_USUARIO](state, usuario: IUsuario) {
      state.usuario = usuario;
    },
    [DEFINIR_USUARIOS](state, usuarios: IUsuario[]) {
      state.usuarios = usuarios;
    },
    [DEFINIR_TWEETS](state, tweets: ITweet[]) {
      state.tweets = tweets;
    },
    [NOTIFICAR](state, novaNotificacao: INotificacao) {
      novaNotificacao.id = new Date().getTime();
      state.notificacoes.push(novaNotificacao);
      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(
          (notificacao) => notificacao.id != novaNotificacao.id
        );
      }, 3000);
    },
  },
  actions: {
    [OBTER_TWEETS]({ commit }) {
      http
        .get("tweets/")
        .then((resposta) => commit(DEFINIR_TWEETS, resposta.data));
    },
    [OBTER_USUARIOS]({ commit }) {
      return http
        .get("usuarios/")
        .then((resposta) => commit(DEFINIR_USUARIOS, resposta.data));
    },
    [CADASTRAR_USUARIO](contexto, usuario: IUsuario) {
      const dadosPost = {
        usuario: usuario.usuario,
        senha: "123",
        email: usuario.email,
        admin: usuario.admin,
      };
      return http.post("usuarios/", dadosPost);
    },
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}

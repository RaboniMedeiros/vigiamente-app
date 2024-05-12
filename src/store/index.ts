import IUsuario from "@/interfaces/IUsuario";
import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { ADICIONA_USUARIO, NOTIFICAR } from "./tipo-mutacoes";
import { INotificacao} from "@/interfaces/INotificacao";

interface Estado {
  usuario: IUsuario;
  notificacoes: INotificacao[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    usuario: {
      id: "",
      nome: "",
      perfil: false,
      login: "",
      email: "",
    },
    notificacoes: []
  },
  mutations: {
    [ADICIONA_USUARIO] (state, usuario: IUsuario) {
      state.usuario = usuario;
    },
    [NOTIFICAR] (state, novaNotificacao: INotificacao) {
      novaNotificacao.id = new Date().getTime()
      state.notificacoes.push(novaNotificacao)
      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
      }, 3000)
    }
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}

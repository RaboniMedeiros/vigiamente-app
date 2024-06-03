import api from './api';
import IPerfil from '@/interfaces/IPerfil';
import ITweet from '@/interfaces/ITweet';

export const cadastrarPerfil = async (perfil: IPerfil): Promise<void> => {
  await api.post('/app/perfis', perfil);
};

export const listarPerfis = async (): Promise<IPerfil[]> => {
  const response = await api.get<IPerfil[]>('/usuarios/perfis');
  return response.data;
};

export async function obterTweetsDoPerfil(perfilId: string): Promise<ITweet[]> {
  const response = await api.get(`/perfis/${perfilId}/tweets`);
  return response.data;
}

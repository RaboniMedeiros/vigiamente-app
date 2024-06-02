import api from "./api";
import IUsuario from "@/interfaces/IUsuario";

export const criaUsuario = async (novoUsuario: IUsuario): Promise<IUsuario> => {
  try {
    const response = await api.post<IUsuario>("/usuarios", novoUsuario);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao criar usuário");
  }
};

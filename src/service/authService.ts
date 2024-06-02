import axios from "axios";

const API_URL = "http://localhost:3000";

export interface LoginResponse {
  token: string;
}

export const login = async (
  usuario: string,
  senha: string
): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/auth/login`, {
      usuario,
      senha,
    });
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    throw new Error("Erro na autenticacao do usuario");
  }
};

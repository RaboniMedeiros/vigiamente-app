import axios from "axios";
import api from './api';

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

export const logout = async (): Promise<void> => {
  localStorage.removeItem('token');
  setAuthToken(null);
};

export const setAuthToken = async (token: string | null): Promise<void> => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

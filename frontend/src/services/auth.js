import api from './api';

export const login = async (email, senha) => {
  const response = await api.post('/auth/login', { email, senha });
  return response.data;
};

export const register = async (nome, email, senha) => {
  const response = await api.post('/auth/register', { nome, email, senha });
  return response.data;
};

export const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    // Implemente a decodificação do token JWT ou faça uma requisição para /me
    return JSON.parse(atob(token.split('.')[1]));
  } catch (error) {
    return null;
  }
};
import axios from "axios";

// Instância centralizada e otimizada do Axios
export const api = axios.create({
  baseURL: 'http://localhost:8001/',
  timeout: 10000, // 🌟 Se a API demorar mais de 10 segundos, ela cancela a busca e cai no catch
  headers: {
    'Content-Type': 'application/json',
  }
});

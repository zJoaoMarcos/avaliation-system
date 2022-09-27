import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_AVALIATION_SYSTEM_URL,
});

export default api;

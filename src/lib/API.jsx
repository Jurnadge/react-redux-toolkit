import axios from "axios";

// Create base URL API
export const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// Alter defaults after instance has been created
export const setAuthToken = (token) => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

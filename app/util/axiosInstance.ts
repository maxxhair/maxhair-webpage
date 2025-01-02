import axios from "axios";
import { store } from "../store";
import { LoggedUser } from "../types";

export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export const baseImageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Set your API base URL in environment variables
  headers: {
    "Content-Type": "application/json",
  },
});

//Interceptor for api autorization access using access-token
axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const user = state.user.user as LoggedUser;
    if (user.cookie) {
      config.headers.Authorization = `Bearer ${user.cookie}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

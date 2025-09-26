import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios";
import { useAuthStore } from "@/store/useAuthStore";
import authService from "@/features/auth/services";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const baseUri = import.meta.env.VITE_BACKEND_URL

export const axiosInstance = axios.create({
  baseURL: baseUri,
  headers: {
    "Content-Type": "application/json"
  }
})

// Handle proteted endpoint requests by adding authorization headers
axiosInstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
})

// Handle refresh token request
axiosInstance.interceptors.response.use((response) => 
  response,
  async (error) => {
    const originalRequest = error.config;

    if(error.response?.status === 401 && !originalRequest._retry){
      originalRequest._retry = true;
      try {
        const newToken = await authService.refreshToken();
        originalRequest.headers["Authorizaton"] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      }catch (err) {
        useAuthStore.getState().clearAuth(); // log out if refresh fails
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
)



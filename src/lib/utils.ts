import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios";

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


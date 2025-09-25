import { axiosInstance } from "@/lib/utils";
import { useAuthStore } from "@/store/useAuthStore";

export interface LoginPayload{
    username: string;
    password: string;
}

interface RegisterPayload{
    username: string;
    password: string;
    email: string;
}

interface ResponsePayload{
    accessToken: string;
    refreshToken: string;
    role: "USER" | "ADMIN";
}

const authService = {


    login: async(payload: LoginPayload): Promise<ResponsePayload> => {
        const { data } = await axiosInstance.post('/auth/login', payload);
        useAuthStore.getState().setAuth(data.access, data.refresh, data.role);
        return data;
    },

    register: async(payload: RegisterPayload): Promise<string> => {
        const { data } = await axiosInstance.post('/auth/register', payload);
        return data;
    },

    refreshToken: async(): Promise<string> => {
        const refreshToken = useAuthStore.getState().refreshToken;
        if(!refreshToken) throw new Error("No refresh token available");

        const { data } = await axiosInstance.post<{accessToken: string}>("/auth/refresh", {
            refreshToken
        })

        useAuthStore.getState().setAuth(data.accessToken, refreshToken, useAuthStore.getState().userRole)
        return data.accessToken;
    },

    logOut: () => {
        useAuthStore.getState().clearAuth();
    }
}

export default authService;
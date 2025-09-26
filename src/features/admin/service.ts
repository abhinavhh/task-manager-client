import { axiosInstance } from "@/lib/utils";
import { useAuthStore } from "@/store/useAuthStore";

export interface UserDetails {
    id: number;
    username: string,
    password: string,
    role: string | null,
    email: string
}

export const userApi = {
    getUser: async(): Promise<UserDetails[]> => {
        const { data } = await axiosInstance.get<UserDetails[]>('/admin/user/all', {
            headers: {
                "Authorization": `Bearer ${useAuthStore.getState().accessToken}`
            }
        });
        return data;
    }
}
import { axiosInstance } from "@/lib/utils";

export interface UserDetails {
    id: number;
    username: string,
    password: string,
    role: string | null,
    email: string
}

export const userApi = {
    getUser: async(): Promise<UserDetails[]> => {
        const { data } = await axiosInstance.get<UserDetails[]>('/admin/user/all');
        return data;
    }
}
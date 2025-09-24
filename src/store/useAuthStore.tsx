import { create } from "zustand";
import { persist } from "zustand/middleware";

type Role = "ADMIN" | "USER" | null;

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  userRole: Role;
  setAuth: (accessToken: string, refreshToekn: string, userRole: Role) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      userRole: null,

      // save token + role
      setAuth: (accessToken, refreshToken, userRole) =>
        set(() => ({
          accessToken,
          refreshToken,
          userRole,
        })),
      clearAuth: () =>
        set(() => ({
          accessToken: null,
          refreshToekn: null,
          userRole: null,
        })),
    }),
    {
      name: "auth-storage",
    }
  )
);

type Role = "ADMIN" | "USER" | null

interface AuthState {
    accessToken: string;
    refreshToekn: string;
}
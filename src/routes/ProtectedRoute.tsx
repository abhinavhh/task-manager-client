import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

type Props = {
  children: React.ReactNode;
  allowedRoles: string[];
};

export default function ProtectedRoute({ children, allowedRoles }: Props) {
  const { accessToken, userRole } = useAuthStore();

  if (!accessToken) {
    return <Navigate to="" replace />;
  }

  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}

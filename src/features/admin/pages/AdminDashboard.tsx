import { useAdminUsers } from "../hooks";
import {
  LoadingState,
  ErrorState,
  DashboardHeader,
  StatsCards,
  UsersList,
  AllUsersSummary,
} from "..";
import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate("/login", { replace: true });
    }
  }, [accessToken, navigate]);
  const {
    userData,
    filteredUsers,
    totalUsers,
    regularUsers,
    adminUsers,
    loading,
    error,
    refetch,
  } = useAdminUsers();

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} onRetry={refetch} />;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <DashboardHeader onRefresh={refetch} />
        <StatsCards
          totalUsers={totalUsers}
          regularUsers={regularUsers}
          adminUsers={adminUsers}
        />
        <UsersList users={filteredUsers} />
        <AllUsersSummary userData={userData} />
      </div>
    </div>
  );
};

export default AdminDashboard;

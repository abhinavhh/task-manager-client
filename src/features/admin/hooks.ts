import { useEffect, useState } from "react";
import { adminService, type UserDetails } from "./service";

export const useAdminUsers = () => {
  const [userData, setUserData] = useState<UserDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminService.getUser();
      setUserData(response);
    } catch (err: any) {
      setError(err?.response?.data || err?.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const refetch = () => {
    fetchUsers();
  };

  // Computed values
  const filteredUsers = userData.filter(user => user.role === null || user.role === "USER");
  const totalUsers = userData.length;
  const regularUsers = filteredUsers.length;
  const adminUsers = userData.filter(user => user.role === "ADMIN").length;

  return {
    userData,
    filteredUsers,
    totalUsers,
    regularUsers,
    adminUsers,
    loading,
    error,
    refetch
  };
};
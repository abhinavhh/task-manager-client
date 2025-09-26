import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/common/card";
import { Badge } from "@/Components/common/badge";
import { Avatar, AvatarFallback } from "@/Components/common/avatar";
import { Users, UserCheck, Shield } from "lucide-react";
import { userApi } from "../service";

// Mock API and types since they're not available in the artifact
// const mockUsers = [
//   { id: 1, username: "john_doe", email: "john@example.com", role: "USER" },
//   { id: 2, username: "jane_smith", email: "jane@example.com", role: "USER" },
//   { id: 3, username: "admin_user", email: "admin@example.com", role: "ADMIN" },
//   { id: 4, username: "guest_user", email: "guest@example.com", role: null },
// ];

// const userApi = {
//   getUser: () => Promise.resolve(mockUsers)
// };

type UserDetails = {
  id: number;
  username: string;
  email: string;
  role: string | null;
};

const AdminDashboard = () => {
  const [userData, setUserData] = useState<UserDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await userApi.getUser();
      setUserData(response);
    } catch (err: any) {
      setError(err?.response?.data || err?.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = userData.filter(user => user.role === null || user.role === "USER");
  const totalUsers = userData.length;
  const regularUsers = filteredUsers.length;
  const adminUsers = userData.filter(user => user.role === "ADMIN").length;

  const getInitials = (username: string) => {
    return username.substring(0, 2).toUpperCase();
  };

  const getRoleBadgeVariant = (role: string | null) => {
    switch (role) {
      case "ADMIN": return "destructive";
      case "USER": return "secondary";
      default: return "outline";
    }
  };

  const getRoleDisplay = (role: string | null) => {
    return role || "GUEST";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-64"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-32 bg-muted rounded-lg"></div>
              ))}
            </div>
            <div className="h-96 bg-muted rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-destructive">Error Loading Data</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{error}</p>
            <button 
              onClick={fetchUser}
              className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Retry
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage and monitor user accounts</p>
          </div>
          <button 
            onClick={fetchUser}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Refresh Data
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold text-foreground">{totalUsers}</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Regular Users</p>
                  <p className="text-2xl font-bold text-foreground">{regularUsers}</p>
                </div>
                <UserCheck className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Admin Users</p>
                  <p className="text-2xl font-bold text-foreground">{adminUsers}</p>
                </div>
                <Shield className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-foreground">User Details</CardTitle>
            <p className="text-muted-foreground">
              Showing {filteredUsers.length} regular users and guests
            </p>
          </CardHeader>
          <CardContent>
            {filteredUsers.length === 0 ? (
              <div className="text-center py-12">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No users found</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredUsers.map((user) => (
                  <div 
                    key={user.id} 
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {getInitials(user.username)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium text-foreground">{user.username}</h3>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <Badge variant={getRoleBadgeVariant(user.role)}>
                      {getRoleDisplay(user.role)}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* All Users Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-foreground">All Users Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {userData.map((user) => (
                <div 
                  key={user.id}
                  className="p-4 border border-border rounded-lg space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground">{user.username}</h4>
                    <Badge variant={getRoleBadgeVariant(user.role)} className="text-xs">
                      {getRoleDisplay(user.role)}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
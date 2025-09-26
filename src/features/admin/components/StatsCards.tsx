// features/admin/components/StatsCards.tsx
import { Users, UserCheck, Shield } from "lucide-react";
import { StatsCard } from "./StatsCard";

interface StatsCardsProps {
  totalUsers: number;
  regularUsers: number;
  adminUsers: number;
}

export const StatsCards = ({
  totalUsers,
  regularUsers,
  adminUsers,
}: StatsCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatsCard
        title="Total Users"
        value={totalUsers}
        icon={Users}
        borderColor="border-l-primary"
        iconColor="text-primary"
      />
      <StatsCard
        title="Regular Users"
        value={regularUsers}
        icon={UserCheck}
        borderColor="border-l-secondary"
        iconColor="text-secondary"
      />
      <StatsCard
        title="Admin Users"
        value={adminUsers}
        icon={Shield}
        borderColor="border-l-accent"
        iconColor="text-accent"
      />
    </div>
  );
};

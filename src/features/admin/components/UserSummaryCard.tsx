import { Badge } from "@/Components/common/badge";
import type { UserDetails } from "../service";

interface UserSummaryCardProps {
  user: UserDetails;
}

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

export const UserSummaryCard = ({ user }: UserSummaryCardProps) => {
  return (
    <div className="p-4 border border-border rounded-lg space-y-2">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-foreground">{user.username}</h4>
        <Badge variant={getRoleBadgeVariant(user.role)} className="text-xs">
          {getRoleDisplay(user.role)}
        </Badge>
      </div>
      <p className="text-sm text-muted-foreground">{user.email}</p>
    </div>
  );
};
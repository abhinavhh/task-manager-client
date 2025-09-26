import { Card, CardContent, CardHeader, CardTitle } from "@/Components/common/card";
import { Users } from "lucide-react";
import { UserCard } from "./UserCard";
import type { UserDetails } from "../service";

interface UsersListProps {
  users: UserDetails[];
}

export const UsersList = ({ users }: UsersListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-foreground">User Details</CardTitle>
        <p className="text-muted-foreground">
          Showing {users.length} regular users and guests
        </p>
      </CardHeader>
      <CardContent>
        {users.length === 0 ? (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No users found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
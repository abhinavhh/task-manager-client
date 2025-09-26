import { Card, CardContent, CardHeader, CardTitle } from "@/Components/common/card";
import { UserSummaryCard } from "..";
import type { UserDetails } from "../service";

interface AllUsersSummaryProps {
  userData: UserDetails[];
}

export const AllUsersSummary = ({ userData }: AllUsersSummaryProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-foreground">All Users Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userData.map((user) => (
            <UserSummaryCard key={user.id} user={user} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
// features/admin/components/UserCard.tsx
import { Avatar, AvatarFallback } from "@/Components/common/avatar";
import { Badge } from "@/Components/common/badge";
import type { UserDetails } from "../service";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/common/accordion";

interface UserCardProps {
  user: UserDetails;
}

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

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
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
        <Accordion
            type="single"
            collapsible
            className=""
        >
            <AccordionItem
                value={String(user.id)}
            >
                <AccordionTrigger className="text-blue-900">Show Details</AccordionTrigger>
                <AccordionContent>
                    <p>No Details Fetched</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
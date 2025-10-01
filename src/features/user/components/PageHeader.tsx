import { Badge } from "@/Components/common/badge";
import { Button } from "@/Components/common/button";
import { ArrowLeft } from "lucide-react";
import type { PageHeaderProps } from "../interface.model";

export const PageHeader: React.FC<PageHeaderProps> = ({ onBack }) => {
  return (
    <div className="flex items-center justify-between pb-6 border-b">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create New Task</h1>
          <p className="text-muted-foreground mt-1">
            Add a new task to your workspace
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="text-xs">
          Draft
        </Badge>
      </div>
    </div>
  );
};

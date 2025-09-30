import { Card, CardContent, CardHeader, CardTitle } from "@/Components/common/card";
import {  TrendingUp } from "lucide-react";
import type { StatCardProps } from "../interface.model";


const StatCard: React.FC<StatCardProps> = ({ title, value, trend, icon: Icon, onClick }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        {trend && (
          <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
            <TrendingUp className="h-3 w-3" />
            <span>{trend} from last week</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard
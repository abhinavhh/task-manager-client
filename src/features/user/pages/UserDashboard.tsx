import { ListTodo, CheckCircle2, Clock, Users } from "lucide-react";
import { useState } from "react";
import DashboardContent from "../components/DashboardContent";
import MenuBar from "../components/MenuBar";
import StatCard from "../components/StatCard";
import DashboardHeader from "../components/DashoardHeader";

const UserDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 max-w-7xl">
        <DashboardHeader userName="Alex" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Total Tasks"
            value="42"
            trend="+12%"
            icon={ListTodo}
          />
          <StatCard
            title="Completed"
            value="28"
            trend="+8%"
            icon={CheckCircle2}
          />
          <StatCard title="In Progress" value="9" icon={Clock} />
          <StatCard title="Team Members" value="15" trend="+2" icon={Users} />
        </div>

        <MenuBar activeTab={activeTab} onTabChange={setActiveTab} />

        <DashboardContent />
      </div>
    </div>
  );
};

export default UserDashboard;

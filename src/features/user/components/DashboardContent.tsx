import { Card } from "@/Components/common/card";
import StatCard from "./StatCard";

const DashboardContent = () => {
  return (
    <div className="grid gap-4">
      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <StatCard title="Total Task" value="24" />
        <StatCard title="Completed" value="10" />
        <StatCard title="In Progress" value="15" />
        <StatCard title="Todo" value="5" />
      </div>

      {/* Middle row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <Card className="md:col-span-2"></Card>
        <Card></Card>
        {/* remove 3rd card on small screens */}
        <Card className="hidden md:block"></Card>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <Card className="md:col-span-1"></Card>
        <Card className="md:col-span-1"></Card>
        <Card className="hidden md:block"></Card>
      </div>
    </div>
  );
};

export default DashboardContent;

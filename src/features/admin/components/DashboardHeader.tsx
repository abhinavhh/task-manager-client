interface DashboardHeaderProps {
  onRefresh: () => void;
}

export const DashboardHeader = ({ onRefresh }: DashboardHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage and monitor user accounts</p>
      </div>
      <button 
        onClick={onRefresh}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        Refresh Data
      </button>
    </div>
  );
};
import { Button } from "@/Components/common/button"
const DashoardHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-foreground">User Dashboard</h1>
        <p className="text-muted-foreground">Manage and monitor user accounts</p>
      </div>
      <div className="flex items-center gap-4">
        
        <Button>
            Add Task
        </Button>
      </div>
    </div>
  )
}

export default DashoardHeader
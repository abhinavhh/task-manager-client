import { Card, CardContent, CardHeader } from "@/Components/common/card"
import DashoardHeader from "../components/DashoardHeader"
import MenuBar from "../components/MenuBar"
import DashboardContent from "../components/DashboardContent"

const UserDashboard = () => {
  return (
    <div className="bg-background p-6">
      <div className="space-y-6 w-full"> 
        <div className="grid md:grid-cols-[200px_1fr] gap-2 min-h-screen">

          {/* Navigation Left Side*/}
          <MenuBar/>

          {/* Card Right Side */}
          <Card className="grid grid-rows-[0.5fr_4fr]">

            {/* Header */}
            <CardHeader>
              <DashoardHeader />
            </CardHeader>

            {/* Body */}
            <CardContent>
              <DashboardContent/>
            </CardContent>
          </Card>
        </div>
      </div>
        
    </div>
  )
}

export default UserDashboard